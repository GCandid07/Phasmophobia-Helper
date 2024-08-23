import Card from '@/components/Card'
import { GhostCardProps } from '../types'
import { GhostEvidences } from './GhostEvidences'
import GhostSanity from './GhostSanity'
import { Brain } from '@/components/UI/Icons/Brain'
import { Foot } from '@/components/UI/Icons/Foot'
import GhostSpeed from './GhostSpeed'

const GhostCard: React.FC<GhostCardProps> = ({ ghost, disabled, onClick }) => {
  return (
    <Card disabled={disabled}>
      <div className="flex h-56 flex-col gap-1 rounded-lg bg-current-dark p-2">
        <div className="flex h-40">
          <div className="flex w-1/2 flex-col justify-evenly gap-1">
            <h1
              className="w-max cursor-pointer font-ghost text-2xl text-accent"
              onClick={onClick}
            >
              {ghost.name}
            </h1>
            <div className="items-between flex flex-col gap-1 overflow-hidden">
              {ghost.evidences.map((evidence) => (
                <GhostEvidences key={evidence} evidence={evidence} />
              ))}
            </div>
          </div>
          <div className="flex h-full w-1/2 flex-col gap-2 overflow-y-auto pr-2">
            <ul className="list-inside list-disc space-y-2"></ul>
          </div>
        </div>
        <div className="flex h-16 items-center gap-4">
          <div className="flex w-1/3 items-center gap-1">
            <Brain className="h-8 w-8" />
            <GhostSanity ghost={ghost} />
          </div>
          <div className="flex w-2/3 items-center gap-1">
            <Foot className="h-8 w-8" />
            <GhostSpeed ghost={ghost} />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default GhostCard
