import { User } from "@/__generated__/gql"
import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

type UserArgs = { user: User; token: string }

type StoreState = {
  token: string | null
  user: User | null
  login({ user, token }: UserArgs): void
  logout(): void
  updateToken: (token: string) => void
}

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
      { name: "userStore" },
    ),
  ),
)
