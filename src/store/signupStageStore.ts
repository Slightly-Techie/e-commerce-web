import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { SignupStage } from "../types"

type StoreState = {
  currentStage: SignupStage
  changeStage(stage: SignupStage): void
}

export const useSignupStageStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        currentStage: "enter details",
        changeStage: (stage) => set(() => ({ currentStage: stage })),
      }),
      { name: "signupStageStore" },
    ),
  ),
)
