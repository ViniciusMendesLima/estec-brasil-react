import SearchProducts from "../../../utils/SearchProducts";

const ProductsItens = ({items, setItems }) => {
  const products = SearchProducts();

  function orderTotal() {
    let total = 0;
    total = items.reduce((sum, item) => sum + (item.total || 0), 0);

    return total;
  }

  const handleProductChange = (index, e) => {
    const productIndex = e.target.value;
    const updatedItems = [...items];
    const product = products[productIndex];

    updatedItems[index] = {
      ...updatedItems[index],
      productIndex,
      description: product ? product.description : "",
      price: product ? product.price : "",
      quantity: updatedItems[index].quantity || 1,
      total:
        product && updatedItems[index].quantity
          ? product.price * Number(updatedItems[index].quantity)
          : 0,
    };
    orderTotal();
    setItems(updatedItems);
  };

  const addNewItem = () => {
    setItems([
      ...items,
      { productIndex: "", description: "", price: "", quantity: 1, total: 0 },
    ]);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    orderTotal();
    setItems(newItems);
  };

  const handleQuantityChange = (index, e) => {
    let quantity = Number(e.target.value);
    if (isNaN(quantity) || quantity < 1) quantity = 1;
    const updatedItems = [...items];

    updatedItems[index] = {
      ...updatedItems[index],
      quantity,
      total: updatedItems[index].price
        ? updatedItems[index].price * quantity
        : 0,
    };

    setItems(updatedItems);
  };
  return (
    <>
      <div className="OrderFormProducts">
        <h2>Produtos</h2>
        <table>
          <thead>
            <tr>
              <th>Selecione Produto</th>
              <th>Descrição</th>
              <th>Valor Unitario</th>
              <th>Qtd</th>
              <th>Valor Total Item</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="selectOrderProduct">
                <td>
                  <select
                    onChange={(e) => handleProductChange(index, e)}
                    value={item.productIndex}
                  >
                    <option>Selecione um Produto</option>
                    {products.map((p, i) => (
                      <option key={i} value={i}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input type="text" value={item.description} readOnly />
                </td>
                <td>
                  <input type="number" value={item.price} readOnly />
                </td>
                <td>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    onChange={(e) => handleQuantityChange(index, e)}
                    value={item.quantity}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={(item.quantity * item.price).toFixed(2)}
                    name="totalPrice"
                    // {...register("totalPrice", { required: true })}
                    readOnly
                  />
                </td>
                <td>
                  <button
                    className="remProduct"
                    type="button"
                    onClick={() => removeItem(index)}
                  >
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="addProduct" type="button" onClick={addNewItem}>
          Adicionar Produto
        </button>
        <div className="selectOrderProductTotalValue">
          <label>Valor Total Pedido</label>
          <input type="number" value={orderTotal().toFixed(2)} readOnly />
        </div>
      </div>
    </>
  );
};

export { ProductsItens };
