import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to='/'>Home</Link>
        <Link to='/about'>A Empresa</Link>
        <Link to='/products'>Produtos</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/orders'>Pedidos</Link>
    </nav>
  )
}

export {Navbar}