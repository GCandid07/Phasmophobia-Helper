interface ComponentProps extends React.SVGAttributes<SVGSVGElement> {
  fillClass?: string
}

export const MenuH = ({ fillClass, ...rest }: ComponentProps) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <rect
      x="8"
      y="9"
      width="24"
      height="2"
      className={fillClass || 'fill-white'}
    />
    <rect
      x="8"
      y="19"
      width="24"
      height="2"
      className={fillClass || 'fill-white'}
    />
    <rect
      x="8"
      y="29"
      width="24"
      height="2"
      className={fillClass || 'fill-white'}
    />
  </svg>
)
