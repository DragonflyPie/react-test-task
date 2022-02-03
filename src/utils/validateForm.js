// валидация формы. реализована только проверка на пустое поле (согласно моему пониманию ТЗ)
export default function validateForm(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name required";
  }

  if (!values.username.trim()) {
    errors.username = "username required";
  }

  if (!values.email.trim()) {
    errors.email = "email required";
  }

  if (!values.address.street.trim()) {
    errors.street = "street required";
  }

  if (!values.address.city.trim()) {
    errors.city = "city required";
  }

  if (!values.address.zipcode.trim()) {
    errors.zipcode = "zipcode required";
  }

  if (!values.phone.trim()) {
    errors.phone = "phone required";
  }

  if (!values.website.trim()) {
    errors.website = "website required";
  }

  return errors;
}
