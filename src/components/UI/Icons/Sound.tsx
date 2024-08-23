interface ComponentProps extends React.SVGAttributes<SVGSVGElement> {}

export const Sound = ({ ...rest }: ComponentProps) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <polygon
      points="38,15 40,15 40,85 38,85 15,60 4,60 4,40 15,40 "
      style={{
        fill: 'white',
        fillOpacity: 0.7,
        stroke: 'white',
        strokeWidth: 2,
      }}
    />
    <path
      d="m 51,24 c 16,15 16,38 1,53"
      style={{
        fill: 'none',
        stroke: '#F9F9F9',
        strokeWidth: 7,
      }}
    />
    <path
      d="m 62,14 c 37,38 1,73 1,73"
      style={{
        fill: 'none',
        stroke: '#4A90F2',
        strokeWidth: 7,
      }}
    />
    <path
      d="M 72,5 C 120,54 73,97 73,97"
      style={{
        fill: 'none',
        stroke: '#4A90E2',
        strokeWidth: 7,
      }}
    />
  </svg>
)
