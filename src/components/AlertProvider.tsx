import { useAlertStore } from "../store/alertStore";
import Alert from "./Alert";
import { useEffect, useRef } from "react";

const AlertProvider = () => {
  const { alerts, hideAlert } = useAlertStore();
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      hideAlert();
    }, 3000);
  }, [alerts, hideAlert]);

  return alerts.length > 0 ? (
    <div className="fixed top-20 right-8 pl-8 space-y-4">
      {alerts.map((alert) => (
        <Alert
          type={alert.alertType}
          global
          key={`${alert.alertText}-${Math.random() * 100}`}
        >
          {alert.alertText}
        </Alert>
      ))}
    </div>
  ) : null;
};

export default AlertProvider;
