import { useRef, useEffect } from 'react';

const DEFAULT_DARK = '.hero, .cs-hero, .publications, .contact, .hero-row.dark, .cs-section.dark, .ft-hero-image, .vr-hero-image, .vr-thesis, .next-project, .vr-next-grid, .proto-cta, .cs-hero-image';

export default function Cursor({ darkSelectors = DEFAULT_DARK }) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my, raf;

    function isOverDark(x, y) {
      const els = document.querySelectorAll(darkSelectors);
      for (const el of els) {
        const r = el.getBoundingClientRect();
        if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return true;
      }
      return false;
    }

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      if (isOverDark(mx, my)) {
        document.body.classList.add('cursor-dark');
      } else {
        document.body.classList.remove('cursor-dark');
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);

    const hoverables = 'a, button, .project, .skill-tag, .contact-link, [data-hover]';
    const onOver = (e) => { if (e.target.closest?.(hoverables)) document.body.classList.add('cursor-hover'); };
    const onOut  = (e) => { if (e.target.closest?.(hoverables)) document.body.classList.remove('cursor-hover'); };
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(raf);
      document.body.classList.remove('cursor-dark', 'cursor-hover');
    };
  }, [darkSelectors]);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
