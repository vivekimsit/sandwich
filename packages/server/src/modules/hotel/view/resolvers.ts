import { ResolverMap } from "../../../types/graphql-utils";
import { Hotel } from "../../../entity/Hotel";

export const resolvers: ResolverMap = {
  Query: {
    viewHotel: async (_, { id }) => {
      const hotel = await Hotel.findOne({
        where: { id },
        relations: ["address", "rooms"]
      });
      return hotel;
    }
  }
};
