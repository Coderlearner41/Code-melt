import React from 'react'
import MoonKnightModal from './MoonKnightModal'

const Navbar = (props) => {
  const handleClick=(language)=>{
    switch (language){
      case 'java':
        props.updateData('code',"import java.util.*; \nimport java.io.*; \n \npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n} ");
        break;
      case 'cpp':
        props.updateData('code',"#include <iostream> \n \nint main(){\n    std::cout<< \"Hello World!!\";\n    return 0;\n}");
        break;
      case 'c':
        props.updateData('code', "#include<stdio.h>\n\nint main(){\n    printf(\"Hello World\");\n    return 0;\n}");
        break;
      case 'cs' :
        props.updateData('code', "using System;\nclass HelloWorld {\n    static void Main() \n    {\n         Console.WriteLine(\"Hello World\");\n    }\n}");
        break;
      case 'go':
        props.updateData('code',"package main\nimport \"fmt\"\n\nfunc main() {\n     fmt.Println(\"Hello World\")\n}");
        break;
      case 'js':
        props.updateData('code',"console.log(\"Hello World\");");
        break;
      case 'py':
        props.updateData('code',"print(\"Hello World!!\")");
        break;
    }
  }
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 p-4 border-b-2 border-yellow-200 shadow-lg">
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
      <h1 className="text-white text-2xl font-bold flex items-center mb-4 sm:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-200" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
        Khonshu s Code Arena
      </h1>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <MoonKnightModal />
        <div className="flex items-center">
          <button 
            onClick={props.onRun}
            className="bg-gradient-to-r from-yellow-200 to-yellow-400 hover:from-yellow-300 hover:to-yellow-500 text-gray-900 mr-4 font-bold py-2 px-4 rounded-l shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Execute
          </button>
          <select
            value={props.selectedLanguage}
            onChange={(e) => {props.setSelectedLanguage(e.target.value); handleClick(e.target.value)}}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-r shadow-md transition duration-300 ease-in-out"
          >
            <option value="java" >Java</option>
            <option value="cpp">C++</option>
            <option value="c">C</option>
            <option value="cs">C#</option>
            <option value="go">GoLang</option>
            <option value="js">NodeJS</option>
            <option value="py">Python</option>
          </select>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
