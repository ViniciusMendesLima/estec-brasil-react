const ProductCard = ({products}) => {
  return (
    <>
      {products.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.imageUrl} alt={product.name} />
            <p className="name">{product.name}</p>
            <p className="description">{product.description}</p>
            <p className="price">
              <span>R$</span>
              {product.price.toFixed(2)}
            </p>
          </div>
        ))
      )}
    </>
  );
};

export { ProductCard };
