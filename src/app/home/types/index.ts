export type EvidenceKey =
  | 'emf'
  | 'fingerprints'
  | 'ghostwriting'
  | 'dots'
  | 'ghostOrb'
  | 'spiritBox'
  | 'freezingTemp'

export type FormValues = Record<EvidenceKey, number>

export type EvidenceSelectorProps = {
  values: FormValues
  setValue: (key: EvidenceKey, value: number) => void
}

export type Ghost = {
  id: number
  name: string
  evidences: string[]
}

export type GhostListProps = {
  ghosts: Ghost[]
  selectedEvidences: FormValues
}

export type GhostCardProps = {
  ghost: Ghost
  disabled: boolean
}
