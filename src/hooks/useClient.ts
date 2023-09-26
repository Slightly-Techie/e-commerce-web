// import { useCallback, useState, useEffect } from "react";
<<<<<<< HEAD
import { client, getClient } from "../lib/apollo-config";
=======
import { client, getClient } from "../client";
>>>>>>> c79c0a4 (mm)
import { useUserStore } from "../store/userStore";

const useClient = () => {
  const { token } = useUserStore();

  const authorisedClient = getClient(token);

  return { client: token ? authorisedClient : client };
};

export default useClient;
