import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_BASE_URL,
  cache: new InMemoryCache(),
});

export const getClient = (token: string | null) => {
  if (!token) return client;

  return new ApolloClient({
    uri: import.meta.env.VITE_BASE_URL,
    headers: {
      Authorization: token,
    },
    cache: new InMemoryCache(),
  });
};
