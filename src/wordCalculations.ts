import { letterPoints } from './letterPoints'

export type LetterColor = 'orange' | 'lightBlue' | 'darkBlue'
export type WordMultiplier = '1x' | '2x' | '3x'

// Simple color cycling
export const nextColor = (current: LetterColor): LetterColor => 
  current === 'orange' ? 'lightBlue' : current === 'lightBlue' ? 'darkBlue' : 'orange'

export const nextMultiplier = (current: WordMultiplier): WordMultiplier => 
  current === '1x' ? '2x' : current === '2x' ? '3x' : '1x'

// Get letter points with multiplier
export const getLetterPoints = (letter: string, color: LetterColor): number => {
  // Handle spaces as blank tiles with 0 points
  if (letter === ' ') return 0
  
  const base = letterPoints[letter.toUpperCase() as keyof typeof letterPoints] || 0
  return color === 'lightBlue' ? base * 2 : color === 'darkBlue' ? base * 3 : base
}

// Calculate total word points
export const getWordPoints = (word: string, letterColors: Record<string, LetterColor>, wordMultiplier: WordMultiplier): number => {
  const letterPoints = word.split('').reduce((total, letter, i) => {
    const color = letterColors[`${word}-${i}`] || 'orange'
    return total + getLetterPoints(letter, color)
  }, 0)
  
  const multiplier = wordMultiplier === '2x' ? 2 : wordMultiplier === '3x' ? 3 : 1
  return letterPoints * multiplier
}

// CSS classes
export const colorClasses = {
  orange: 'bg-orange-100 text-orange-800',
  lightBlue: 'bg-blue-100 text-blue-800', 
  darkBlue: 'bg-blue-600 text-white'
}

// Get CSS class for letter (including spaces)
export const getLetterClass = (letter: string, color: LetterColor): string => {
  return colorClasses[color]
}

export const multiplierClasses = {
  '1x': 'bg-gray-800 text-gray-100',
  '2x': 'bg-pink-500 text-white',
  '3x': 'bg-red-500 text-white'
}
