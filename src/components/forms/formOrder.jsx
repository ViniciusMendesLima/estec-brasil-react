import { useForm } from "react-hook-form";
import SearchProducts from "../../utils/SearchProducts";
import { useState } from "react";

const Form = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const products = SearchProducts();

  const [selectedProductIndex, setSelectedProductIndex] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleProductChange = (e) => {
    const index = e.target.value;
    setSelectedProductIndex(index);

    const product = products[index];
    if (product) {
      setSelectedDescription(product.description);
      setSelectedPrice(product.price);
    } else {
      setSelectedDescription("");
      setSelectedPrice("");
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value)
  }

  console.log(quantity);
  

  

  const onSubmits = (data) => {
    console.log(data);
  }
  
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
            <input type="text" id="client" name="client" {...register("client", {required: true})}/>
            {errors?.name?.type == "required" && <p>{errors?.name}Nome e obrigatorio</p>}
          </div>

          <div>
            <label htmlFor="enterprise">CNPJ:</label>
            <input type="number" id="enterprise" name="enterprise" {...register("enterprise")}/>
          </div>

          <div>
            <label htmlFor="adress">Endereço:</label>
            <input type="text" id="adress" name="adress" {...register("adress")} />
          </div>

          <div>
            <label htmlFor="city">Cidade:</label>
            <input type="text" id="city" name="city" {...register("city")} />
          </div>

          <div className="uf">
            <label className="state" htmlFor="state">
              UF:
            </label>
            <select id="state" name="state" placeholder="UF" {...register("state")}>
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
              <tr className="selectOrderProduct">
                <td>
                  <select onChange={handleProductChange} value={selectedProductIndex}>
                    <option>Selecione um Produto</option>
                    {products.length === 0 ? (
                      <option>Não Há produtos cadastrados</option>
                    ):(
                      products.map((p, index)=> (
                        <option key={index} value={index}>{p.name}</option>
                      ))
                    )}
                  </select>
                </td>
                <td>
                  <input type="text" value={selectedDescription} readOnly />
                </td>
                <td>
                  <input type="number" value={selectedPrice} readOnly />
                </td>
                <td>
                  <input type="number" onChange={handleQuantityChange} value={quantity} />
                </td>
                <td>
                  <input type="number" value={quantity * selectedPrice} />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="selectOrderProductTotalValue">
            <label>Valor Total Pedido</label>
            <input type="number" />
          </div>
        </div>
        <div className="btns">
          <button className="btn-send" onClick={() => handleSubmit(onSubmits)()}>Enviar Pedido</button>
          <button className="btn-clean">Limpar</button>
        </div>
      </div>
  );
};

export { Form };
