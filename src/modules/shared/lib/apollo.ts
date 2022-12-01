import { setContext } from "@apollo/client/link/context";
import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { Auth } from "aws-amplify";
import { HASURA_GRAPHQL_ENDPOINT } from "../../../../config";

// Create an http link:
const httpLink = new HttpLink({
  uri: HASURA_GRAPHQL_ENDPOINT,
});

const authLink = setContext(async (_, { headers }) => {
  let currentSession;

  try {
    currentSession = await Auth?.currentSession();
  } catch (error) {
    /// Ignore error
  }

  if (currentSession) {
    const token = currentSession.getIdToken().getJwtToken();
    const accessToken = currentSession.getAccessToken().getJwtToken();

    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
        // eslint-disable-next-line no-use-before-define
        apolloClient,
        "access-token": accessToken,
      },
    };
  }

  return {
    headers,
  };
});

let link = authLink.concat(httpLink);

export const apolloClient = new ApolloClient({
  ssrMode: false,
  link,
  cache: new InMemoryCache(),
});
