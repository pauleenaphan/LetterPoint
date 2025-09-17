import { letterPoints } from './letterPoints'

// Add word points to local storage
export function addWordPointsToLocalStorage(word: string) {
  console.log('Adding word points to local storage', word)
  const points = calculateWordPoints(word)
  const existingData = localStorage.getItem('wordHistory')
  const wordHistory: [string, number][] = existingData ? JSON.parse(existingData) : []

  wordHistory.push([word, points])
  localStorage.setItem('wordHistory', JSON.stringify(wordHistory))
}

// Clear word history from local storage
export function clearWordHistoryFromLocalStorage() {
  localStorage.removeItem('wordHistory')
}

// Get word history from local storage
export function getWordHistoryFromLocalStorage(): [string, number][] {
  const data = localStorage.getItem('wordHistory')
  return data ? JSON.parse(data) : []
}

// Calculate the final points for a word
export function calculateWordPoints(word: string) {
  return word.split('').reduce((acc, letter) => {
    const upperLetter = letter.toUpperCase() as keyof typeof letterPoints
    return acc + (letterPoints[upperLetter] || 0) 
  }, 0)
}


