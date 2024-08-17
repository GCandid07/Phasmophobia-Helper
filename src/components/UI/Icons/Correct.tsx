interface ComponentProps extends React.SVGAttributes<SVGSVGElement> {
  fillClass?: string
}

export const Correct = ({ fillClass, ...rest }: ComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...rest}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 13l4 4L19 7"
      className={fillClass || 'fill-white'}
    />
  </svg>
)
