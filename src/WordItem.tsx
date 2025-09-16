import { getLetterClass, multiplierClasses, getWordPoints } from './wordCalculations'
import type { LetterColor, WordMultiplier } from './wordCalculations'

interface Props {
  word: string
  wordIndex: number
  letterColors: Record<string, LetterColor>
  wordMultipliers: Record<number, WordMultiplier>
  onLetterClick: (word: string, letterIndex: number) => void
  onMultiplierClick: (wordIndex: number) => void
}

export default function WordItem({ word, wordIndex, letterColors, wordMultipliers, onLetterClick, onMultiplierClick }: Props) {
  const letterStyle = "px-4 py-2 rounded text-lg font-mono font-bold cursor-pointer hover:opacity-80 transition-opacity"
  const multiplier = wordMultipliers[wordIndex] || '1x'
  const points = getWordPoints(word, letterColors, multiplier)

  return (
    <div className="mb-2">
      <div className="flex justify-between gap-4">
        <div className="flex gap-2 items-start">
          <span 
              className={`${multiplierClasses[multiplier]} ${letterStyle}`}
              onClick={() => onMultiplierClick(wordIndex)}
            >
              {multiplier}
          </span>
          <div className="flex flex-wrap gap-1">
            {word.split('').map((letter, i) => {
              const color = letterColors[`${word}-${i}`] || 'orange'
              return (
                <span 
                  key={i}
                  className={`${getLetterClass(color)} ${letterStyle}`}
                  onClick={letter === ' ' ? undefined : () => onLetterClick(word, i)}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              )
            })}
          </div>
        </div>
        
        <span className="text-xl text-gray-500"> {points}</span>
      </div>
    </div>
  )
}
