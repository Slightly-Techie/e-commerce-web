import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache(),
});

export const getClient: (
  token: string | null,
) => ApolloClient<NormalizedCacheObject> = (token) => {
  if (!token) return client;

  return new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
    headers: {
      Authorization: token,
    },
    cache: new InMemoryCache(),
  });
};
