import { useForm } from "react-hook-form";
import SearchProducts from "../../utils/SearchProducts";
import { useState } from "react";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const products = SearchProducts();

  const [items, setItems] = useState([
    {
      productIndex: "",
      description: "",
      price: "",
      quantity: 1,
      total: 0,
    },
  ]);

  function orderTotal(){
    let total = 0
      total = items.reduce((sum, item) => sum + (item.total || 0), 0);
    
    return total
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
    orderTotal()
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
    orderTotal()
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

  const onSubmits = (data) => {
    console.log(data);
  };

  return (
    <div className="form">
      <label htmlFor="name">Nome do Vendedor:</label>
      <select name="Saller-id" id="sallerSelect" {...register("sallerId")}>
        <option>Selecione um Funcionário</option>
        <option value="Francisco Mendes">Francisco</option>
        <option value="Maria Pinheiro">Maria</option>
        <option value="Eva Mendes">Eva</option>
        <option value="Onofre Mendes">Onofre</option>
      </select>

      <div className="clientAdress">
        <div>
          <label htmlFor="client">Cliente:</label>
          <input
            type="text"
            id="client"
            name="client"
            {...register("client", { required: true })}
          />
          {errors?.name?.type == "required" && (
            <p>{errors?.name}Nome e obrigatorio</p>
          )}
        </div>

        <div>
          <label htmlFor="enterprise">CNPJ:</label>
          <input
            type="number"
            id="enterprise"
            name="enterprise"
            {...register("enterprise")}
          />
        </div>

        <div>
          <label htmlFor="adress">Endereço:</label>
          <input
            type="text"
            id="adress"
            name="adress"
            {...register("adress")}
          />
        </div>

        <div>
          <label htmlFor="city">Cidade:</label>
          <input type="text" id="city" name="city" {...register("city")} />
        </div>

        <div className="uf">
          <label className="state" htmlFor="state">
            UF:
          </label>
          <select
            id="state"
            name="state"
            placeholder="UF"
            {...register("state")}
          >
            <option></option>
            <option>AC</option>
            <option>AL</option>
            <option>AP</option>
            <option>AM</option>
            <option>BA</option>
            <option>CE</option>
            <option>DF</option>
            <option>ES</option>
            <option>GO</option>
            <option>MA</option>
            <option>MT</option>
            <option>MS</option>
            <option>MG</option>
            <option>PA</option>
            <option>PB</option>
            <option>PR</option>
            <option>PE</option>
            <option>PI</option>
            <option>RJ</option>
            <option>RN</option>
            <option>RS</option>
            <option>RO</option>
            <option>RR</option>
            <option>SC</option>
            <option>SP</option>
            <option>SE</option>
            <option>TO</option>
          </select>
        </div>
        <div>
          <label htmlFor="phone">Telefone:</label>
          <input type="number" id="phone" name="phone" {...register("phone")} />
        </div>

        <div>
          <label htmlFor="mail">E-mail:</label>
          <input type="text" id="mail" name="mail" {...register("mail")} />
        </div>
      </div>

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
                  />
                </td>
                <button className="remProduct" type="button" onClick={() => removeItem(index)}>-</button>
              </tr>
            ))}
            <button className="addProduct" type="button" onClick={addNewItem}>Adicionar Produto</button>
          </tbody>
        </table>
        <div className="selectOrderProductTotalValue">
          <label>Valor Total Pedido</label>
          <input type="number" value={orderTotal().toFixed(2)} />
        </div>
      </div>
      <div className="btns">
        <button className="btn-send" onClick={() => handleSubmit(onSubmits)()}>
          Enviar Pedido
        </button>
        <button className="btn-clean">Limpar</button>
      </div>
    </div>
  );
};

export { Form };
