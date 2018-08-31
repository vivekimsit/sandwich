import { ResolverMap } from "../../../types/graphql-utils";
import { Hotel } from "../../../entity/Hotel";

export const resolvers: ResolverMap = {
  Query: {
    viewHotel: async (_, { id }) => {
      return Hotel.findOne({ where: { id } });
    }
  }
};
