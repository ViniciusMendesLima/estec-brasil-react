import { Link } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <header className="section menu">
      <div className="logo">
        <p>estec</p>
        <span>brasil</span>
      </div>
      <nav className="navbar">
        <Link to="/">Home</Link>
      <div className="dropdown">
        <Link className="selectBg" to="/about">A Empresa</Link>
        <div className="dropdown-menu">
          <Link to="/about/mission">Missão</Link>
          <Link to="/about/vision">Visão</Link>
          <Link to="/about/values">Valores</Link>
        </div>
      </div>
      <div className="dropdown">
        <Link className="selectBg" to="/products">Produtos</Link>
        <div className="dropdown-menu">
          <Link to="/products/tables">Mesas</Link>
          <Link to="/products/chairs">Cadeiras</Link>
          <Link to="/products/miscellaneous">Diversos</Link>
        </div>

      </div>
        <Link to="/contact">Contato</Link>
        <Link to="/orders">Pedidos</Link>
      </nav>
    </header>
  );
};

export { Navbar };
