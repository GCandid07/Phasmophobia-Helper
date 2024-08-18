interface ComponentProps extends React.SVGAttributes<SVGSVGElement> {
  className?: string
}

export const Close = ({ className, ...rest }: ComponentProps) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className || 'fill-white hover:fill-gray-400'}
    {...rest}
  >
    <rect
      x="10.8076"
      y="27.7782"
      width="24"
      height="2"
      transform="rotate(-45 10.8076 27.7782)"
    />
    <rect
      x="12.2219"
      y="10.8076"
      width="24"
      height="2"
      transform="rotate(45 12.2219 10.8076)"
    />
  </svg>
)
