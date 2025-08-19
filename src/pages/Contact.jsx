import { Form } from "../components/forms/formContact";
import "../components/styles/form.css"

const Contact = () => {
  return (
    <section className="section">
      <div className="content form-page">
        <div className="namePage">
          <h1>contato</h1>
        </div>
        <Form />
      </div>
    </section>
  );
};

export { Contact };
