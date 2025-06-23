import { Form } from "../components/forms/form";
import "./css/form.css"

const Contact = () => {
  return (
    <section className="section">
      <div className="content">
        <div className="namePage">
          <h1>contato</h1>
        </div>
        <Form />
      </div>
    </section>
  );
};

export { Contact };
