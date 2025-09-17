import * as Dialog from '@radix-ui/react-dialog'

interface TooltipModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TooltipModal({ isOpen, onClose }: TooltipModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg px-6 py-8 w-full max-w-md md:max-w-2xl z-50 max-h-[100vh] overflow-y-auto mx-auto">
          <Dialog.Title className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
            How to Use Letter Point
          </Dialog.Title>
          
          <div className="space-y-4 md:space-y-6 text-sm md:text-base">
            <div>
              <h3 className="font-semibold text-gray-800">Adding Words</h3>
              <p className="text-gray-600">Type a word in the input field and press Enter or click the "+" button to add it to your list.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">Blank Tiles</h3>
              <p className="text-gray-600"> To place a blank tile, type a space in the input field. These tiles are worth 0 points.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800">Letter Multipliers</h3>
              <p className="text-gray-600">Click on any letter to cycle through multipliers:</p>
              <ul className="list-disc list-inside ml-4 text-gray-600 mt-1 flex flex-col gap-2">
                <li><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded font-bold">L</span> : Normal letter score</li>
                <li><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-bold">L</span> : Double letter score</li>
                <li><span className="bg-blue-600 text-white px-2 py-1 rounded font-bold">L</span> : Triple letter score</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800">Word Multipliers</h3>
              <p className="text-gray-600">Click on the word multiplier to cycle through:</p>
              <ul className="list-disc list-inside ml-4 text-gray-600 mt-1 flex flex-col gap-2">
                <li><span className="bg-gray-800 text-gray-100 px-2 py-1 rounded font-bold">1x</span> : Normal word score</li>
                <li><span className="bg-pink-500 text-white px-2 py-1 rounded font-bold">2x</span> : Double word score</li>
                <li><span className="bg-red-500 text-white px-2 py-1 rounded font-bold">3x</span> : Triple word score</li>
                <li><span className="bg-purple-600 text-white px-2 py-1 rounded font-bold">4x</span> : Quadruple word score</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800">Clearing History</h3>
              <p className="text-gray-600">Click the "x" button to clear all your words and start fresh. You'll be asked to confirm this action.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800">Scoring</h3>
              <p className="text-gray-600">Your total score is calculated by adding up all word scores, with letter and word multipliers applied as configured.</p>
            </div>
          </div>
          
          <div className="mt-6 md:mt-8 flex justify-center">
            <Dialog.Close asChild>
              <button className="px-6 py-2 md:px-8 md:py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer text-sm md:text-base">
                Got it!
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
