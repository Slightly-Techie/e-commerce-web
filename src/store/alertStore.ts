import { create } from "zustand"
import { AlertArgs } from "../types"

type StoreState = {
  alerts: AlertArgs[]
  showAlert({ alertType, alertText }: AlertArgs): void
  hideAlert(): void
}

export const useAlertStore = create<StoreState>((set) => ({
  alerts: [],
  showAlert: (alert) => set((state) => ({ alerts: [...state.alerts, alert] })),
  hideAlert: () => set((state) => ({ alerts: [...state.alerts.slice(1)] })),
}))
