import { Link } from "react-router-dom";

import SearchProducts from "../utils/SearchProducts";
import { ProductCard } from "../components/ProductCard";

const Home = () => {
  const productTables = SearchProducts("table");
  const productChairs = SearchProducts("chair");
  const productMiscellaneous = SearchProducts("miscellaneous");
  return (
    <section className="section">
      <div className="content productSection">
        <h1>Lançamentos</h1>
        <h4>Conheça os nossos principais produtos!</h4>
        <div className="products">
          <ProductCard products={productTables.slice(0, 2)} />
          <ProductCard products={productChairs.slice(0, 2)} />
          <ProductCard products={productMiscellaneous.slice(0, 2)} />
        </div>
        <button className="btn">
          <Link to="/orders">Fazer Pedido</Link>
        </button>
      </div>
    </section>
  );
};

export { Home };
