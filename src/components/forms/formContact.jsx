const Form = () => {
  return (
    <>
      <form>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="enterprise">Empresa:</label>
        <input type="text" id="enterprise" name="interprise" />

        <label htmlFor="city">Cidade:</label>
        <input type="text" id="city" name="city" />

        <label htmlFor="phone">Telefone:</label>
        <input type="number" id="phone" name="phone" />

        <label htmlFor="mail">E-mail:</label>
        <input type="text" id="mail" name="mail" />

        <label htmlFor="department-id">Departamento</label>
        <select name="contact-department" id="department-id">
          <option className="firstSelect">Selecione um Departamento</option>
          <option value="contact">Departamento para Contato</option>
        </select>
        <div className="howFind">
          <h4>Como Conheceu a ESTEC ?</h4>
          <div className="radioGrop">
            <div>
              <input
                type="radio"
                name="howIFind"
                id="radioIndication"
                required
              />
              <label htmlFor="radioIndication">Indicação</label>
            </div>
            <div>
              <input type="radio" name="howIFind" id="e-mail" required />
              <label htmlFor="e-mail">E-mail</label>
            </div>
            <div>
              <input
                type="radio"
                name="howIFind"
                id="radioSearchEngines"
                required
              />
              <label htmlFor="radioSearchEngines">Buscadores</label>
            </div>
          </div>
        </div>

        <label htmlFor="contactMessage">Mensagem:</label>
        <textarea
          name="contactMessage"
          id="contactMessage"
          rows={6}
          cols={50}
          placeholder="Digite sue texto aqui..."
        ></textarea>
        <div className="btns">
          <button className="btn-send">Enviar</button>
          <button className="btn-clean">Limpar</button>
        </div>
      </form>
    </>
  );
};

export { Form };
