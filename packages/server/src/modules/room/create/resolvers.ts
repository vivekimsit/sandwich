import { ResolverMap } from "../../../types/graphql-utils";
import { Room } from "../../../entity/Room";
import { processUpload } from "../../shared/processUpload";

export const resolvers: ResolverMap = {
  Mutation: {
    createRoom: async (
      _,
      { input: { picture, amenities, ...data } },
      { session }
    ) => {
      const thumbnailUrl = picture ? await processUpload(picture) : null;

      const room = Room.create({
        ...data,
        thumbnailUrl
      });

      room.amenities = amenities;
      await room.save();

      console.log(session);
      return true;
    }
  }
};
