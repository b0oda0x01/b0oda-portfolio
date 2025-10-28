import { Link } from 'wouter';
import { BinaryRain } from '@/components/abdelrahman_atef_binary_rain';
import { ArrowLeft, Mail, Phone, Globe, MapPin, Linkedin, QrCode } from 'lucide-react';

export default function AbdelrahmanAtefContacts() {
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
              href="/bio"
              className="text-primary hover:text-primary/80 transition-colors font-mono"
              data-testid="link-bio"
            >
              Bio
            </Link>
          </nav>

          <div className="animate-fade-in">
            <h1 
              className="text-3xl md:text-4xl font-mono font-bold text-primary mb-12"
              style={{
                textShadow: '0 0 10px rgba(0, 255, 65, 0.8), 0 0 20px rgba(0, 255, 65, 0.6), 0 0 30px rgba(0, 255, 65, 0.4)',
              }}
              data-testid="text-contacts-header"
            >
              Contacts
            </h1>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="space-y-4 font-mono">
                  <div className="flex items-start gap-3" data-testid="contact-name">
                    <span className="text-muted-foreground min-w-[100px]">Name:</span>
                    <span className="text-primary">Abdelrahman Atef | b0oda</span>
                  </div>

                  <div className="flex items-start gap-3" data-testid="contact-address">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-1 min-w-[100px]" />
                    <span className="text-primary">Alexandria, Egypt</span>
                  </div>

                  <div className="flex items-start gap-3" data-testid="contact-email">
                    <Mail className="w-4 h-4 text-muted-foreground mt-1 min-w-[100px]" />
                    <a 
                      href="mailto:mrrb0oda@gmail.com"
                      className="text-primary hover:text-primary/80 transition-colors underline"
                      data-testid="link-email"
                    >
                      mrrb0oda@gmail.com
                    </a>
                  </div>

                  <div className="flex items-start gap-3" data-testid="contact-phone">
                    <Phone className="w-4 h-4 text-muted-foreground mt-1 min-w-[100px]" />
                    <a 
                      href="tel:+201289733296"
                      className="text-primary hover:text-primary/80 transition-colors"
                      data-testid="link-phone"
                    >
                      (20) 1289733296
                    </a>
                  </div>

                  <div className="flex items-start gap-3" data-testid="contact-website">
                    <Globe className="w-4 h-4 text-muted-foreground mt-1 min-w-[100px]" />
                    <a 
                      href="https://b0oda.site"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors underline"
                      data-testid="link-website"
                    >
                      b0oda.site
                    </a>
                  </div>

                  <div className="flex items-start gap-3" data-testid="contact-linkedin">
                    <Linkedin className="w-4 h-4 text-muted-foreground mt-1 min-w-[100px]" />
                    <a 
                      href="https://www.linkedin.com/in/abdelrahman-atef-787895318/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors underline break-all"
                      data-testid="link-linkedin"
                    >
                      linkedin.com/in/abdelrahman-atef-787895318
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <div 
                  className="w-64 h-64 border-2 border-primary/30 rounded-md flex items-center justify-center"
                  style={{
                    boxShadow: '0 0 20px hsl(120 100% 50% / 0.2)',
                  }}
                  data-testid="qr-placeholder"
                >
                  <div className="text-center p-8">
                    <QrCode className="w-20 h-20 mx-auto mb-4 text-primary/60" data-testid="icon-qr" />
                    <p className="text-sm text-muted-foreground font-mono" data-testid="text-qr-title">
                      QR vCard
                    </p>
                    <p className="text-xs text-muted-foreground/60 font-mono mt-2" data-testid="text-qr-subtitle">
                      Scan to save contact
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
