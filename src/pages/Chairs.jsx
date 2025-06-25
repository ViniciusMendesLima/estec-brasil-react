import SearchProducts from "../utils/SearchProducts";

const Chairs = () => {
     const productChairs = SearchProducts("chair");
  return (
    <section className="section">
          <div className="content productSection">
            <h1>Lançamentos</h1>
            <h4>Conheça os nossos principais produtos!</h4>
            <div className="products">
              <div className="product">
                <img src={productChairs[0].imageUrl} alt={productChairs[0].name} />
                <p className="name">{productChairs[0].name}</p>
                <p className="description">{productChairs[0].description}</p>
                <p className="price"><span>R$</span>{productChairs[0].price}</p>
              </div>
              <div className="product">
                <img src={productChairs[1].imageUrl} alt={productChairs[1].name} />
                <p className="name">{productChairs[1].name}</p>
                <p className="description">{productChairs[1].description}</p>
                <p className="price"><span>R$</span>{productChairs[1].price}</p>
              </div>
    
              <div className="product">
                <img src={productChairs[0].imageUrl} alt={productChairs[0].name} />
                <p className="name">{productChairs[0].name}</p>
                <p className="description">{productChairs[0].description}</p>
                <p className="price"><span>R$</span>{productChairs[0].price}</p>
              </div>
              <div className="product">
                <img src={productChairs[1].imageUrl} alt={productChairs[1].name} />
                <p className="name">{productChairs[1].name}</p>
                <p className="description">{productChairs[1].description}</p>
                <p className="price"><span>R$</span>{productChairs[1].price}</p>
              </div>
    
              <div className="product">
                <img src={productChairs[0].imageUrl} alt={productChairs[0].name} />
                <p className="name">{productChairs[0].name}</p>
                <p className="description">{productChairs[0].description}</p>
                <p className="price"><span>R$</span>{productChairs[0].price}</p>
              </div>
              <div className="product">
                <img src={productChairs[1].imageUrl} alt={productChairs[1].name} />
                <p className="name">{productChairs[1].name}</p>
                <p className="description">{productChairs[1].description}</p>
                <p className="price"><span>R$</span>{productChairs[1].price}</p>
              </div>
            </div>
          </div>
        </section>
  )
}

export {Chairs}