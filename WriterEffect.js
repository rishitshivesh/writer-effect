import { useState, useEffect } from "react";

export default function WriterEffect({ text, className, style, timeout = 50 }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, timeout);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div style={style} className={className}>
      {displayText}
    </div>
  );
}
