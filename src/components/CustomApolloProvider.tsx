import { ApolloProvider } from "@apollo/client";
import useClient from "../hooks/useClient";

export default function CustomApolloProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { client } = useClient();

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
