import { GraphQLClient } from "graphql-request";

export const hygraph = new GraphQLClient(
  "https://ap-northeast-1.cdn.hygraph.com/content/clmadu98l05l801uj4xd85odl/master",
  {
    fetch,
    next: {
      tags: ["hygraph"],
      revalidate: 86400,
    },
  },
);
