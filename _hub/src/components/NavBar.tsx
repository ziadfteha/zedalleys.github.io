import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Site chrome for the Learning Hub, matching the Zed Alleys personal-site nav
 * (fixed, mix-blend, gains a blurred backdrop once the page scrolls under it).
 * The logo + "Alleys" link back out to the main site home; the "Learning Hub"
 * wordmark links to the hub's own home (the subjects list) — there is no
 * separate "Subjects" nav item, since that wordmark and the in-page
 * "← All subjects" links already do that job.
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
      <div className="hub-nav__brand">
        <a href={SITE_URL} className="hub-nav__home">
          <img src={`${import.meta.env.BASE_URL}zed-logo-light.png`} alt="Zed Alleys" className="hub-nav__mark" />
          <span className="hub-nav__word">Alleys</span>
        </a>
        <span className="hub-nav__divider" aria-hidden="true">/</span>
        <Link to="/" className="hub-nav__tab">Learning Hub</Link>
      </div>
    </nav>
  );
}
