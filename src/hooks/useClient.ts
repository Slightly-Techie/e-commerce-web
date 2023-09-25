// import { useCallback, useState, useEffect } from "react";
import { client, getClient } from "../lib/apollo-config";
import { useUserStore } from "../store/userStore";

const useClient = () => {
  const { token } = useUserStore();

  const authorisedClient = getClient(token);

  return { client: token ? authorisedClient : client };
};

export default useClient;
