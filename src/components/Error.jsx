const ErrorMessage = ({ error, fieldName }) => {
    if (!error) return null;

    if (error.type === "required") {
      return <p className="error">{fieldName} é obrigatório</p>;
    }

    if (error.message) {
    return <p className="error">{error.message}</p>;
  }

    return null;
  };

  export {ErrorMessage}