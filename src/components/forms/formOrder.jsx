import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import "./styles/order.css";
import { ErrorMessage } from "../Error";
import { Location } from "./hooks/citiesMeta";
import { ProductsItens } from "./hooks/productsItens";
import { Sellers } from "../../data/Sellers";
import { validateCNPJ } from "./utils/ValidadeCNPJ";
import { formatCNPJ } from "./utils/formatCNPJ";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const fieldNames= {
    enterprise: "CNPJ",
    client: "Nome do Cliente",
    saller: "Vendedor",
    phone: "Telefone",
    mail: "E-mail",
    adress:"Endereço"
  };

  const [items, setItems] = useState([]);
  const enterprise = "CNPJ"
  
  const cnpjValue = watch(enterprise);
  useEffect(()=> {
    const masked = formatCNPJ(cnpjValue ||"");
    if (masked !== cnpjValue) {
      setValue(enterprise, masked)
    }
  },[cnpjValue, setValue])


  const cleanAll = () => {
    reset();
    setItems([
      {
        productIndex: "",
        description: "",
        price: "",
        quantity: 1,
        total: 0,
      },
    ]);
  };

  const onSubmits = (data) => {
    const completeData = {
      ...data,
      items: items.filter((item) => item.productIndex !== ""),
    };
    if (completeData.items.length <= 0) {
      alert("Insira um produto ao pedido");
    } else {
      console.log(completeData);
      alert("Pedido enviada");
      cleanAll();
    }
  };

  return (
    <div className="form">
      <label htmlFor="sallerSelect">Nome do Vendedor:</label>
      <select
        name="sallerSelect"
        id="sallerSelect"
        {...register(fieldNames.saller, { required: true })}
      >
        <option value="">Selecione um Funcionário</option>
        {Sellers.map((s, i) => (
          <option key={i} value={JSON.stringify({ name: s.name, cpf: s.cpf })}>
            {s.name}
          </option>
        ))}
      </select>
      <ErrorMessage error={errors[fieldNames.saller]} fieldName={fieldNames.saller} />
      <div className="clientAdress">
        <div>
          <label htmlFor="client">Cliente:</label>
          <input
            type="text"
            id="client"
            name="client"
            {...register(fieldNames.client, { required: true })}
          />
          <ErrorMessage error={errors[fieldNames.client]} fieldName={fieldNames.client} />
        </div>

        <div>
          <label htmlFor="enterprise">CNPJ:</label>
          <input
            type="text"
            id="enterprise"
            name="enterprise"
            {...register(fieldNames.enterprise, {
              required: true,
              validate: (value) => validateCNPJ(value) || "CNPJ inválido",
            })}
          />
          <ErrorMessage error={errors[fieldNames.enterprise]} fieldName={fieldNames.enterprise} />
        </div>
        <div>
          <label htmlFor="adress">Endereço:</label>
          <input
            type="text"
            id="adress"
            name="adress"
            {...register(fieldNames.adress, { required: true })}
          />
          <ErrorMessage error={errors[fieldNames.adress]} fieldName={fieldNames.adress} />
        </div>

        <Location watch={watch} errors={errors} register={register} />

        <div>
          <label htmlFor="phone">Telefone:</label>
          <input
            type="number"
            id="phone"
            name="phone"
            {...register(fieldNames.phone, { required: true })}
          />
          <ErrorMessage error={errors[fieldNames.phone]} fieldName={fieldNames.phone} />
        </div>

        <div>
          <label htmlFor="mail">E-mail:</label>
          <input type="text" id="mail" name="mail" {...register(fieldNames.mail)} />
          <ErrorMessage error={errors[fieldNames.mail]} fieldName={fieldNames.mail} />
        </div>
      </div>

      <ProductsItens items={items} setItems={setItems} register={register} setValue={setValue} />

      <div className="btns">
        <button className="btn-send" onClick={() => handleSubmit(onSubmits)()}>
          Enviar Pedido
        </button>
        <button className="btn-clean" onClick={cleanAll}>
          Limpar
        </button>
      </div>
    </div>
  );
};

export { Form };
