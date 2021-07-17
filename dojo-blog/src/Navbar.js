import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>AllCooks.com</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/explore" style={{
          backgroundColor: '#ffba24',
          borderRadius: '8px'
        }}>Explore</Link>
        <Link to="/favourites">Favourites</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/faq">Contact Us</Link>
      </div>

    </nav>
  );
}

export default Navbar;