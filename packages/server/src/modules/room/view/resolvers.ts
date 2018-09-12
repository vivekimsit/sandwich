import { ResolverMap } from "../../../types/graphql-utils";
import { Room } from "../../../entity/Room";

export const resolvers: ResolverMap = {
  Query: {
    viewRoom: async (_, { id }) => {
      return Room.findOne({ where: { id } });
    }
  }
};
