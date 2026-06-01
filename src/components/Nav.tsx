import { useEffect, useRef, useState } from 'react';

const links = [
  { id: 'introduction', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('introduction');
  const isClickScrolling = useRef(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      isClickScrolling.current = true;
      setActive(id);

      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // smooth scroll 结束后，再允许 observer 接管 active 状态
      window.setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <button
          type="button"
          className="logo"
          onClick={() => scrollToSection('introduction')}
        >
          EΛSXIN<span className="dot">.</span>
        </button>

        <div className="nav-links">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => scrollToSection(l.id)}
              className={active === l.id ? 'active' : ''}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}