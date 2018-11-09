import { ResolverMap } from "../../../types/graphql-utils";
import { Address } from "../../../entity/Address";

export const resolvers: ResolverMap = {
  Query: {
    viewAddress: async (_, { id }) => {
      return Address.findOne({ where: { id }, relations: ["hotel"] });
    },
    viewHotelAddress: async (_, { id }) => {
      const address = await Address.findOne({
        where: { hotelId: id }
      });
      return address;
    }
  }
};
