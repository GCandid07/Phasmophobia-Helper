import Card from '@/components/Card'
import { GhostCardProps } from '../types'

const GhostCard: React.FC<GhostCardProps> = ({ ghost, disabled }) => {
  return (
    <Card disabled={disabled}>
      <div className="flex h-40 justify-between rounded-lg bg-current-dark p-2">
        <div className="flex w-2/4 flex-col gap-4">
          <h1 className="font-ghost text-2xl text-accent">{ghost.name}</h1>
          <div className="flex flex-col gap-1 overflow-hidden">
            {ghost.evidences.map((evidence) => (
              <p key={evidence} className="text-sm text-white">
                {evidence}
              </p>
            ))}
          </div>
        </div>
        <div className="flex h-full w-2/4 flex-col gap-2 overflow-y-auto pr-2">
          <ul className="list-inside list-disc space-y-2"></ul>
        </div>
      </div>
    </Card>
  )
}

export default GhostCard
