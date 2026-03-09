import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function MainLayout({ children, cartCount }) {
  return (
    <div className="layout-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="logo">ShopFront</Link>
          <nav className="main-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="header-actions">
            <input className="search-input" type="search" placeholder="Search products..." />
            <Link to="/cart" className="cart-link" aria-label="Cart">
              🛒<span className="cart-badge">{cartCount}</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="content">{children}</main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h4>Support</h4>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">FAQ</a>
          </div>
          <div>
            <h4>Social</h4>
            <a href="#">Instagram</a>
            <a href="#">X / Twitter</a>
            <a href="#">YouTube</a>
          </div>
          <div>
            <h4>ShopFront</h4>
            <p>Curated tech essentials for home, play, and work.</p>
            <p>© {new Date().getFullYear()} ShopFront. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
