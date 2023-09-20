import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://ecommerce-api-st.fly.dev",
  cache: new InMemoryCache(),
});

export const getClient = (token: string | null) => {
  if (!token) return client;

  return new ApolloClient({
    uri: "https://ecommerce-api-st.fly.dev",
    headers: {
      Authorization: token,
    },
    cache: new InMemoryCache(),
  });
};
