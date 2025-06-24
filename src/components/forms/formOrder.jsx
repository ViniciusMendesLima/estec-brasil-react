const Form = () => {
  return (
    <>
      <form>
        <label htmlFor="name">Nome do Vendedor:</label>
        <select name="Saller-id" id="sallerSelect">
          <option>Selecione um Funcionário</option>
          <option value="Francisco Mendes">Francisco</option>
          <option value="Maria Pinheiro">Maria</option>
          <option value="Eva Mendes">Eva</option>
          <option value="Onofre Mendes">Onofre</option>
        </select>

        <div className="clientAdress">
          <div>
            <label htmlFor="client">Cliente:</label>
            <input type="text" id="client" name="client" />
          </div>
          <div>
            <label htmlFor="enterprise">CNPJ:</label>
            <input type="number" id="enterprise" name="enterprise" />
          </div>

          <div>
            <label htmlFor="adress">Endereço:</label>
            <input type="text" id="adress" name="adress" />
          </div>

          <div>
            <label htmlFor="city">Cidade:</label>
            <input type="text" id="city" name="city" />
          </div>

          <div class="uf">
            <label class="state" htmlFor="state">
              UF:
            </label>
            <select id="state" name="state" placeholder="UF">
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
            <input type="number" id="phone" name="phone" />
          </div>

          <div>
            <label htmlFor="mail">E-mail:</label>
            <input type="text" id="mail" name="mail" />
          </div>
        </div>

        <div class="OrderFormProducts">
          <h2>Produtos</h2>
          <table>
            <tr>
              <th>Selecione Produto</th>
              <th>Descrição</th>
              <th>Valor Unitario</th>
              <th>Qtd</th>
              <th>Valor Total Item</th>
            </tr>

            <tr class="selectOrderProduct">
              <td>
                <select name="Product-id" id="productSelect">
                  <option>Selecione um Produto</option>
                  <option>Cadeira</option>
                  <option>Mesa</option>
                  <option>Quadro</option>
                  <option>Estante</option>
                </select>
              </td>
              <td>
                <input class="sizeValidate" type="text" />
              </td>
              <td>
                <input type="number" />
              </td>
              <td>
                <input type="number" />
              </td>
              <td>
                <input type="number" />
              </td>
            </tr>

            <tr class="selectOrderProduct">
              <td>
                <select name="Product-id" id="productSelect">
                  <option>Selecione um Produto</option>
                  <option>Cadeira</option>
                  <option>Mesa</option>
                  <option>Quadro</option>
                  <option>Estante</option>
                </select>
              </td>
              <td>
                <input class="sizeValidate" type="text" />
              </td>
              <td>
                <input type="number" />
              </td>
              <td>
                <input type="number" />
              </td>
              <td>
                <input type="number" />
              </td>
            </tr>

            <tr class="selectOrderProduct">
              <td>
                <select name="Product-id" id="productSelect">
                  <option>Selecione um Produto</option>
                  <option>Cadeira</option>
                  <option>Mesa</option>
                  <option>Quadro</option>
                  <option>Estante</option>
                </select>
              </td>
              <td>
                <input class="sizeValidate" type="text" />
              </td>
              <td>
                <input type="number" />
              </td>
              <td>
                <input type="number" />
              </td>
              <td>
                <input type="number" />
              </td>
            </tr>

            <tr class="selectOrderProduct">
              <td>
                <select name="Product-id" id="productSelect">
                  <option>Selecione um Produto</option>
                  <option>Cadeira</option>
                  <option>Mesa</option>
                  <option>Quadro</option>
                  <option>Estante</option>
                </select>
              </td>
              <td>
                <input class="sizeValidate" type="text" />
              </td>
              <td>
                <input type="number" />
              </td>
              <td>
                <input type="number" />
              </td>
              <td>
                <input type="number" />
              </td>
            </tr>
          </table>
          <div class="selectOrderProductTotalValue">
            <label>Valor Total Pedido</label>
            <input type="number" />
          </div>
        </div>
         <div className="btns">
          <button className="btn-send">Enviar Pedido</button>
          <button className="btn-clean">Limpar</button>
        </div>
      </form>
    </>
  );
};

export { Form };
