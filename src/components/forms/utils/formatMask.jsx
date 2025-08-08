const formatCNPJ = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .slice(0, 18);
};

const formatPhone = (value) => {
  return value
    .replace(/\D/g, "") // Remove tudo que não for número
    .replace(/^(\d{2})(\d)/, "($1) $2") // Adiciona os parênteses no DDD
    .replace(/(\d{4,5})(\d{4})$/, "$1-$2") // Coloca o hífen no final
    .slice(0, 15); // Limita ao tamanho máximo: (99) 99999-9999
};

export { formatCNPJ,formatPhone };