const SITE_URL = 'https://zedalleys.com';
const YEAR = new Date().getFullYear();

/**
 * Compact footer echoing the personal site's footer chrome, with links back
 * into the main site so the Learning Hub reads as one property.
 */
export function SiteFooter() {
  return (
    <footer className="hub-footer">
      <div className="hub-footer__big">
        Keep learning. <a href={SITE_URL}>Back to Zed Alleys →</a>
      </div>
      <div className="hub-footer__meta">
        <span>© {YEAR} Zed Alleys · Learning Hub</span>
        <span>Designed &amp; built with care · Riyadh</span>
      </div>
    </footer>
  );
}
