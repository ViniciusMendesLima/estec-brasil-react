import { ProductCard } from "../components/ProductCard";
import SearchProducts from "../utils/SearchProducts";

const Chairs = () => {
     const products = SearchProducts("chair");
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

export {Chairs}