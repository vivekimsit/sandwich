import { ResolverMap } from "../../../types/graphql-utils";
import { Room } from "../../../entity/Room";

export const resolvers: ResolverMap = {
  Room: {
    thumbnailUrl: (parent, _, { url }) =>
      parent.thumbnailUrl && `${url}/images/${parent.thumbnailUrl}`
  },
  Query: {
    findRooms: async () => {
      return Room.find();
    }
  }
};
