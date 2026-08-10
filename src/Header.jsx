import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <h1>Rabia Hussain</h1>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="main-nav"
      >
        {menuOpen ? 'Close Menu' : 'Menu'}
      </button>
      <nav id="main-nav" style={{ display: menuOpen ? 'block' : 'none' }}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;