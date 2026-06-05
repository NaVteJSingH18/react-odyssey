import { Link } from 'react-router-dom'; // Note: Usually 'react-router-dom' for web

const Navbar = () => {
  return (
    <header className="Nav base">
      <div className="navbar">
        <h3>SoCool</h3>
        <div>
          <div className="search">
            <input type="text" placeholder="Search..." />
          </div>
          <nav className="left-bar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>  
    </header>
  );
};

export default Navbar;