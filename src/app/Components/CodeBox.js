import React, { useRef } from 'react';

const CodeBox = ({ title, writeCode, code }) => {
  const textareaRef = useRef(null);

  const autoClose = (char) => {
    let closingBracket = '';
  
    // Determine the correct closing bracket
    switch (char) {
      case '[':
        closingBracket = ']';
        break;
      case '(':
        closingBracket = ')';
        break;
      case '{':
        closingBracket = '}';
        break;
      default:
        return; 
    }
  
    const textarea = textareaRef.current;
    const cursorPosition = textarea.selectionStart;
    const textBefore = textarea.value.slice(0, cursorPosition);
    const textAfter = textarea.value.slice(cursorPosition);
  
    textarea.value = textBefore + char + closingBracket + textAfter;
    textarea.selectionStart = textarea.selectionEnd = cursorPosition + 1;
  
    writeCode('code', textarea.value);
  };

  const handleKeyDown = (event) => {
    const char = event.key;

    // Opening brackets handling
    if (['[', '(', '{'].includes(char)) {
      event.preventDefault(); // Prevent the default action (typing the character)
      autoClose(char); // Auto-close brackets
    }
  };

  return (
    <div className="w-full lg:w-1/2 h-[50vh] max-h-[calc(100vh-4.7rem)] lg:h-screen p-4 bg-gradient-to-br overflow-hidden from-gray-900 to-blue-900">
      <h2 className="text-xl font-bold mb-2 text-white flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-200" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
        {title}
      </h2>
      <textarea
        ref={textareaRef}
        className="w-full h-[calc(100%-2rem)] p-2 bg-gradient-to-br from-gray-800 to-blue-950 text-white font-mono resize-none border-2 border-gray-300 rounded shadow-lg"
        value={code}
        spellCheck="false"
        onKeyDown={handleKeyDown}
        onChange={(e) => writeCode('code', e.target.value)}
        placeholder="// Write your code here, Moon Knight..."
      />
    </div>
  );
};

export default CodeBox;
