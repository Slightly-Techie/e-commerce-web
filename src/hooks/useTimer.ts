import { useEffect, useState } from "react"

const useTimer = () => {
  const [resendTime, setResendTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (resendTime > 0) {
        setResendTime((prev) => {
          if (prev > 0) return prev - 1
          return 0
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [resendTime])

  return [resendTime, setResendTime] as const
}

export default useTimer
