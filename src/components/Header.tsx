import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 20);

      // Hide on scroll down, show on scroll up (only after 300px)
      if (currentY > 300) {
        setIsHidden(currentY > lastScrollY.current && currentY - lastScrollY.current > 5);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = currentY;
    };
    const onResize = () => window.innerWidth >= 768 && setIsMobileMenuOpen(false);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Animate the sliding pill indicator
  useEffect(() => {
    if (!indicatorRef.current || !navRef.current) return;
    const activeLink = navRef.current.querySelector(`a[href="${activeSection}"]`) as HTMLElement;
    if (activeLink) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      gsap.to(indicatorRef.current, {
        x: linkRect.left - navRect.left,
        width: linkRect.width,
        opacity: 1,
        duration: 0.4,
        ease: 'power3.out',
      });
    } else {
      gsap.to(indicatorRef.current, { opacity: 0, duration: 0.3 });
    }
  }, [activeSection]);

  // Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.nav-floating-pill',
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: 'power3.out' }
      );

    });
    return () => ctx.revert();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top bar — logo left, CTA right */}
        <div className="flex justify-end items-center h-16 pointer-events-auto md:pointer-events-none">
          {/* Mobile toggle */}
          <button
            className="md:hidden relative w-10 h-10 rounded-full border border-[#A63A50]/20 bg-[#1A141A]/60 backdrop-blur-md flex items-center justify-center text-[#FFF6F8]/60 hover:text-[#E26D8A] hover:border-[#E26D8A]/40 transition-all pointer-events-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* CENTER: Floating pill navbar */}
        <div className="nav-floating-pill hidden md:flex justify-center opacity-0 -mt-12 mb-0 pointer-events-auto">
          <nav
            ref={navRef}
            className={`relative inline-flex items-center gap-0.5 px-1.5 py-1.5 rounded-full transition-all duration-500 ${
              isScrolled
                ? 'bg-[#1A141A]/80 backdrop-blur-xl border border-[#A63A50]/15 shadow-xl shadow-black/20'
                : 'bg-[#1A141A]/40 backdrop-blur-md border border-[#A63A50]/10'
            }`}
          >
            {/* Sliding pill indicator */}
            <div
              ref={indicatorRef}
              className="absolute top-1.5 left-0 h-[calc(100%-12px)] rounded-full bg-[#A63A50]/15 border border-[#A63A50]/25 pointer-events-none opacity-0"
              style={{ willChange: 'transform, width' }}
            />

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative z-10 px-4 py-2 text-[11px] uppercase font-bold tracking-[0.15em] transition-colors duration-300 magnetic-item rounded-full ${
                  activeSection === link.href
                    ? 'text-[#E26D8A]'
                    : 'text-[#FFF6F8]/40 hover:text-[#FFF6F8]/80'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Divider */}
            <div className="w-px h-5 bg-[#A63A50]/20 mx-1" />

            {/* CTA */}
            <a
              href="#contact"
              className="relative z-10 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#A63A50] text-[#FFF6F8] text-[11px] uppercase font-bold tracking-wider hover:bg-[#A63A50]/80 transition-all shadow-md shadow-[#A63A50]/20 magnetic-item"
            >
              Let's Talk
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </nav>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-auto ${
            isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="mt-2 p-4 rounded-2xl bg-[#1A141A]/90 backdrop-blur-xl border border-[#A63A50]/15 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                  activeSection === link.href
                    ? 'text-[#E26D8A] bg-[#A63A50]/10'
                    : 'text-[#FFF6F8]/50 hover:text-[#FFF6F8] hover:bg-[#A63A50]/5'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="w-full h-px bg-[#A63A50]/15 my-2" />
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-[#A63A50] text-[#FFF6F8] text-sm font-semibold hover:bg-[#A63A50]/80 transition-all"
            >
              Let's Talk
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
