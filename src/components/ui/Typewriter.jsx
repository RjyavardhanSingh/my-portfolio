"use client";

import { cn } from "../../utils/cn"; 
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
  maxCharsPerLine = 50,
  paused = false, // New prop to control pause state
}) => {
  // Helper function to split text into lines
  const splitTextIntoLines = (text) => {
    const wordsArray = text.split(" ");
    const lines = [];
    let currentLine = "";

    wordsArray.forEach((word) => {
      // Check if adding this word would exceed the max characters allowed
      if ((currentLine + word).length <= maxCharsPerLine) {
        currentLine += word + " "; // Add the word and a space
      } else {
        lines.push(currentLine.trim()); // Push the current line
        currentLine = word + " "; // Start a new line
      }
    });

    // Push the last line if there's any text left
    if (currentLine) {
      lines.push(currentLine.trim());
    }

    return lines;
  };

  const linesArray = words.map(word => ({
    ...word,
    lines: splitTextIntoLines(word.text),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0); 
  const [lineComplete, setLineComplete] = useState(false); 

  useEffect(() => {
    if (isInView && !paused) { 
      animate("span", {
        display: "inline-block",
        opacity: 1,
        width: "fit-content",
      }, {
        duration: 0.3,
        delay: stagger(0.1),
        ease: "easeInOut",
        onComplete: () => setLineComplete(true), 
      });
    }
  }, [isInView, animate, paused]); 

 
  const handleLineComplete = (lineIndex) => {
    setCurrentLineIndex(lineIndex); 
    setCursorVisible(true); 
  };

  const renderLines = () => (
    <motion.div ref={scope} className="inline">
      {linesArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.lines.map((line, lineIndex) => (
            <div key={`line-${lineIndex}`} className="block"> 
              {line.split("").map((char, charIndex) => (
                <motion.span
                  initial={{}}
                  key={`char-${charIndex}`}
                  className={cn(`dark:text-white text-black opacity-0 hidden`, word.className)}
                  onAnimationComplete={() => {
                    if (charIndex === line.length - 1) {
                      handleLineComplete(lineIndex); 
                    }
                  }}
                >
                  {char === " " ? "\u00A0" : char} 
                </motion.span>
              ))}
            </div>
          ))}
        </div>
      ))}
    </motion.div>
  );

  useEffect(() => {
    if (lineComplete) {
      const timeout = setTimeout(() => {
        setCursorVisible(false); 
      }, 500); 
      return () => clearTimeout(timeout);
    }
  }, [lineComplete]);

  return (
    <div className={cn("text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-center relative", className)}>
      {renderLines()}
      <motion.span
        initial={{ opacity: 0 }} 
        animate={{
          opacity: cursorVisible ? 1 : 0,
          y: `${currentLineIndex * 1.5}em`, 
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn("absolute rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500", cursorClassName)}
      />
    </div>
  );
};
