'use client'
import { useState, useEffect } from 'react';

const TypingCursor = (props) => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const words = [...props.children];

    let currentIndex = 0;
    let currentText = '';

    const interval = setInterval(() => {
      currentText += words[currentIndex];
      setText(currentText);

      if (currentIndex === words.length - 1) {
        clearInterval(interval);
        setShowCursor(false);
      } else {
        currentIndex++;
      }
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="text-4xl text-center">
      <span>{text}</span>
      {showCursor && <span className="animate-blink">|</span>}
    </div>
  );
};

export default TypingCursor;