import { useForm } from "react-hook-form";
import { useState } from "react";
import "./styles/order.css";
import { ErrorMessage } from "../Error";
import { Location } from "./hooks/citiesMeta";
import { ProductsItens } from "./hooks/productsItens";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [items, setItems] = useState([]);

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
            value="nome"
            {...register("client", { required: true })}
          />
          <ErrorMessage error={errors.client} fieldName="Nome do Cliente" />
        </div>

        <div>
          <label htmlFor="enterprise">CNPJ:</label>
          <input
            type="number"
            id="enterprise"
            name="enterprise"
            value={"11111111111111111"}
            {...register("enterprise", { required: true })}
          />
          <ErrorMessage error={errors.enterprise} fieldName="CNPJ" />
        </div>

        <div>
          <label htmlFor="adress">Endereço:</label>
          <input
            type="text"
            id="adress"
            name="adress"
            value="endereço"
            {...register("adress", { required: true })}
          />
          <ErrorMessage error={errors.adress} fieldName="Endereço" />
        </div>

        <Location watch={watch} errors={errors} register={register} />

        <div>
          <label htmlFor="phone">Telefone:</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value="31999647662"
            {...register("phone", { required: true })}
          />
          <ErrorMessage error={errors.phone} fieldName="Telefone" />
        </div>

        <div>
          <label htmlFor="mail">E-mail:</label>
          <input type="text" id="mail" name="mail" {...register("mail")} />
          <ErrorMessage error={errors.mail} fieldName="E-mail" />
        </div>
      </div>

      <ProductsItens items={items} setItems={setItems} register={register} />

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
