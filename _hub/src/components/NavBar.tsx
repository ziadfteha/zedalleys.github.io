import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Site chrome for the Learning Hub, matching the Zed Alleys personal-site nav
 * (fixed, mix-blend, gains a blurred backdrop once the page scrolls under it).
 * The brand mark links back to the hub home; the right-hand link goes back out
 * to the main site so the hub doesn't feel like a disconnected app.
 */
const SITE_URL = 'https://zedalleys.com';

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`hub-nav${scrolled ? ' is-scrolled' : ''}`}>
      <Link to="/" className="hub-nav__brand">
        <img src={`${import.meta.env.BASE_URL}zed-logo-light.png`} alt="Zed Alleys" className="hub-nav__mark" />
        <span className="hub-nav__word">Alleys</span>
        <span className="hub-nav__divider" aria-hidden="true">/</span>
        <span className="hub-nav__tab">Learning Hub</span>
      </Link>
      <div className="hub-nav__links">
        <Link to="/" className="hub-nav__link">Subjects</Link>
        <a href={SITE_URL} className="hub-nav__link">Zed Alleys ↗</a>
      </div>
    </nav>
  );
}
