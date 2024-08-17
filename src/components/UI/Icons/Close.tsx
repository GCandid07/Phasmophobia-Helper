interface ComponentProps extends React.SVGAttributes<SVGSVGElement> {
  fillClass?: string
}

export const Close = ({ fillClass, ...rest }: ComponentProps) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <rect
      x="10.8076"
      y="27.7782"
      width="24"
      height="2"
      transform="rotate(-45 10.8076 27.7782)"
      className={fillClass || 'fill-white'}
    />
    <rect
      x="12.2219"
      y="10.8076"
      width="24"
      height="2"
      transform="rotate(45 12.2219 10.8076)"
      className={fillClass || 'fill-white'}
    />
  </svg>
)
