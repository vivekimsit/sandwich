import { ResolverMap } from "../../../types/graphql-utils";

import { Hotel } from "../../../entity/Hotel";
import { processUpload } from "../../shared/processUpload";

export const resolvers: ResolverMap = {
  Mutation: {
    createHotel: async (_, { input: { picture, ...data } }, { session }) => {
      const thumbnailUrl = picture ? await processUpload(picture) : null;

      const hotel = Hotel.create({
        ...data,
        thumbnailUrl,
        userId: session.userId
      });

      await hotel.save();
      return true;
    }
  }
};
