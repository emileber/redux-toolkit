/* eslint-disable */ /**
 *
 * THIS FILE IS AUTOGENERATED, DO NOT EDIT IT!
 *
 * instead, edit one of the `.graphql` files in this project and run
 *
 * npm run graphql-codegen
 *
 * for this file to be re-created
 */

import * as Types from '../../app/services/types.generated';

import { api } from 'app/services/baseApi';
export type GetPostQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type GetPostQuery = (
  { __typename?: 'Query' }
  & { post?: Types.Maybe<(
    { __typename?: 'Post' }
    & Pick<Types.Post, 'id' | 'title' | 'content'>
  )> }
);


export const GetPostDocument = `
    query GetPost($id: ID!) {
  post(where: {id: {equals: $id}}) {
    id
    title
    content
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    GetPost: build.query<GetPostQuery, GetPostQueryVariables>({
      query: (variables) => ({ document: GetPostDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useGetPostQuery, useLazyGetPostQuery } = injectedRtkApi;
