import { Link } from 'wouter';
import { BinaryRain } from '@/components/abdelrahman_atef_binary_rain';
import { LogoSvg } from '@/components/logo-svg';

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
              className="inline-block text-xl md:text-2xl font-mono text-primary hover:text-primary/80 transition-all duration-300 border-b-2 border-primary/50 hover:border-primary pb-1"
              style={{
                textShadow: '0 0 10px hsl(120 100% 50% / 0.3)',
              }}
              data-testid="link-bio"
            >
              N33D H3LP? M33T M3
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
