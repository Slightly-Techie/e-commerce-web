export interface CompSVGProps {
  pathsD: string[]
}

export function CompSVG({ pathsD, ...props }: CompSVGProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      stroke="currentColor"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {pathsD.map((d) => (
        <path
          d={d}
          key={d}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  )
}
