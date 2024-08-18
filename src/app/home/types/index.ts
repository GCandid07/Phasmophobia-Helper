export type EvidenceKey =
  | 'emf'
  | 'fingerprints'
  | 'ghostwriting'
  | 'dots'
  | 'ghostOrb'
  | 'spiritBox'
  | 'freezingTemp'

export type FormValues = Record<EvidenceKey, number>

export type Ghost = {
  id: number
  name: string
  evidences: string[]
}

export type EvidenceSelectorProps = {
  values: FormValues
  setValue: (key: EvidenceKey, value: number) => void
  reset: () => void
  ghosts: Ghost[]
}

export type GhostListProps = {
  ghosts: Ghost[]
  selectedEvidences: FormValues
}

export type GhostCardProps = {
  ghost: Ghost
  disabled: boolean
  onClick?: () => void
}

export type GhosModalProps = {
  isModalOpen: boolean
  closeModal: () => void
  ghost: Ghost | null
}
