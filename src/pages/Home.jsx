import { Link } from "react-router-dom";

import SearchProducts from "../utils/SearchProducts";
import { ProductCard } from "../components/ProductCard";

const Home = () => {
  
  const productTables = SearchProducts("table").slice(0,2);
  console.log(productTables);
  const productChairs = SearchProducts("chair").slice(0,2);
  const productMiscellaneous = SearchProducts("miscellaneous").slice(0,2);
  return (
    <section className="section">
      <div className="content productSection">
        <h1>Lançamentos</h1>
        <h4>Conheça os nossos principais produtos!</h4>
        <div className="products">
          <ProductCard products={productTables} />
          <ProductCard products={productChairs} />
          <ProductCard products={productMiscellaneous} />
        </div>
        <button className="btn">
          <Link to="/orders">Fazer Pedido</Link>
        </button>
      </div>
    </section>
  );
};

export { Home };
