'use client'
import Card from '@/components/Card'
import WelcomeMessage from '@/components/WelcomeMessage'
import EvidenceSelector from './components/EvidenceSelector'
import GhostList from './components/GhostList'
import useForm from '@/hooks/useForm'
import ghosts from '@/utils/data/ghosts.json'
import { FormValues } from './types'

const HomePage = () => {
  const { values, setValue, reset } = useForm<FormValues>({
    emf: 0,
    fingerprints: 0,
    ghostwriting: 0,
    dots: 0,
    ghostOrb: 0,
    spiritBox: 0,
    freezingTemp: 0,
  })

  return (
    <div className="flex h-full flex-col justify-between gap-4 text-white">
      <div className="flex items-center justify-center text-center">
        <WelcomeMessage />
      </div>

      <div className="flex gap-4">
        <Card className="w-full sm:w-max">
          <EvidenceSelector
            ghosts={ghosts}
            values={values}
            setValue={setValue}
            reset={reset}
          />
        </Card>

        {/* Add description for the ghosts list */}
        {/* <Card className="w-full sm:w-max">
          <div className="mb-4 flex items-center justify-between px-4">
            <p>Bom dia!</p>
          </div>
        </Card> */}
      </div>

      <GhostList ghosts={ghosts} selectedEvidences={values} />
    </div>
  )
}

export default HomePage
