'use client';
import { useEffect, useState } from "react";
import { Button } from "./components/button/button";
import { Display } from "./components/display/display";
export default function Home() {
  const onClickFn = () => {

  }

  const [displayValue, setDisplayValue] = useState<null | string>(null);
  const [active, setActive] = useState<string | null>(null);

  const rows = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', 'C', '+']
  ]

  const handleKeyDown = (event: any) => {
    const key = event.key;

    // Define valid characters that can be typed
    const validCharacters = /^[0-9+\-*/().]$/;

    if (/[0-9]/.test(key)) {
      // Handle the key by simulating a button click
      // onClickFn(key);

      // Set the glowing button state
      setActive(key);

      // Remove the glow effect after one second
      setTimeout(() => {
        setActive(null);
      }, 1000); // 1000ms or 1 second
    }

    if (validCharacters.test(key)) {
      // Append valid characters to the display
      setDisplayValue((prev) => {
        if (!prev) {
          return key;
        }

        return prev + key;
      });
    } else if (key === 'Enter') {
      // Evaluate the expression if Enter is pressed
      // handleEvaluate();
    } else if (key === 'Backspace') {
      setDisplayValue((prev) => {
        if (prev) {
          return prev.slice(0, -1)
        }

        return null
      })
    }
  }

  // Add event listener for keydown events when the component mounts
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      {/* Display component with improved styling */}
      <div className="w-full max-w-sm mb-8">
        <Display currentValue={displayValue} />
      </div>

      {/* Grid container for calculator buttons */}
      <div className="grid grid-cols-4 gap-4 w-full max-w-sm">
        {/* Iterate over rows and columns to create buttons */}
        {rows.map((cols) =>
          cols.map((item) => (
            <Button
              label={item}
              onClick={onClickFn}
              key={item}
              active={active === item}
            />
          ))
        )}
      </div>
    </main>
  );
}
