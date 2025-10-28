import { Link } from 'wouter';
import { BinaryRain } from '@/components/abdelrahman_atef_binary_rain';
import { LogoSvg } from '@/components/logo-svg';
import { AnimatedText } from '@/components/animated-text';

export default function AbdelrahmanAtefHome() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <BinaryRain />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="text-center animate-fade-in">
          <div className="mb-12" data-testid="text-logo">
            <LogoSvg />
          </div>
          
          <div className="mt-12">
            <Link 
              href="/bio"
              className="inline-block text-3xl md:text-4xl lg:text-5xl font-mono text-primary hover:text-primary/80 transition-all duration-300 border-b-2 border-primary/50 hover:border-primary pb-1 animate-glow-pulse"
              style={{
                textShadow: '0 0 10px rgba(0, 255, 65, 0.8), 0 0 20px rgba(0, 255, 65, 0.6), 0 0 30px rgba(0, 255, 65, 0.4)',
              }}
              data-testid="link-bio"
            >
              <AnimatedText text="N33D H3LP? M33T M3" showCursor={true} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
