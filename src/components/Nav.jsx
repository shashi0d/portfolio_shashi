import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DARK_SELECTORS = {
  home: '.hero, .publications, .contact, .hero-row.dark',
  'case-study': '.cs-hero, .cs-section.dark, .proto-cta, .cs-hero-image, .ft-hero-image, .vr-hero-image, .vr-thesis, .next-project',
};

export default function Nav({ variant = 'case-study', darkSelectors }) {
  const isHome = variant === 'home';
  const selectors = darkSelectors ?? DARK_SELECTORS[variant] ?? DARK_SELECTORS['case-study'];

  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const stack = document.elementsFromPoint(window.innerWidth / 2, 8);
      const underNav = stack.find((el) => !el.closest('.nav'));
      setOnDark(!!(underNav?.closest(selectors)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [selectors]);

  const logo = isHome
    ? <a href="#top" className="nav-logo"><span>SN</span><span className="dot" /></a>
    : <Link to="/" className="nav-logo"><span>SN</span><span className="dot" /></Link>;

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''} ${onDark && !scrolled ? 'on-dark' : ''}`}>
      {logo}
      <ul className="nav-links">
        {isHome ? (
          <>
            <li className="nav-scroll-link"><a href="#work">Work</a></li>
            <li className="nav-scroll-link"><a href="#about">About</a></li>
            <li>
              <a href="mailto:shashidharprakash33@gmail.com?subject=Let%27s%20Schedule%20a%20Call&body=Hi%20Shashi%2C%0A%0AI%27d%20love%20to%20connect%20and%20schedule%20a%20call%20with%20you.%0A%0ALooking%20forward%20to%20hearing%20from%20you%2C%0A">
                Schedule a Call
              </a>
            </li>
            <li>
              <a className="nav-cv-btn" href="/docs/cv/resume_shashi.pdf" download="Shashi_Narayanappa_Resume.pdf">
                Download CV
              </a>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/#work">Work</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}
