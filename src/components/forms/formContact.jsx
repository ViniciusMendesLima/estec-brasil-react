import { useForm } from "react-hook-form";
import "./styles/contact.css";
import { ErrorMessage } from "../Error";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

    const onSubmits = (data) => {
    console.log(data);
  };

    function clean(){
    reset();
   }

  return (
    <div className="form">
      <label htmlFor="name">Nome:</label>
      <input type="text" id="name" name="name"{...register("name", { required: true })}
          />
          <ErrorMessage error={errors.name} fieldName="Nome do Cliente" />
      

      <label htmlFor="enterprise">Empresa:</label>
      <input type="text" id="enterprise" name="interprise" {...register("enterprise", { required: true })}
          />
          <ErrorMessage error={errors.enterprise} fieldName="Empresa" />

      <label htmlFor="city">Cidade:</label>
      <input type="text" id="city" name="city" {...register("city", { required: true })}
          />
          <ErrorMessage error={errors.city} fieldName="Cidade" />

      <label htmlFor="phone">Telefone:</label>
      <input type="number" id="phone" name="phone" {...register("phone", { required: true })}
          />
          <ErrorMessage error={errors.phone} fieldName="Telefone" />

      <label htmlFor="mail">E-mail:</label>
      <input type="text" id="mail" name="mail" />

      <label htmlFor="department-id">Departamento</label>
      <select name="contact-department" id="department-id" {...register("contactDepartment", {required: true})}>
        <option value="" className="firstSelect">Selecione um Departamento</option>
        <option value="contact">Departamento para Contato</option>
      </select>
      <ErrorMessage error={errors.contactDepartment} fieldName="Departamento"/>
      <div className="howFind">
        <h4>Como Conheceu a ESTEC ?</h4>
        <div className="radioGrop">
          <div>
            <input type="radio" value="Indicação" id="radioIndication" {...register("howIFind", { required: true })} />
            <label htmlFor="radioIndication">Indicação</label>
          </div>
          <div>
            <input type="radio" value="E-mail" id="e-mail" {...register("howIFind", { required: true })} />
            <label htmlFor="e-mail">E-mail</label>
          </div>
          <div>
            <input
              type="radio"
              value="Buscadores"
              id="radioSearchEngines"
              required
            />
            <label htmlFor="radioSearchEngines">Buscadores</label>
          </div>
        </div>
        <ErrorMessage error={errors.howIFind} fieldName="Como conheceu a empresa" />
      </div>

      <label htmlFor="contactMessage">Mensagem:</label>
      <textarea
        name="contactMessage"
        id="contactMessage"
        rows={6}
        cols={50}
        placeholder="Digite sue texto aqui..."
        {...register("contactMessage", { required: true })}
      ></textarea>
      <ErrorMessage error={errors.contactMessage} fieldName="Mensagem" />
      <div className="btns">
        <button className="btn-send" onClick={() => handleSubmit(onSubmits)()} >Enviar</button>
        <button className="btn-clean" onClick={clean}>Limpar</button>
      </div>
    </div>
  );
};

export { Form };
