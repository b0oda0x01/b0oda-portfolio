interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  showCursor?: boolean;
  'data-testid'?: string;
}

export function AnimatedText({ text, className = '', style, showCursor = false, 'data-testid': dataTestId }: AnimatedTextProps) {
  // Split text and identify "3" characters for animation
  const renderText = () => {
    const parts: React.ReactNode[] = [];
    let threeCount = 0;
    
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === '3') {
        // Apply oscillating animation to each "3" with staggered delay
        const delayClass = threeCount % 4 === 0 ? 'animate-oscillate' :
                          threeCount % 4 === 1 ? 'animate-oscillate-delay-1' :
                          threeCount % 4 === 2 ? 'animate-oscillate-delay-2' :
                          'animate-oscillate-delay-3';
        parts.push(
          <span key={i} className={delayClass}>
            {char}
          </span>
        );
        threeCount++;
      } else {
        parts.push(<span key={i}>{char}</span>);
      }
    }
    
    if (showCursor) {
      parts.push(
        <span key="cursor" className="animate-cursor-blink">
          |
        </span>
      );
    }
    
    return parts;
  };

  return (
    <span className={className} style={style} data-testid={dataTestId}>
      {renderText()}
    </span>
  );
}
