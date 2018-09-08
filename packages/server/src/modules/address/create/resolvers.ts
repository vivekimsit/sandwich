import { ResolverMap } from "../../../types/graphql-utils";

import { Hotel } from "../../../entity/Hotel";

export const resolvers: ResolverMap = {
  Mutation: {
    createAddress: async (_, { input: { ...data } }, { session }) => {
      const { hotelId, ...address } = data;
      const hotel = await Hotel.findOne({ where: { id: hotelId } });
      if (hotel) {
        hotel.address = address;
        await hotel.save();
      }
      console.log(session);
      return true;
    }
  }
};
