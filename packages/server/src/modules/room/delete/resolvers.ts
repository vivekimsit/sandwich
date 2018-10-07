import { ResolverMap } from "../../../types/graphql-utils";
import { Room } from "../../../entity/Room";

export const resolvers: ResolverMap = {
  Mutation: {
    deleteRoom: async (_, { id }, { session }) => {
      // isAuthenticated(session);
      const room = await Room.findOne({ where: { id } });

      if (!room) {
        throw new Error("does not exist");
      }

      console.log(session);
      await Room.remove(room);

      return true;
    }
  }
};
