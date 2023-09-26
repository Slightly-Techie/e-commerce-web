import { create } from "zustand";
import { User } from "../types";
import { devtools, persist } from "zustand/middleware";

type UserArgs = { user: User; token: string };

type StoreState = {
  token: string | null;
  user: User | null;
  login({ user, token }: UserArgs): void;
  logout(): void;
<<<<<<< HEAD
  updateToken: (token: string) => void;
=======
  updateToken: (toekn: string) => void;
>>>>>>> c79c0a4 (mm)
};

export const useUserStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        token: null,
        user: null,
        login: ({ user, token }) => set(() => ({ token, user })),
        logout: () => set(() => ({ token: null, user: null })),
        updateToken: (token) => set(() => ({ token })),
      }),
      { name: "userStore" }
    )
  )
);
