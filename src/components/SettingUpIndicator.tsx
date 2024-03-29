import { cn } from "../lib/utils"

const SettingUpIndicator = ({
  loading = true,
  error = false,
}: {
  loading?: boolean
  error?: boolean
}) => {
  return (
    <svg
      className="w-full"
      viewBox="0 0 190 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="95"
        cy="95"
        r="91"
        id="gutter"
        className="transition-all duration-500"
        stroke={loading ? "#F1F5F9" : error ? "rgb(239,68,68)" : "#16A34A"}
        stroke-width="8"
      />
      <mask id="path-2-inside-1_222_864" fill="white">
        <path d="M155.715 27.0987C157.155 25.4877 159.635 25.3438 161.185 26.8494C171.695 37.0561 179.703 49.5565 184.58 63.3711C185.3 65.4089 184.132 67.6016 182.066 68.2366C180.001 68.8716 177.82 67.708 177.093 65.6729C172.644 53.218 165.418 41.9377 155.964 32.6886C154.419 31.1772 154.274 28.7097 155.715 27.0987Z" />
      </mask>
      <path
        className={cn(loading ? "origin-center animate-spin-slow" : "hidden")}
        d="M155.715 27.0987C157.155 25.4877 159.635 25.3438 161.185 26.8494C171.695 37.0561 179.703 49.5565 184.58 63.3711C185.3 65.4089 184.132 67.6016 182.066 68.2366C180.001 68.8716 177.82 67.708 177.093 65.6729C172.644 53.218 165.418 41.9377 155.964 32.6886C154.419 31.1772 154.274 28.7097 155.715 27.0987Z"
        stroke="#16A34A"
        stroke-width="16"
        mask="url(#path-2-inside-1_222_864)"
      />
      <circle
        cx="94.5"
        cy="95.5"
        r="53.5"
        className={cn(
          "transition-all duration-500",
          error ? "fill-error500" : "fill-[#16A34A]",
        )}
      />
      <path
        d="M82.4168 101.54C80.5576 100.296 79.3335 98.1762 79.3335 95.7708C79.3335 92.1578 82.0954 89.1899 85.6231 88.8632C86.3447 84.4737 90.1564 81.125 94.7502 81.125C99.344 81.125 103.156 84.4737 103.877 88.8632C107.405 89.1899 110.167 92.1578 110.167 95.7708C110.167 98.1762 108.943 100.296 107.083 101.54M88.5835 102.708L94.7502 108.875M94.7502 108.875L100.917 102.708M94.7502 108.875V95"
        stroke="white"
        stroke-width="3.08333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default SettingUpIndicator
