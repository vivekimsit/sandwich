import { ResolverMap } from "../../../types/graphql-utils";
import { Hotel } from "../../../entity/Hotel";
import { processUpload } from "../../shared/processUpload";
import { getConnection } from "typeorm";

export const resolvers: ResolverMap = {
  Mutation: {
    updateHotel: async (_, { input: { id, picture, ...data } }) => {
      if (picture) {
        data.thumbnailUrl = await processUpload(picture);
      }

      const {
        raw: [newHotel]
      } = await getConnection()
        .createQueryBuilder()
        .update(Hotel)
        .set(data)
        .where("id = :id", { id })
        .returning("*")
        .execute();

      console.log(newHotel);
      return true;
    }
  }
};
