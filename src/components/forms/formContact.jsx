import { useForm } from "react-hook-form";
import "./styles/contact.css";
import { ErrorMessage } from "../Error";
import { PropsContactFields } from "./utils/Props";
import { validatePhone } from "./utils/validatePhone";
import { formatPhone } from "./utils/formatMask";
import { useEffect } from "react";
const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm();
  
  const onSubmits = (data) => {
    console.log(data);
    alert("Mensagem enviada")
    clean()
  };
  const fieldNames = PropsContactFields;

  const maskMap = {
    Telefone: formatPhone,
  };

  const applyMask = (fieldName, value, setValue) => {
    if (!value) return; // <-- evita validar e aplicar máscara se vazio
    const masked = maskMap[fieldName](value || "");
    if (masked !== value) {
      setValue(fieldName, masked, { shouldValidate: true, shouldDirty: true });
    }
  };

  const cnpjValue = watch(fieldNames.enterprise);
  const phoneValue = watch(fieldNames.phone);

  useEffect(() => {
    applyMask(fieldNames.phone, phoneValue, setValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cnpjValue, phoneValue, setValue]);

  function clean() {
    reset();
  }

  return (
    <div className="form">
      <label htmlFor="name">Nome:</label>
      <input
        type="text"
        id="name"
        name="name"
        {...register(fieldNames.client, { required: true })}
      />
      <ErrorMessage error={errors[fieldNames.client]} fieldName={fieldNames.client} />

      <label htmlFor="enterprise">Empresa:</label>
      <input
        type="text"
        id="enterprise"
        name="interprise"
        {...register(fieldNames.enterprise, { required: true })}
      />
      <ErrorMessage error={errors[fieldNames.enterprise]} fieldName={fieldNames.enterprise} />

      <label htmlFor="city">Cidade:</label>
      <input
        type="text"
        id="city"
        name="city"
        {...register(fieldNames.city, { required: true })}
      />
      <ErrorMessage error={errors[fieldNames.city]} fieldName={fieldNames.city}/>

      <label htmlFor="phone">Telefone:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        {...register(fieldNames.phone, {
          required: true,
          validate: (value) => validatePhone(value) || "Telefone inválido",
        })}
      />
      <ErrorMessage
        error={errors[fieldNames.phone]}
        fieldName={fieldNames.phone}
      />

      <label htmlFor="mail">E-mail:</label>
      <input
        type="text"
        id="mail"
        name="mail"
        {...register("mail", {
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "E-mail inválido",
          },
        })}
      />
      <ErrorMessage error={errors.mail} fieldName={fieldNames.mail} />

      <label htmlFor="department-id">Departamento</label>
      <select
        name="contact-department"
        id="department-id"
        {...register(fieldNames.contactDepartment, { required: true })}
      >
        <option value="" className="firstSelect">
          Selecione um Departamento
        </option>
        <option value="contact1">Departamento para Contato 1</option>
        <option value="contact2">Departamento para Contato 2</option>
        <option value="contact3">Departamento para Contato 3</option>
      </select>
      <ErrorMessage
        error={errors[fieldNames.contactDepartment]}
        fieldName={fieldNames.contactDepartment}
      />
      <div className="howFind">
        <h4>Como Conheceu a ESTEC ?</h4>
        <div className="radioGrop">
          <div>
            <input
              type="radio"
              value="Indicação"
              id="radioIndication"
              {...register(fieldNames.howIFind, { required: true })}
            />
            <label htmlFor="radioIndication">Indicação</label>
          </div>
          <div>
            <input
              type="radio"
              value="E-mail"
              id="e-mail"
              {...register(fieldNames.howIFind, { required: true })}
            />
            <label htmlFor="e-mail">E-mail</label>
          </div>
          <div>
            <input
              type="radio"
              value="Buscadores"
              id="radioSearchEngines"
              {...register(fieldNames.howIFind, { required: true })}
            />
            <label htmlFor="radioSearchEngines">Buscadores</label>
          </div>
        </div>
        <ErrorMessage
          error={errors[fieldNames.howIFind]}
          fieldName={fieldNames.howIFind}
        />
      </div>

      <label htmlFor="contactMessage">Mensagem:</label>
      <textarea
        name="contactMessage"
        id="contactMessage"
        rows={6}
        cols={50}
        placeholder="Digite sue texto aqui..."
        {...register(fieldNames.contactMessage, { required: true })}
      ></textarea>
      <ErrorMessage
        error={errors[fieldNames.contactMessage]}
        fieldName={fieldNames.contactMessage}
      />
      <div className="btns">
        <button className="btn-send" onClick={() => handleSubmit(onSubmits)()}>
          Enviar
        </button>
        <button className="btn-clean" onClick={clean}>
          Limpar
        </button>
      </div>
    </div>
  );
};

export { Form };
