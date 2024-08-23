import { EvidenceKey, Ghost, GhostListProps } from '../types'
import GhostCard from './GhostCard'
import { useState } from 'react'
import GhostModal from './GhostModal'
import { AudioProvider } from '@/contexts/audio'

const evidenceMap: Record<EvidenceKey, string> = {
  emf: 'EMF Level 5',
  fingerprints: 'Fingerprints',
  ghostwriting: 'Ghost Writing',
  dots: 'D.O.T.S Projector',
  ghostOrb: 'Ghost Orbs',
  spiritBox: 'Spirit Box',
  freezingTemp: 'Freezing Temperatures',
}

const GhostList: React.FC<GhostListProps> = ({ ghosts, selectedEvidences }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedGhost, setSelectedGhost] = useState<Ghost | null>(null)

  const openModal = (ghost: Ghost) => {
    setSelectedGhost(ghost)
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setSelectedGhost(null)
    setIsModalOpen(false)
  }

  const sortGhosts = (ghosts: Ghost[]) => {
    return ghosts
      .map((ghost) => {
        const matches = Object.keys(selectedEvidences).every((key) => {
          const evidenceKey = key as EvidenceKey
          const selectedValue = selectedEvidences[evidenceKey]
          const evidenceString = evidenceMap[evidenceKey]

          if (selectedValue === 1) {
            return ghost.evidences.includes(evidenceString)
          } else if (selectedValue === 2) {
            return !ghost.evidences.includes(evidenceString)
          }
          return true
        })
        return { ...ghost, matches }
      })
      .sort((a, b) => (a.matches === b.matches ? 0 : a.matches ? -1 : 1))
  }

  const sortedGhosts = sortGhosts(ghosts)

  return (
    <div className="flow-row grid w-full grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-4">
      <AudioProvider>
        {sortedGhosts.map((ghost) => (
          <GhostCard
            onClick={() => openModal(ghost)}
            key={ghost.id}
            ghost={ghost}
            disabled={!ghost.matches}
          />
        ))}
      </AudioProvider>
      <GhostModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        ghost={selectedGhost}
      />
    </div>
  )
}

export default GhostList
