import { useState, useEffect } from 'react'
import { addWordPointsToLocalStorage, clearWordHistoryFromLocalStorage, getWordHistoryFromLocalStorage } from './calculations'
import { nextColor, nextMultiplier } from './wordCalculations'
import type { LetterColor, WordMultiplier } from './wordCalculations'

export const useWordState = () => {
  const [word, setWord] = useState('')
  const [wordHistory, setWordHistory] = useState<[string, number][]>([])
  const [letterColors, setLetterColors] = useState<Record<string, LetterColor>>({})
  const [wordMultipliers, setWordMultipliers] = useState<Record<number, WordMultiplier>>({})

  useEffect(() => {
    setWordHistory(getWordHistoryFromLocalStorage())
  }, [])

  const addWord = () => {
    if (word.trim()) {
      addWordPointsToLocalStorage(word)
      setWordHistory(getWordHistoryFromLocalStorage())
      setWord('')
    }
  }

  const clearAll = () => {
    clearWordHistoryFromLocalStorage()
    setWordHistory([])
    setLetterColors({})
    setWordMultipliers({})
  }

  const toggleLetterColor = (word: string, letterIndex: number) => {
    const key = `${word}-${letterIndex}`
    const current = letterColors[key] || 'orange'
    setLetterColors(prev => ({ ...prev, [key]: nextColor(current) }))
  }

  const toggleWordMultiplier = (wordIndex: number) => {
    const current = wordMultipliers[wordIndex] || '1x'
    setWordMultipliers(prev => ({ ...prev, [wordIndex]: nextMultiplier(current) }))
  }

  return {
    word,
    setWord,
    wordHistory,
    letterColors,
    wordMultipliers,
    addWord,
    clearAll,
    toggleLetterColor,
    toggleWordMultiplier
  }
}
