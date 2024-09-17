"use client";

import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import CodeBox from "./Components/CodeBox";
import OutputBox from './Components/OutputBox';
import InputModal from './Components/InputModal';

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("java");
  
  const changeSelectedLanguage = (language: string) => {
    setSelectedLanguage(language);
  };
  
  const [data, setData] = useState({
    code: "import java.util.*; \nimport java.io.*; \n \npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n} ",
    input: "",
    output: "// Output will be displayed here",
  });

  const updateData = (type: 'code' | 'input'| 'output', value: string) => {
    setData((prevData) => ({ ...prevData, [type]: value }));
  };

  const input = new URLSearchParams({
    'code': data.code,
    'language': selectedLanguage,
    'input': data.input
  }).toString(); // Convert to string format

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: input
  };

  const url = "https://api.codex.jaagrav.in";

  const callApi = async () => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      if (result.output) {
        updateData("output", result.output);
      } else {
        updateData("output", "Error: " + (result.error || "Unknown error"));
      }
      return result;
    } catch (error) {
      console.error("API call error:", error);
      updateData("output", "Error: " + error);
    }
  };

  const handleInputSubmit = () => {
    callApi();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRun = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 to-blue-950">
      <Navbar 
        onRun={handleRun} 
        selectedLanguage={selectedLanguage} 
        updateData={updateData} 
        setSelectedLanguage={changeSelectedLanguage} 
      />
      <div className="container flex flex-col lg:flex-row w-full flex-1 overflow-x-hidden">
        <CodeBox 
          title="Inscribe Your Hieroglyphs" 
          writeCode={updateData} 
          code={data.code} 
        />
        <OutputBox 
          title="Khonshu's Revelation" 
          output={data.output} 
        />
      </div>
      <InputModal
        input={data.input}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleInputSubmit}
        setInput={updateData}
      />
    </div>
  );
}
