import React from 'react'

const InputModal = ({ input, isOpen, onClose, onSubmit, setInput}) => {

    const handleSubmit = () => {
      onSubmit();
      onClose();
    };

    if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 border-2 border-yellow-200 shadow-2xl p-6 rounded-lg w-full max-w-md">
        <h2 className="text-white text-xl font-bold mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-200" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          Enter Moon Knight s Command
        </h2>
        <input
          value={input}
          onChange={(e) => setInput('input',e.target.value)}
          placeholder="Speak your command..."
          className="w-full p-2 mb-4 bg-gradient-to-r from-gray-800 to-blue-950 text-white border-gray-300 placeholder-gray-400 rounded"
        />
        <div className="flex justify-end">
          <button 
            onClick={()=>{onClose()}}
            className="bg-gradient-to-r mx-4 from-yellow-200 to-yellow-400 hover:from-yellow-300 hover:to-yellow-500 text-gray-900 font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            close
          </button>
          <form onSubmit={()=>{console.log("form submitted")}}>
          <button 
            onClick={handleSubmit}
            className="bg-gradient-to-r from-yellow-200 to-yellow-400 hover:from-yellow-300 hover:to-yellow-500 text-gray-900 font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Submit
          </button>
          </form>
        </div>
      </div>
    </div>
  )
}
  
    
  

export default InputModal
