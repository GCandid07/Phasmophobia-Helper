interface ComponentProps extends React.SVGAttributes<SVGSVGElement> {
  fillClass?: string
}

export const Incorrect = ({ fillClass, ...rest }: ComponentProps) => (
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
      d="M6 18L18 6M6 6l12 12"
      className={fillClass || 'fill-white'}
    />
  </svg>
)
