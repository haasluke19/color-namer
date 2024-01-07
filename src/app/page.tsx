"use client";
import { useState } from "react";
import ColorName from "./components/ColorName";
import ColorHsv from "./components/ColorHsv";
import ColorHsl from "./components/ColorHsl";
import ColorRgb from "./components/ColorRgb";
import ColorCmyk from "./components/ColorCmyk";
import ColorXyz from "./components/ColorXyz";

export default function Home() {
  const [selectedColor, setSelectedColor] = useState("#000000");

  const handleColorChange = (event: any) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
  };

  return (
    <div className="w-full h-screen bg-gray-800 flex flex-col items-center px-2 pb-10">
      <h1 className="mb-6 mt-8 text-2xl text-white">Color Namer</h1>

      <div className="bg-gray-100 w-full max-w-sm h-screen flex flex-col items-center rounded-md px-2 py-8">
        <div>
        <div className="flex text-xl flex-col mb-2">
          <label>Choose a color:</label>
          <div className="flex gap-2">
            <input value={selectedColor} onChange={handleColorChange} type="color" />
            <p>{selectedColor}</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex gap-2">
            Color Name: <ColorName color={selectedColor} />
          </div>
          <p>Color Hex: {selectedColor}</p>
          <div className="flex gap-2">
            Color HSV: <ColorHsv color={selectedColor} />
          </div>
          <div className="flex gap-2">
            Color HSL: <ColorHsl color={selectedColor} />
          </div>
          <div className="flex gap-2">
            Color RGB: <ColorRgb color={selectedColor} />
          </div>
          <div className="flex gap-2">
            Color CMYK: <ColorCmyk color={selectedColor} />
          </div>
          <div className="flex gap-2">
            Color XYZ: <ColorXyz color={selectedColor} />
          </div>
        
        </div>

        <div style={{ backgroundColor: selectedColor }} className="h-40 w-40 rounded-md"></div>
        </div>
        
      </div>
    </div>
  );
}
