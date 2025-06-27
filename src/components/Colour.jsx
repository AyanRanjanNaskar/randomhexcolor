import React, { useState } from 'react'

const Colour = () => {
  const [currentColor, setCurrentColor] = useState("#3B82F6");

  const generateRandomColor = () =>{
    const hexChars = "0123456789ABCDEF";
    let color ="#";

    for(let i = 0; i < 6; i++){
      const randomIndex = Math.floor(Math.random() * 16 );
      color += hexChars[randomIndex];
    }
    return color;
  };

  const handleGenerateColor = () =>{
    const newColor = generateRandomColor();
    setCurrentColor(newColor);
  }

  const copyToClipboard = async () => {
    try{
      await navigator.clipboard.writeText(currentColor)
      alert('Color copied to clipboard!');
    }catch(err){
      console.error('Failed to copy color: ', err);
      
    }
  }

  return (
   <div 
      className="min-h-screen flex flex-col items-center justify-center transition-all duration-500 ease-in-out"
      style={{ backgroundColor: currentColor }}
    >
      <div className="text-center space-y-6">
        {/* Step 6: Display current color */}
        <h1 
          className="text-4xl font-bold mb-8"
          // style={{ color: getTextColor(currentColor) }}
        >
          Random Hex Color Generator
        </h1>
        
        {/* Color display box */}
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <div 
            className="w-32 h-32 mx-auto rounded-lg shadow-md mb-4 border-4 border-white border-opacity-30"
            style={{ backgroundColor: currentColor }}
          ></div>
          
          {/* Color code display */}
          <div 
            className="text-2xl font-mono font-bold mb-4 cursor-pointer hover:underline"
            // style={{ color: getTextColor(currentColor) }}
            onClick={copyToClipboard}
            title="Click to copy"
          >
            {currentColor}
          </div>
        </div>
        
        {/* Generate button */}
        <button
          onClick={handleGenerateColor}
          className="px-8 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg font-semibold transition-all duration-200 hover:bg-opacity-30 hover:scale-105 active:scale-95 shadow-lg"
          // style={{ color: getTextColor(currentColor) }}
        >
          Generate New Color
        </button>
        
      </div>
    </div>
  )
}

export default Colour
