import { Link } from "react-router-dom";

import SearchProducts from "../utils/SearchProducts";

const Home = () => {
  const productTables = SearchProducts("table");
  console.log(productTables);
  
   const productChairs = SearchProducts("chair");
   const productMiscellaneous = SearchProducts("miscellaneous");
  return (
    <section className="section">
      <div className="content homePage">
        <h1>Lançamentos</h1>
        <h4>Conheça os nossos principais produtos!</h4>
        <div className="products">
          <div className="product">
            <img src={productTables[0].imageUrl} alt={productTables[0].name} />
            <p className="name">{productTables[0].name}</p>
            <p className="description">{productTables[0].description}</p>
            <p className="price">{productTables[0].price}</p>
          </div>
          <div className="product">
            <img src={productTables[1].imageUrl} alt={productTables[1].name} />
            <p className="name">{productTables[1].name}</p>
            <p className="description">{productTables[1].description}</p>
            <p className="price">{productTables[1].price}</p>
          </div>

          <div className="product">
            <img src={productChairs[0].imageUrl} alt={productChairs[0].name} />
            <p className="name">{productChairs[0].name}</p>
            <p className="description">{productChairs[0].description}</p>
            <p className="price">{productChairs[0].price}</p>
          </div>
          <div className="product">
            <img src={productChairs[1].imageUrl} alt={productChairs[1].name} />
            <p className="name">{productChairs[1].name}</p>
            <p className="description">{productChairs[1].description}</p>
            <p className="price">{productChairs[1].price}</p>
          </div>

          <div className="product">
            <img src={productMiscellaneous[0].imageUrl} alt={productMiscellaneous[0].name} />
            <p className="name">{productMiscellaneous[0].name}</p>
            <p className="description">{productMiscellaneous[0].description}</p>
            <p className="price">{productMiscellaneous[0].price}</p>
          </div>
          <div className="product">
            <img src={productMiscellaneous[1].imageUrl} alt={productMiscellaneous[1].name} />
            <p className="name">{productMiscellaneous[1].name}</p>
            <p className="description">{productMiscellaneous[1].description}</p>
            <p className="price">{productMiscellaneous[1].price}</p>
          </div>
        </div>
        <button className="bnt">
          <Link to="/orders">Fazer Pedido</Link>
        </button>
      </div>
    </section>
  );
};

export { Home };
