import TriStateCheckbox from '@/components/CheckBoxes/TriStateCheckBox'
import { EvidenceKey, EvidenceSelectorProps } from '../types'

const EvidenceSelector: React.FC<EvidenceSelectorProps> = ({
  values,
  setValue,
}) => {
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
      <h1 className="mb-4 text-2xl text-accent">Evidencias:</h1>
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          {evidences.slice(0, 4).map((evidence) => (
            <TriStateCheckbox
              key={evidence.key}
              label={evidence.label}
              labelPosition="right"
              initialState={values[evidence.key]}
              onChange={(state) => setValue(evidence.key, state)}
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
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default EvidenceSelector
