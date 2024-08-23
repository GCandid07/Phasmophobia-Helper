import { GhostSanityProps } from '../types'

const GhostSanity: React.FC<GhostSanityProps> = ({ ghost }) => {
  const { normal, others } = ghost.sanity

  const sortedSanities = [normal, ...others].sort((a, b) => b - a)

  return (
    <div className="flex flex-col items-end gap-1">
      {sortedSanities.map((sanity, index) => (
        <div
          key={index}
          className={`leading-4 ${
            sanity === normal
              ? 'gap-1 text-xl font-bold text-white'
              : 'text-md text-gray-400'
          }`}
        >
          {sanity}%
        </div>
      ))}
    </div>
  )
}

export default GhostSanity
