import { useEffect, useRef } from 'react';

interface BinaryDigit {
  x: number;
  y: number;
  char: string;
  opacity: number;
  fontSize: number;
}

export function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let digits: BinaryDigit[] = [];

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Create static binary digits across the screen
      const digitCount = Math.floor((canvas.width * canvas.height) / 12000);
      digits = [];
      for (let i = 0; i < digitCount; i++) {
        digits.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          char: Math.random() > 0.5 ? '1' : '0',
          opacity: 0.05 + Math.random() * 0.10, // Low opacity (5-15%)
          fontSize: 12 + Math.random() * 8,
        });
      }

      // Draw once (static)
      render();
    };

    const render = () => {
      // Clear canvas with background color
      ctx.fillStyle = 'rgb(13, 17, 23)'; // #0d1117
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw each static digit
      digits.forEach((digit) => {
        ctx.font = `${digit.fontSize}px 'Source Code Pro', 'Courier New', monospace`;
        ctx.fillStyle = `rgba(0, 255, 65, ${digit.opacity})`; // #00ff41
        ctx.fillText(digit.char, digit.x, digit.y);
      });
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
