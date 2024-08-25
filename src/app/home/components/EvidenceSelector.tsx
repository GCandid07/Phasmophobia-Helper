import TriStateCheckbox from '@/components/CheckBoxes/TriStateCheckBox'
import { EvidenceKey, EvidenceSelectorProps } from '../types'
import Button from '@/components/Button'
import { useEffect, useState } from 'react'

const evidenceMap: Record<EvidenceKey, string> = {
  emf: 'EMF Level 5',
  fingerprints: 'Fingerprints',
  ghostwriting: 'Ghost Writing',
  dots: 'D.O.T.S Projector',
  ghostOrb: 'Ghost Orbs',
  spiritBox: 'Spirit Box',
  freezingTemp: 'Freezing Temperatures',
}

const EvidenceSelector: React.FC<EvidenceSelectorProps> = ({
  values,
  setValue,
  ghosts,
  reset,
}) => {
  const [disabledEvidences, setDisabledEvidences] = useState<EvidenceKey[]>([])

  useEffect(() => {
    const calculateDisabledEvidences = (
      selectedEvidences: EvidenceKey[],
    ): EvidenceKey[] => {
      const possibleGhosts = ghosts.filter((ghost) =>
        selectedEvidences.every((evidence) =>
          ghost.evidences.includes(evidenceMap[evidence]),
        ),
      )

      return Object.keys(evidenceMap).filter(
        (evidenceKey) =>
          !possibleGhosts.some((ghost) =>
            ghost.evidences.includes(evidenceMap[evidenceKey as EvidenceKey]),
          ),
      ) as EvidenceKey[]
    }

    const selectedEvidences = Object.keys(values).filter(
      (key) => values[key as EvidenceKey] === 1,
    ) as EvidenceKey[]
    setDisabledEvidences(calculateDisabledEvidences(selectedEvidences))
  }, [values, ghosts])

  const evidences: { label: string; key: EvidenceKey }[] = [
    { label: 'EMF Level 5', key: 'emf' },
    { label: 'Ultravioleta', key: 'fingerprints' },
    { label: 'Escrita Fantasma', key: 'ghostwriting' },
    { label: 'Temperatura Baixa', key: 'freezingTemp' },
    { label: 'Projetor D.O.T.S', key: 'dots' },
    { label: 'Orbe Fantasma', key: 'ghostOrb' },
    { label: 'Spirit Box', key: 'spiritBox' },
  ]

  return (
    <>
      <div className="mb-4 flex items-center justify-between px-4">
        <h1 className="text-2xl text-accent underline">Evidências</h1>
        <Button color="accent" variant="outline" onClick={reset}>
          Resetar
        </Button>
      </div>
      <div className="flex gap-2 px-4">
        <div className="flex flex-col gap-2">
          {evidences.slice(0, 4).map((evidence) => (
            <TriStateCheckbox
              key={evidence.key}
              label={evidence.label}
              labelPosition="right"
              initialState={values[evidence.key]}
              onChange={(state) => setValue(evidence.key, state)}
              disabled={disabledEvidences.includes(evidence.key)}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {evidences.slice(4).map((evidence) => (
            <TriStateCheckbox
              key={evidence.key}
              label={evidence.label}
              labelPosition="right"
              initialState={values[evidence.key]}
              onChange={(state) => setValue(evidence.key, state)}
              disabled={disabledEvidences.includes(evidence.key)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default EvidenceSelector
