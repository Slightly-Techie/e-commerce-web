import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { ResetPasswordStatus } from "../types"

type StoreState = {
  currentStage: ResetPasswordStatus
  changeStage(stage: ResetPasswordStatus): void
}

export const useResetPasswordStageStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        currentStage: "code",
        changeStage: (stage) => set(() => ({ currentStage: stage })),
      }),
      { name: "resetPasswordStageStore" },
    ),
  ),
)
