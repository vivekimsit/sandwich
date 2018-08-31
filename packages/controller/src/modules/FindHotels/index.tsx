// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { FindHotelsQuery, FindHotelsQuery_findHotels } from "../../schemaTypes";

export const findHotelsQuery = gql`
  query FindHotelsQuery {
    findHotels {
      id
      name
      thumbnailUrl
      owner {
        id
        email
      }
    }
  }
`;

export interface WithFindHotels {
  hotels: FindHotelsQuery_findHotels[];
  loading: boolean;
}

export const withFindHotels: any = graphql<
  any,
  FindHotelsQuery,
  {},
  WithFindHotels
>(findHotelsQuery, {
  props: ({ data }) => {
    let hotels: FindHotelsQuery_findHotels[] = [];

    if (data && !data.loading && data.findHotels) {
      hotels = data.findHotels;
    }

    return {
      hotels,
      loading: data ? data.loading : false
    };
  }
});
