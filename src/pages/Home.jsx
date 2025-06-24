import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section">
      <h1>Lançamentos</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <div>produtos</div>
      <button className="bnt">
        <Link to="/orders">Fazer Pedido</Link>
      </button>
    </section>
  );
};

export { Home };
