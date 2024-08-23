import { createContext, useContext, useRef, useState } from 'react'

type PlayStepSoundProps = {
  id: string
  speed: number
  index: number
}

interface AudioContextType {
  playStepSound: ({ id, speed, index }: PlayStepSoundProps) => void
  stopStepSound: () => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [currentId, setCurrentId] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const timeInSeconds = 10
  const miliseconds = 1000
  const totalTime = timeInSeconds * miliseconds
  const audioVolume = 0.5

  const playStepSound = ({ id, speed, index }: PlayStepSoundProps) => {
    if (currentId === id && currentIndex === index) {
      if (isPlaying) {
        stopStepSound()
      } else {
        startStepSound(speed)
      }
    } else {
      stopStepSound()
      setCurrentId(id)
      setCurrentIndex(index)
      startStepSound(speed)
    }
  }

  const startStepSound = (speed: number) => {
    if (audioRef.current) {
      audioRef.current.volume = audioVolume
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }

    const intervalTime = 1000 / speed
    intervalRef.current = setInterval(() => {
      if (audioRef.current) {
        audioRef.current.volume = audioVolume
        audioRef.current.currentTime = 0
        audioRef.current.play()
      }
    }, intervalTime)

    timeoutRef.current = setTimeout(() => {
      stopStepSound()
    }, totalTime)

    setIsPlaying(true)
  }

  const stopStepSound = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    setCurrentId(null)
    setCurrentIndex(null)
    setIsPlaying(false)
  }

  return (
    <AudioContext.Provider value={{ playStepSound, stopStepSound }}>
      <audio ref={audioRef} src="/sounds/footstep.mp3" className="hidden" />
      {children}
    </AudioContext.Provider>
  )
}

export const useAudio = () => {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}
