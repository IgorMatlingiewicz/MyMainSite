import { Link, useLocation } from 'react-router-dom';

export default function PageSwitcher({ language, mode }) {
    const { pathname } = useLocation();
    const isDark = mode === 'dark';

    return (
        <div className={`page-switcher ${isDark ? 'page-switcher-dark' : 'page-switcher-light'}`}>
            <Link to="/" className={`page-switcher-link ${pathname === '/' ? 'active' : ''}`}>
                {language === 'PL' ? 'Dla pracodawcy' : 'For employers'}
            </Link>
            <Link to="/dla-firm" className={`page-switcher-link ${pathname === '/dla-firm' ? 'active' : ''}`}>
                {language === 'PL' ? 'Dla firm' : 'For business'}
            </Link>
        </div>
    );
}
