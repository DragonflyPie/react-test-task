import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../utils/dataProvider";

const useForm = (userId, validateForm) => {
  let { users, setUsers } = useContext(DataContext);
  let user = users.find((user) => user.id === userId);
  const navigate = useNavigate();

  const [values, setValues] = useState(user);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editable, setEditable] = useState(false);

  const handleChange = (e) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editable) {
      return;
    }

    setErrors(validateForm(values));
    setIsSubmitting(true);
  };

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

  const toggleEdit = () => {
    setEditable(!editable);
  };

  return { handleChange, values, errors, handleSubmit, editable, toggleEdit };
};

export default useForm;
