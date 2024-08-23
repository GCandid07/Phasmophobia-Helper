import { Dots } from '@/components/UI/Icons/Dots'
import { Emf } from '@/components/UI/Icons/Emf'
import { FingerPrint } from '@/components/UI/Icons/FingerPrint'
import { FreezingTemp } from '@/components/UI/Icons/FreezingTemp'
import { GhostOrb } from '@/components/UI/Icons/GhostOrb'
import { GhostWriting } from '@/components/UI/Icons/GhostWriting'
import { SpiritBox } from '@/components/UI/Icons/SpiritBox'

const evidenceTranslations: Record<string, string> = {
  'EMF Level 5': 'EMF Level 5',
  Fingerprints: 'Ultravioleta',
  'Ghost Writing': 'Escrita Fantasma',
  'D.O.T.S Projector': 'Projetor D.O.T.S',
  'Ghost Orbs': 'Orbe Fantasma',
  'Spirit Box': 'Spirit Box',
  'Freezing Temperatures': 'Temperatura Baixa',
}

const evidenceImages: Record<string, React.ReactNode> = {
  'EMF Level 5': <Emf className="h-5 w-5" />,
  Fingerprints: <FingerPrint className="h-5 w-5" />,
  'Ghost Writing': <GhostWriting className="h-5 w-5" />,
  'D.O.T.S Projector': <Dots className="h-5 w-5" />,
  'Ghost Orbs': <GhostOrb className="h-5 w-5" />,
  'Spirit Box': <SpiritBox className="h-5 w-5" />,
  'Freezing Temperatures': <FreezingTemp className="h-5 w-5" />,
}

export const GhostEvidences = ({ evidence }: { evidence: string }) => {
  return (
    <div className="flex items-center gap-2">
      {evidenceImages[evidence]}
      <p key={evidence} className="text-white">
        {evidenceTranslations[evidence] || evidence}
      </p>
    </div>
  )
}
