import { ResolverMap } from "../../../types/graphql-utils";
import { Hotel } from "../../../entity/Hotel";

export const resolvers: ResolverMap = {
  Mutation: {
    deleteHotel: async (_, { input: { id } }, { session }) => {
      // isAuthenticated(session);
      const hotel = await Hotel.findOne({ where: { id } });

      if (!hotel) {
        throw new Error("Hotel does not exist");
      }

      if (session.userId !== hotel.userId) {
        // log message
        console.log(
          `this user ${
            session.userId
          } is trying to delete a Hotel they don't own`
        );
        throw new Error("not authorized");
      }

      console.log(session);
      await Hotel.remove(hotel);
      return true;
    }
  }
};
