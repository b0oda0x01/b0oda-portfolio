import { useEffect, useRef } from 'react';

interface BinaryDigit {
  x: number;
  y: number;
  char: string;
  speed: number;
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

    let animationFrameId: number;
    let digits: BinaryDigit[] = [];

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Recalculate digits on resize to maintain consistent density
      const digitCount = Math.floor((canvas.width * canvas.height) / 15000);
      digits = [];
      for (let i = 0; i < digitCount; i++) {
        digits.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          char: Math.random() > 0.5 ? '1' : '0',
          speed: 0.2 + Math.random() * 0.4,
          opacity: 0.08 + Math.random() * 0.07,
          fontSize: 14 + Math.random() * 10,
        });
      }
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const animate = () => {
      // Clear canvas with full opacity (no trail effect)
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw each digit
      digits.forEach((digit) => {
        ctx.font = `${digit.fontSize}px monospace`;
        ctx.fillStyle = `rgba(0, 255, 0, ${digit.opacity})`;
        ctx.fillText(digit.char, digit.x, digit.y);

        // Move digit down slowly
        digit.y += digit.speed;

        // Reset to top when it goes off screen
        if (digit.y > canvas.height + 20) {
          digit.y = -20;
          digit.x = Math.random() * canvas.width;
          digit.char = Math.random() > 0.5 ? '1' : '0';
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
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
