import Card from '@/components/Card'
import { GhostCardProps } from '../types'
import { GhostEvidences } from './GhostEvidences'
import GhostSanity from './GhostSanity'
import { Brain } from '@/components/UI/Icons/Brain'
import { Foot } from '@/components/UI/Icons/Foot'
import GhostSpeed from './GhostSpeed'
import { Sound } from '@/components/UI/Icons/Sound'
import { useAudio } from '@/contexts/audio'

const GhostCard: React.FC<GhostCardProps> = ({ ghost, disabled, onClick }) => {
  const { playStepSound } = useAudio()

  const handleSoundClick = (index: number, type: 'banshee' | 'deogen') => {
    const id = ghost.id.toString()
    playStepSound({ id, speed: 0, index, type })
  }

  return (
    <Card disabled={disabled}>
      <div className="flex h-56 flex-col gap-1 rounded-lg bg-current-dark p-2">
        <div className="flex h-40 gap-4">
          <div className="flex w-max flex-col justify-evenly gap-1">
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
          <div className="flex h-32 flex-1 select-none flex-col gap-2 overflow-y-auto rounded-lg bg-current-dark p-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white">
            <h2 className="text-sm font-bold text-accent">Descrição</h2>
            <p className="text-sm">{ghost.description}</p>
            <h2 className="text-sm font-bold text-accent">Comportamentos</h2>
            <ul className="list-inside list-disc space-y-2">
              {ghost.abilities.map((abilitie, index) => (
                <li key={abilitie} className="text-sm">
                  {abilitie}
                  {abilitie.includes('Banshee pode emitir um grito') && (
                    <Sound
                      className="ml-2 inline h-5 w-5 cursor-pointer"
                      onClick={() => handleSoundClick(index, 'banshee')}
                    />
                  )}
                  {abilitie.includes(
                    'Deogen responder com uma respiração ofegante',
                  ) && (
                    <Sound
                      className="ml-2 inline h-5 w-5 cursor-pointer"
                      onClick={() => handleSoundClick(index, 'deogen')}
                    />
                  )}
                </li>
              ))}
            </ul>
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
