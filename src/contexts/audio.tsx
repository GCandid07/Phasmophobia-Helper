import { createContext, useContext, useRef, useState } from 'react'

type SoundType = 'footsteps' | 'banshee' | 'deogen'

type PlayStepSoundProps = {
  id: string
  speed?: number
  index: number
  type: SoundType
}

interface AudioContextType {
  playStepSound: (props: PlayStepSoundProps) => void
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

  const audioVolume = 0.5 // 50%
  const totalTime = 10000 // 10 seconds

  const files: Record<SoundType, string> = {
    footsteps: '/sounds/footstep.mp3',
    banshee: '/sounds/banshee_scream.mp3',
    deogen: '/sounds/deogen_breathing.mp3',
  }

  const playStepSound = ({
    id,
    speed = 1.7,
    index,
    type,
  }: PlayStepSoundProps) => {
    setAudioSource(type)

    if (isSameSound(id, index)) {
      toggleSound(speed, type)
    } else {
      resetSoundState(id, index)
      startSound(speed, type)
    }
  }

  const setAudioSource = (type: SoundType) => {
    if (audioRef.current) {
      audioRef.current.src = files[type]
    }
  }

  const isSameSound = (id: string, index: number) =>
    currentId === id && currentIndex === index

  const toggleSound = (speed: number, type: SoundType) => {
    if (isPlaying) {
      stopStepSound()
    } else {
      startSound(speed, type)
    }
  }

  const resetSoundState = (id: string, index: number) => {
    stopStepSound()
    setCurrentId(id)
    setCurrentIndex(index)
  }

  const startSound = (speed: number, type: SoundType) => {
    if (!audioRef.current) return

    audioRef.current.volume = audioVolume
    audioRef.current.currentTime = 0
    audioRef.current.play()

    if (type === 'footsteps') {
      startRepeatingSound(speed)
    } else {
      scheduleSoundStop(3000) // 3 seconds for Banshee and Deogen
    }

    setIsPlaying(true)
  }

  const startRepeatingSound = (speed: number) => {
    const intervalTime = 1000 / speed

    intervalRef.current = setInterval(() => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0
        audioRef.current.play()
      }
    }, intervalTime)

    scheduleSoundStop(totalTime)
  }

  const scheduleSoundStop = (duration: number) => {
    timeoutRef.current = setTimeout(() => {
      stopStepSound()
    }, duration)
  }

  const stopStepSound = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    resetPlaybackState()
  }

  const resetPlaybackState = () => {
    setCurrentId(null)
    setCurrentIndex(null)
    setIsPlaying(false)
  }

  return (
    <AudioContext.Provider value={{ playStepSound, stopStepSound }}>
      <audio ref={audioRef} className="hidden" />
      {children}
    </AudioContext.Provider>
  )
}

export const useAudio = () => {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}
