'use client'
import { Sound } from '@/components/UI/Icons/Sound'
import { GhostSpeedProps } from '../types'
import { useAudio } from '@/contexts/audio'

const GhostSpeed: React.FC<GhostSpeedProps> = ({ ghost }) => {
  const { normal, others } = ghost.speed
  const sortedSpeeds = [normal, ...others].sort((a, b) => b - a)
  const { playStepSound } = useAudio()

  const handleSoundClick = (speed: number, index: number) => {
    const id = ghost.id.toString()
    playStepSound({ id, speed, index })
  }

  return (
    <div className="flex flex-col items-end gap-1">
      {sortedSpeeds.map((speed, index) => (
        <div key={index} className="flex items-center gap-1">
          <div className="text-md gap-1 font-bold leading-4 text-white">
            {speed.toFixed(1)}{' '}
            <span className="text-sm text-gray-400">m/s</span>
          </div>
          <Sound
            className="h-5 w-5 cursor-pointer"
            onClick={() => handleSoundClick(speed, index)}
          />
        </div>
      ))}
    </div>
  )
}

export default GhostSpeed
