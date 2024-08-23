interface ComponentProps extends React.SVGAttributes<SVGSVGElement> {
  className?: string
  fillClass?: string
}

export const GhostOrb = ({ className, fillClass, ...rest }: ComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 226.453 226.453"
    xmlSpace="preserve"
    className={`${className} ${fillClass || 'fill-[#666]'}`}
    {...rest}
  >
    <defs>
      <radialGradient id="orbGradient" cx="50%" cy="50%" r="50%">
        <stop offset="40%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#666', stopOpacity: 1 }} />
      </radialGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g>
      <circle
        cx="148.224"
        cy="135.871"
        r="65"
        fill="url(#orbGradient)"
        style={{ filter: 'url(#glow)' }}
      />
      <circle
        cx="185.279"
        cy="28.821"
        r="28.821"
        fill="url(#orbGradient)"
        style={{ filter: 'url(#glow)' }}
      />
      <circle
        cx="98.816"
        cy="28.821"
        r="20.587"
        fill="url(#orbGradient)"
        style={{ filter: 'url(#glow)' }}
      />
      <circle
        cx="65.878"
        cy="205.866"
        r="20.587"
        fill="url(#orbGradient)"
        style={{ filter: 'url(#glow)' }}
      />
    </g>
  </svg>
)
