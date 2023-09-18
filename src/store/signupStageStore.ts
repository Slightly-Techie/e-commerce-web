import { create } from "zustand";
import { SignupStage } from "../types";
import { devtools, persist } from "zustand/middleware";

type StoreState = {
  currentStage: SignupStage;
  changeStage(stage: SignupStage): void;
};

export const useSignupStageStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        currentStage: "enter details",
        changeStage: (stage) => set(() => ({ currentStage: stage })),
      }),
      { name: "signupStageStore" }
    )
  )
);
