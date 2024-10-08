interface ComponentProps extends React.SVGAttributes<SVGSVGElement> {
  fillClass?: string
}

export const Dots = ({ fillClass, ...rest }: ComponentProps) => (
  <svg
    fill="none"
    width="800px"
    height="800px"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M76,60A16,16,0,1,1,60,44,16.01833,16.01833,0,0,1,76,60Zm52-16a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,128,44Zm68,32a16,16,0,1,0-16-16A16.01833,16.01833,0,0,0,196,76ZM60,180a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,60,180Zm68,0a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,128,180Zm68,0a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,196,180ZM60,112a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,60,112Zm68,0a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,128,112Zm68,0a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,196,112Z"
      className={fillClass || 'fill-[#42B725]'}
    />
  </svg>
)
