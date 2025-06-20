import { Link } from "react-router-dom";
import "./css/navbar.css";
const Navbar = () => {
  return (
    <section className="section menu">
      <div className="logo">
        <p>estec</p>
        <span>brasil</span>
      </div>
      <nav className="navbar">
        <Link to="/">Home</Link>
      <div className="dropdown">
        <Link className="selectBg" to="/about">A Empresa</Link>
        <div className="dropdown-menu">
          <Link to="/about/history">História</Link>
          <Link to="/about/mission">Missão</Link>
          <Link to="/about/values">Valores</Link>
        </div>
      </div>
        <Link to="/products">Produtos</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/orders">Pedidos</Link>
      </nav>
    </section>
  );
};

export { Navbar };
