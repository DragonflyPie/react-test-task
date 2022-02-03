import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../utils/dataProvider";

// кастом хук, логика компонента формы профиля
const useForm = (userId, validateForm) => {
  let { users, setUsers } = useContext(DataContext);
  let user = users.find((user) => user.id === userId);
  const navigate = useNavigate();
  const [values, setValues] = useState(user);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editable, setEditable] = useState(false);

  // функция вызывается при изменении инпутов формы
  const handleChange = (e) => {
    // если включён режим редактирования, меняем значение объекта values в соответствии с названием input'а. Если инпут - это улица/город/индекс, меняем вложенный объект - адрес.
    if (editable) {
      if (
        e.target.name === "street" ||
        e.target.name === "city" ||
        e.target.name === "zipcode"
      ) {
        setValues({
          ...values,
          address: { ...values.address, [e.target.name]: e.target.value },
        });
      } else {
        setValues({ ...values, [e.target.name]: e.target.value });
      }
    }
    return;
  };

  // отправка формы
  const handleSubmit = (e) => {
    e.preventDefault();
    // если не стоит режим редактирования, нельзя отправить
    if (!editable) {
      return;
    }
    // сохраняем ошибки, полученные функцией валидации в state "errors", также включяем state отправки формы
    setErrors(validateForm(values));
    setIsSubmitting(true);
  };

  // если state "errors" пустой и стоит state отправки формы - сохраняем данные функцией setUsers (из контекста),
  // выводим в консоль JSON, отключаем режим отправки и перенаправляем к списку  пользователей
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      let updatedUsers = users.map((user) => {
        return user.id === userId ? values : user;
      });
      setUsers(updatedUsers);
      console.log(JSON.stringify(values));
      setIsSubmitting(false);
      navigate("/");
    }
  }, [errors]);

  // включение/выключение режима редактирования
  const toggleEdit = () => {
    setEditable(!editable);
  };

  return { handleChange, values, errors, handleSubmit, editable, toggleEdit };
};

export default useForm;
