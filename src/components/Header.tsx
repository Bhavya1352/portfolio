import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setIsMobileMenuOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto max-w-7xl px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center h-14 xs:h-15 sm:h-16 md:h-18 lg:h-20">
          {/* Logo/Name - Bold single line */}
          <a
            href="#"
            className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm lg:text-base font-bold text-foreground tracking-tight"
          >
            BHAVYA MISHRA
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[9px] xs:text-[10px] sm:text-[10px] md:text-[11px] lg:text-xs font-semibold tracking-wider transition-colors relative ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label.toUpperCase()}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
                )}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-3 xs:px-4 sm:px-4 md:px-5 lg:px-5 xl:px-6 py-1.5 xs:py-2 sm:py-2 md:py-2.5 lg:py-2.5 xl:py-3 bg-primary text-primary-foreground text-[9px] xs:text-[10px] sm:text-[10px] md:text-xs lg:text-xs font-bold tracking-wider rounded-md hover:bg-primary/90 transition-colors"
            >
              LET'S TALK
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden w-8 xs:w-9 sm:w-10 h-8 xs:h-9 sm:h-10 flex items-center justify-center text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-background border-t border-border/40 ${
            isMobileMenuOpen ? 'max-h-96 pb-4 xs:pb-5 sm:pb-6' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-3 xs:gap-3 sm:gap-4 pt-4 xs:pt-5 sm:pt-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xs xs:text-xs sm:text-sm font-semibold tracking-wider transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label.toUpperCase()}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 px-4 xs:px-5 sm:px-5 py-2 xs:py-2.5 sm:py-2.5 bg-primary text-primary-foreground text-[10px] xs:text-xs sm:text-xs font-bold tracking-wider rounded-md hover:bg-primary/90 transition-colors mt-1 xs:mt-2 sm:mt-2 w-fit"
            >
              LET'S TALK
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
