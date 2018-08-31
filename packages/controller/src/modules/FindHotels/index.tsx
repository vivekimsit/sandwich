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
  listings: FindHotelsQuery_findHotels[];
  loading: boolean;
}

export const withFindHotels: any = graphql<
  any,
  FindHotelsQuery,
  {},
  WithFindHotels
>(findHotelsQuery, {
  props: ({ data }) => {
    let listings: FindHotelsQuery_findHotels[] = [];

    if (data && !data.loading && data.findHotels) {
      listings = data.findHotels;
    }

    return {
      listings,
      loading: data ? data.loading : false
    };
  }
});
