import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section">
      <h1>Produtos</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <div>produtos</div>
      <button className="bnt">
        <Link to="/products">Produtos</Link>
      </button>
    </section>
  );
};

export { Home };
