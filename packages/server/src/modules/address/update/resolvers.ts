import { getConnection } from "typeorm";
import { ResolverMap } from "../../../types/graphql-utils";
import { Address } from "../../../entity/Address";

export const resolvers: ResolverMap = {
  Mutation: {
    updateRoom: async (_, { addressId, input: { ...data } }) => {
      const {
        raw: [newAddress]
      } = await getConnection()
        .createQueryBuilder()
        .update(Address)
        .set(data)
        .where("id = :id", { id: addressId })
        .returning("*")
        .execute();

      console.log(newAddress);
      return true;
    }
  }
};
