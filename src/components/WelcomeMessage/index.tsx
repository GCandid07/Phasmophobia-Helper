import React, { useEffect, useState } from 'react'

const messages = [
  "Welcome back! I've got some jobs ready for you.",
  "Welcome back! I've prepared some jobs for you.",
  "Welcome back! There's some jobs ready for you.",
]

const getRandomMessage = () => {
  const randomIndex = Math.floor(Math.random() * messages.length)
  return messages[randomIndex]
}

const Quote: React.FC<{ text: string }> = ({ text }) => {
  return (
    <blockquote className="font-serif text-xl italic">
      <span className="text-4xl">“</span>
      {text}
      <span className="text-4xl">”</span>
    </blockquote>
  )
}

const WelcomeMessage: React.FC = () => {
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    const storedMessage = sessionStorage.getItem('welcomeMessage')

    if (storedMessage) {
      setMessage(storedMessage)
    } else {
      const newMessage = getRandomMessage()
      setMessage(newMessage)
      sessionStorage.setItem('welcomeMessage', newMessage)
    }
  }, [])

  return (
    <div className="p-4">
      <Quote text={message} />
    </div>
  )
}

export default WelcomeMessage
