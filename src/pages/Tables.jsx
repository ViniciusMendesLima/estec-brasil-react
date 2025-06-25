import SearchProducts from "../utils/SearchProducts";

const Tables = () => {
    const productTables = SearchProducts("table");
  return (
    <section className="section">
          <div className="content productSection">
            <h1>Lançamentos</h1>
            <h4>Conheça os nossos principais produtos!</h4>
            <div className="products">
              <div className="product">
                <img src={productTables[0].imageUrl} alt={productTables[0].name} />
                <p className="name">{productTables[0].name}</p>
                <p className="description">{productTables[0].description}</p>
                <p className="price"><span>R$</span>{productTables[0].price}</p>
              </div>
              <div className="product">
                <img src={productTables[1].imageUrl} alt={productTables[1].name} />
                <p className="name">{productTables[1].name}</p>
                <p className="description">{productTables[1].description}</p>
                <p className="price"><span>R$</span>{productTables[1].price}</p>
              </div>
    
              <div className="product">
                <img src={productTables[2].imageUrl} alt={productTables[2].name} />
                <p className="name">{productTables[2].name}</p>
                <p className="description">{productTables[2].description}</p>
                <p className="price"><span>R$</span>{productTables[2].price}</p>
              </div>
              <div className="product">
                <img src={productTables[1].imageUrl} alt={productTables[1].name} />
                <p className="name">{productTables[1].name}</p>
                <p className="description">{productTables[1].description}</p>
                <p className="price"><span>R$</span>{productTables[1].price}</p>
              </div>
    
              <div className="product">
                <img src={productTables[0].imageUrl} alt={productTables[0].name} />
                <p className="name">{productTables[0].name}</p>
                <p className="description">{productTables[0].description}</p>
                <p className="price"><span>R$</span>{productTables[0].price}</p>
              </div>
              <div className="product">
                <img src={productTables[1].imageUrl} alt={productTables[1].name} />
                <p className="name">{productTables[1].name}</p>
                <p className="description">{productTables[1].description}</p>
                <p className="price"><span>R$</span>{productTables[1].price}</p>
              </div>
            </div>
          </div>
        </section>
  )
}

export {Tables}