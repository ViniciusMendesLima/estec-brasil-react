import { Form } from "../components/forms/formOrder";
import "../components/styles/form.css"

const Orders = () => {
  return (
     <section className="section">
      <div className="content">
        <div className="namePage">
          <h1>pedido</h1>
        </div>
        <Form />
      </div>
    </section>
  )
}

export  {Orders}