import { ResolverMap } from "../../../types/graphql-utils";

import { Hotel } from "../../../entity/Hotel";
import { Address } from "../../../entity/Address";
import { processUpload } from "../../shared/processUpload";

export const resolvers: ResolverMap = {
  Mutation: {
    createHotel: async (
      _,
      { input: { picture, address, ...data } },
      { session }
    ) => {
      const thumbnailUrl = picture ? await processUpload(picture) : null;

      if (address) {
        const address = Address.create({ ...data.address });
        await address.save();
      }

      const hotel = Hotel.create({
        ...data,
        thumbnailUrl,
        userId: "e058f212-2d3f-42d4-938b-1c2568058491"
      });

      if (address) {
        hotel.address = address;
      }
      await hotel.save();

      console.log(session);
      return true;
    }
  }
};
