import { GraphQLClient } from "graphql-request";

export const hygraph = new GraphQLClient("https://api-ap-northeast-1.hygraph.com/v2/clmadu98l05l801uj4xd85odl/master", {
  fetch,
  next: {
    revalidate: 900,
  },
});
