import axios from "axios";
import { useEffect, useState } from "react";
import { ErrorMessage } from "../../Error";

const Location = ({ watch, errors, register }) => {
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const state = "Estado"
  const ufWatch = watch(state);

    const fieldNames= {
    state: "Estado",
    city: "Cidade",
  };

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
      .then((response) => {
        setUfs(response.data);
      });
  }, []);

  useEffect(() => {
    if (ufWatch) {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufWatch}/municipios`
        )
        .then((response) => {
          setCities(response.data);
        });
    } else {
      setCities([]);
    }
  }, [ufWatch]);

  return (
    <>
      <div className="uf">
        <label className="state" htmlFor="state">
          UF:
        </label>
        <select
          id="state"
          name="state"
          placeholder="UF"
          {...register(fieldNames.state, { required: true })}
        >
          <option value="">Selecione a UF</option>
          {ufs.map((uf) => (
            <option key={uf.id} value={uf.sigla}>
              {uf.nome}
            </option>
          ))}
        </select>
        <ErrorMessage error={errors[fieldNames.state]} fieldName={fieldNames.state} />
      </div>
      <div>
        <label htmlFor="city">Cidade:</label>
        <select name="city" id="city" {...register(fieldNames.city, { required: true })}>
          <option value="">Selecione a cidade</option>
          {cities.map((city) => (
            <option key={city.id} value={city.nome}>
              {city.nome}
            </option>
          ))}
        </select>
        <ErrorMessage error={errors[fieldNames.city]} fieldName={fieldNames.city} />
      </div>
    </>
  );
};

export { Location };
