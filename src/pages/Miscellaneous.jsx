import { ProductCard } from "../components/ProductCard";
import SearchProducts from "../utils/SearchProducts";

const Miscellaneous = () => {
     const products = SearchProducts("miscellaneous");
  return (
    <section className="section">
          <div className="content productSection">
            <h1>Lançamentos</h1>
            <h4>Conheça os nossos principais produtos!</h4>
            <div className="products">
              <ProductCard products={products}/>
            </div>
          </div>
        </section>
  )
}

export {Miscellaneous}