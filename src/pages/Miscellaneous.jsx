import SearchProducts from "../utils/SearchProducts";

const Miscellaneous = () => {
     const productMiscellaneous = SearchProducts("miscellaneous");
  return (
    <section className="section">
          <div className="content productSection">
            <h1>Lançamentos</h1>
            <h4>Conheça os nossos principais produtos!</h4>
            <div className="products">
              <div className="product">
                <img src={productMiscellaneous[0].imageUrl} alt={productMiscellaneous[0].name} />
                <p className="name">{productMiscellaneous[0].name}</p>
                <p className="description">{productMiscellaneous[0].description}</p>
                <p className="price"><span>R$</span>{productMiscellaneous[0].price}</p>
              </div>
              <div className="product">
                <img src={productMiscellaneous[1].imageUrl} alt={productMiscellaneous[1].name} />
                <p className="name">{productMiscellaneous[1].name}</p>
                <p className="description">{productMiscellaneous[1].description}</p>
                <p className="price"><span>R$</span>{productMiscellaneous[1].price}</p>
              </div>
    
              <div className="product">
                <img src={productMiscellaneous[3].imageUrl} alt={productMiscellaneous[3].name} />
                <p className="name">{productMiscellaneous[3].name}</p>
                <p className="description">{productMiscellaneous[3].description}</p>
                <p className="price"><span>R$</span>{productMiscellaneous[0].price}</p>
              </div>
              <div className="product">
                <img src={productMiscellaneous[4].imageUrl} alt={productMiscellaneous[4].name} />
                <p className="name">{productMiscellaneous[4].name}</p>
                <p className="description">{productMiscellaneous[4].description}</p>
                <p className="price"><span>R$</span>{productMiscellaneous[4].price}</p>
              </div>
    
              <div className="product">
                <img src={productMiscellaneous[0].imageUrl} alt={productMiscellaneous[0].name} />
                <p className="name">{productMiscellaneous[0].name}</p>
                <p className="description">{productMiscellaneous[0].description}</p>
                <p className="price"><span>R$</span>{productMiscellaneous[0].price}</p>
              </div>
              <div className="product">
                <img src={productMiscellaneous[1].imageUrl} alt={productMiscellaneous[1].name} />
                <p className="name">{productMiscellaneous[1].name}</p>
                <p className="description">{productMiscellaneous[1].description}</p>
                <p className="price"><span>R$</span>{productMiscellaneous[1].price}</p>
              </div>
            </div>
          </div>
        </section>
  )
}

export {Miscellaneous}