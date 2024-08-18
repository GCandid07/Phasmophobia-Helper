import Card from '@/components/Card'
import { GhostCardProps } from '../types'

const evidenceTranslations: Record<string, string> = {
  'EMF Level 5': 'EMF Level 5',
  Fingerprints: 'Ultravioleta',
  'Ghost Writing': 'Escrita Fantasma',
  'D.O.T.S Projector': 'Projetor D.O.T.S',
  'Ghost Orbs': 'Orbe Fantasma',
  'Spirit Box': 'Spirit Box',
  'Freezing Temperatures': 'Temperatura Baixa',
}

const GhostCard: React.FC<GhostCardProps> = ({ ghost, disabled, onClick }) => {
  return (
    <Card disabled={disabled} onClick={onClick}>
      <div className="flex h-40 justify-between rounded-lg bg-current-dark p-2">
        <div className="flex w-2/4 flex-col gap-4">
          <h1 className="font-ghost text-2xl text-accent">{ghost.name}</h1>
          <div className="flex flex-col gap-1 overflow-hidden">
            {ghost.evidences.map((evidence) => (
              <p key={evidence} className="text-sm text-white">
                {evidenceTranslations[evidence] || evidence}
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
