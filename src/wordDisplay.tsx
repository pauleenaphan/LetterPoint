import { useWordState } from './useWordState'
import { getWordPoints } from './wordCalculations'
import WordItem from './WordItem'

export default function WordDisplay() {
  const { word, setWord, wordHistory, letterColors, wordMultipliers, addWord, clearAll, toggleLetterColor, toggleWordMultiplier } = useWordState()

  const totalPoints = wordHistory.reduce((total, [word], i) => 
    total + getWordPoints(word, letterColors, wordMultipliers[i] || '1x'), 0
  )

  return (
    <div className="flex flex-col h-screen p-6 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center">Letter Point</h1>
      <p className="text-md md:text-lg text-center mb-8 text-gray-500">Insert your words, calculate the points, and see your total score</p>

      <div className="flex-1 w-full max-w-4xl mx-auto flex flex-col min-h-0">
        <div className="mb-4 text-xs md:text-sm text-gray-500">
          <p> Click on the letters to change its multiplier (double or triple LETTER score)</p>
          <p> Click on the multiplier to change its multiplier (double or triple WORD score)</p>
        </div>

        <div className="flex justify-between items-center gap-4 mb-2">
          <h2 className="text-xl md:text-2xl font-semibold">Your Words</h2>
          <h2 className="text-xl md:text-2xl font-semibold">Points</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto border-2 border-gray-300 rounded p-4 bg-gray-50 min-h-0">
          {wordHistory.map(([word], i) => (
            <WordItem
              key={i}
              word={word}
              wordIndex={i}
              letterColors={letterColors}
              wordMultipliers={wordMultipliers}
              onLetterClick={toggleLetterColor}
              onMultiplierClick={toggleWordMultiplier}
            />
          ))}
        </div>
        
        <div className="my-4 p-4 bg-gray-100 rounded text-right flex-shrink-0">
          <span className="text-lg md:text-xl"><span className="font-bold">Total:</span> {totalPoints}</span>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto mb-8">
        <div className="flex gap-2">
          <input 
            type="text" 
            value={word} 
            onChange={(e) => setWord(e.target.value.toUpperCase())}
            onKeyDown={(e) => e.key === 'Enter' && addWord()}
            placeholder="Enter a word"
            className="px-4 py-2 border rounded text-md md:text-lg flex-1"  
          />
          <button onClick={addWord} className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 whitespace-nowrap cursor-pointer">
            +
          </button>
          <button onClick={clearAll} className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-600 whitespace-nowrap cursor-pointer">
            x 
          </button>
        </div>
      </div>

      <p className="text-center text-gray-500"> Copyright © 2025 Pauleena Phan. All rights reserved.</p>
    </div>
  )
}