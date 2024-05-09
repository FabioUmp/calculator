'use client';
import { useEffect, useState } from "react";
import { Button } from "./components/button/button";
import Display from "./components/display/display";

const rows = [
  ['7', '8', '9', '/'],
  ['4', '5', '6', '*'],
  ['1', '2', '3', '-'],
  ['0', '.', 'C', '+']
]

const validCharacters = /^[0-9+\-*/().]$/;
const validNumbers = /^[0-9]$/;
const operations = "+-/*".split('');

export default function Home() {
  const [displayValue, setDisplayValue] = useState<null | string>(null);
  const [active, setActive] = useState<string | null>(null);

  const glow = (key: string) => {
    setActive(key);

    setTimeout(() => {
      setActive(null);
    }, 100);
  }

  const onClickFn = (key: string) => {
    glow(key);
  }

  const handleKeyDown = (event: any) => {
    const key = event.key;

    if (key === "Enter") {
      // handle
      return;
    }

    if (key === "Backspace") {
      setDisplayValue((prev) => {
        if (prev) {
          return prev.slice(0, -1)
        }

        return null
      })
    }

    if (validCharacters.test(key)) {
      glow(key);

      if (validNumbers.test(key)) {
        // Append valid characters to the display
        setDisplayValue((prev) => {
          if (!prev) {
            return key;
          }

          return prev + key;
        });
      } else {
        // OP
        console.log("op", key)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <div className="w-full max-w-sm mb-8">
        <Display currentValue={displayValue} />
      </div>
      <div className="grid grid-cols-4 gap-4 w-full max-w-sm">
        {rows.map((cols) =>
          cols.map((item) => (
            <Button
              key={item}
              label={item}
              onClick={() => onClickFn(item)}
              active={active === item}
              highlight={operations.includes(item)}
            />
          ))
        )}
      </div>
    </main>
  );
}
