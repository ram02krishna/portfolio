"use client";
import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursorChar?: string;
  hideCursorOnComplete?: boolean;
}

export default function TypewriterText({
  text,
  speed = 35,
  delay = 150,
  className = "",
  cursorChar = "▎",
  hideCursorOnComplete = false,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [text, speed, delay]);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{displayedText}</span>
      {(!hideCursorOnComplete || isTyping) && (
        <span
          aria-hidden="true"
          className="ml-1 inline-block animate-pulse font-normal select-none text-emerald"
          style={{ WebkitTextFillColor: "#10b981", color: "#10b981" }}
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
}
