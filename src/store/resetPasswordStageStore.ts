import { create } from "zustand";
import { ResetPasswordStatus } from "../types";
import { devtools, persist } from "zustand/middleware";

type StoreState = {
  currentStage: ResetPasswordStatus;
  changeStage(stage: ResetPasswordStatus): void;
};

export const useResetPasswordStageStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        currentStage: "code",
        changeStage: (stage) => set(() => ({ currentStage: stage })),
      }),
      { name: "resetPasswordStageStore" }
    )
  )
);
