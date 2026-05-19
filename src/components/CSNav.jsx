import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DEFAULT_DARK = '.cs-hero, .cs-section.dark, .proto-cta, .cs-hero-image, .ft-hero-image, .vr-hero-image, .vr-thesis, .next-project';

export default function CSNav({ darkSelectors = DEFAULT_DARK }) {
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const stack = document.elementsFromPoint(window.innerWidth / 2, 8);
      const underNav = stack.find((el) => !el.closest('.nav'));
      setOnDark(!!(underNav?.closest(darkSelectors)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [darkSelectors]);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''} ${onDark && !scrolled ? 'on-dark' : ''}`}>
      <Link to="/" className="nav-logo"><span>SN</span><span className="dot" /></Link>
      <ul className="nav-links">
        <li><Link to="/#work">Work</Link></li>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/#contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
