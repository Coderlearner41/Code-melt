import React,{useState} from 'react'
import Image from "next/image";

const MoonKnightModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="bg-transparent border border-yellow-200 text-yellow-200 hover:bg-yellow-200 hover:text-gray-900 font-bold py-2 px-4 rounded transition duration-300 ease-in-out w-full sm:w-auto"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        About Moon Knight
      </button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 border-2 border-yellow-200 shadow-2xl p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-white text-2xl font-bold mb-4">Moon Knight: Fist of Khonshu</h2>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <Image
            src="/images/moon-night.jpeg"
            alt="Moon Knight standing on a rooftop, his white cape billowing in the wind"
            className="rounded-lg shadow-lg"
            width={200}
            height={300}
          />
          <div className="text-white">
            <pre className="mb-2">Moon Knight, aka Marc Spector, is a complex vigilante who s been given superhuman abilities by the Egyptian moon god Khonshu.</pre>
            <pre className="mb-2">With his multiple personalities and expert combat skills, Moon Knight protects the travelers of the night and brings justice to those who would harm the innocent.</pre>
            <pre>In this Code Sanctuary, channel the power of Khonshu to write powerful, moonlit code that illuminates the darkness of bugs and errors!</pre>
          </div>
        </div>
        <div className="mt-4 text-right">
          <button
            onClick={() => setIsOpen(false)}
            className="bg-gradient-to-r from-yellow-200 to-yellow-400 hover:from-yellow-300 hover:to-yellow-500 text-gray-900 font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
};

export default MoonKnightModal