import { ResolverMap } from "../../../types/graphql-utils";
import { Hotel } from "../../../entity/Hotel";

export const resolvers: ResolverMap = {
  Hotel: {
    thumbnailUrl: (parent, _, { url }) =>
      parent.thumbnailUrl && `${url}/images/${parent.thumbnailUrl}`
  },
  Query: {
    findHotels: async () => {
      console.log("Finding hotel");
      return Hotel.find({ relations: ["address"] });
    }
  }
};
