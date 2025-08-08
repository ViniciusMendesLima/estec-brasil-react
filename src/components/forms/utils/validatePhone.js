function validatePhone(phone) {
  const onlyNubers = phone.replace(/\D/g, "");

  return onlyNubers.length >= 10 && onlyNubers.length <= 11;
}

export { validatePhone };
