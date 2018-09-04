import { getConnection } from "typeorm";
import { ResolverMap } from "../../../types/graphql-utils";
import { Room } from "../../../entity/Room";
import { processUpload } from "../../shared/processUpload";

export const resolvers: ResolverMap = {
  Mutation: {
    updateRoom: async (_, { roomId, input: { picture, ...data } }) => {
      if (picture) {
        data.thumbnailUrl = await processUpload(picture);
      }

      const {
        raw: [newRoom]
      } = await getConnection()
        .createQueryBuilder()
        .update(Room)
        .set(data)
        .where("id = :id", { id: roomId })
        .returning("*")
        .execute();

      console.log(newRoom);
      return true;
    }
  }
};
