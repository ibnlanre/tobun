import { useEffect, useState } from 'react'

export function TypingText({ parts }: { parts: Array<string> }) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentPartIndex, setCurrentPartIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (isComplete) {
      // After completion, wait then reset
      const timeout = setTimeout(() => {
        setDisplayedText('')
        setCurrentPartIndex(0)
        setCurrentCharIndex(0)
        setIsComplete(false)
      }, 2000) // Wait 2 seconds before restarting

      return () => clearTimeout(timeout)
    }

    if (currentPartIndex >= parts.length) {
      setIsComplete(true)
      return
    }

    const currentPart = parts[currentPartIndex]

    if (currentCharIndex < currentPart.length) {
      // Still typing current part
      const timeout = setTimeout(() => {
        const accumulatedText = parts.slice(0, currentPartIndex).join('')
        const newText =
          accumulatedText + currentPart.slice(0, currentCharIndex + 1)
        setDisplayedText(newText)
        setCurrentCharIndex((prev) => prev + 1)
      }, 100)

      return () => clearTimeout(timeout)
    } else {
      // Finished typing current part, move to next
      const timeout = setTimeout(() => {
        if (currentPartIndex < parts.length - 1) {
          setCurrentPartIndex((prev) => prev + 1)
          setCurrentCharIndex(0)
        } else {
          setIsComplete(true)
        }
      }, 300)

      return () => clearTimeout(timeout)
    }
  }, [currentPartIndex, currentCharIndex, parts, isComplete])

  return (
    <span>
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  )
}
