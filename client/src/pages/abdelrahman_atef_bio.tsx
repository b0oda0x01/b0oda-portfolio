import { Link } from 'wouter';
import { BinaryRain } from '@/components/abdelrahman_atef_binary_rain';
import { ArrowLeft } from 'lucide-react';

export default function AbdelrahmanAtefBio() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <BinaryRain />
      
      <div className="relative z-10 min-h-screen py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-12 animate-fade-in">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono"
              data-testid="link-home"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <span className="mx-4 text-muted-foreground">|</span>
            <Link 
              href="/contacts"
              className="text-primary hover:text-primary/80 transition-colors font-mono"
              data-testid="link-contacts"
            >
              Contacts
            </Link>
          </nav>

          <div className="space-y-8 animate-fade-in">
            <h1 
              className="text-3xl md:text-4xl font-mono font-bold text-primary mb-6"
              style={{
                textShadow: '0 0 10px rgba(0, 255, 65, 0.8), 0 0 20px rgba(0, 255, 65, 0.6), 0 0 30px rgba(0, 255, 65, 0.4)',
              }}
              data-testid="text-headline"
            >
              Because "Impossible" is Just Another Algorithm
            </h1>

            <div className="space-y-6 text-lg leading-relaxed font-mono">
              <p className="text-foreground" data-testid="text-intro">
                I'm <span className="text-primary font-semibold">Abdelrahman Atef</span>, a Penetration Tester and Bug Bounty Hunter with over three years of hands-on experience in cybersecurity. I actively hunt vulnerabilities across multiple platforms and have discovered over 100 security issues of varying impact levels.
              </p>

              <p className="text-muted-foreground" data-testid="text-expertise">
                My expertise centers around web application and API penetration testing (REST & GraphQL), focusing on authentication, authorization, and business logic vulnerabilities. I also provide professional penetration testing services for websites, delivering clear, actionable reports with proof-of-concept, impact assessment, and remediation guidance.
              </p>

              <div className="pt-6">
                <h2 className="text-2xl font-mono font-semibold text-primary mb-4" data-testid="text-what-i-offer">
                  What I offer:
                </h2>
                <ul className="space-y-3 text-muted-foreground list-none">
                  <li className="flex items-start gap-3" data-testid="text-service-1">
                    <span className="text-primary mt-1">▸</span>
                    <span>Real-World Web & API Penetration Testing (REST / GraphQL)</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="text-service-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Practical Vulnerability Assessment and Exploitation Analysis</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="text-service-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Professional Bug Bounty Reporting and Responsible Disclosure</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="text-service-4">
                    <span className="text-primary mt-1">▸</span>
                    <span>Actionable Security Recommendations to Strengthen Web Assets</span>
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground pt-4" data-testid="text-approach">
                My approach is straightforward, practical, and results-driven — providing meaningful insights and effective strategies that enhance your system's security posture.
              </p>

              <div className="pt-8">
                <Link 
                  href="/contacts"
                  className="inline-block text-xl font-mono text-primary hover:text-primary/80 transition-all duration-300 border-b-2 border-primary/50 hover:border-primary pb-1"
                  style={{
                    textShadow: '0 0 10px rgba(0, 255, 65, 0.8), 0 0 20px rgba(0, 255, 65, 0.6), 0 0 30px rgba(0, 255, 65, 0.4)',
                  }}
                  data-testid="link-contacts-cta"
                >
                  Let's connect →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
