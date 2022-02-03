import React from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";
import useForm from "./useForm";
import validateForm from "../utils/validateForm";
import "../styles/Form.scss";

const ProfileForm = () => {
  const params = useParams();
  const userId = parseInt(params.userId);
  const { handleChange, values, handleSubmit, errors, toggleEdit, editable } =
    useForm(userId, validateForm);

  return (
    <>
      <div className="form-top-bar">
        <h1> Профиль пользователя</h1>
        <Button value="Редактировать" color={"blue"} onClick={toggleEdit} />
      </div>
      <form onSubmit={handleSubmit} className={editable ? "form-edit" : ""}>
        <div className="inputs-container">
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={errors.name ? "invalid" : ""}
              value={values.name}
              onChange={handleChange}
            ></input>
            {/* {errors.name && <p>{errors.name}</p>} */}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="username">
              User name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className={errors.username ? "form-input invalid" : "form-input"}
              value={values.username}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              E-mail
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className={errors.email ? "form-input invalid" : "form-input"}
              value={values.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="street">
              Street
            </label>
            <input
              type="text"
              name="street"
              id="street"
              className={errors.street ? "form-input invalid" : "form-input"}
              value={values.address.street}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="city">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className={errors.city ? "form-input invalid" : "form-input"}
              value={values.address.city}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="zipcode">
              Zip code
            </label>
            <input
              type="text"
              name="zipcode"
              id="zipcode"
              className={errors.zipcode ? "form-input invalid" : "form-input"}
              value={values.address.zipcode}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="phone">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className={errors.phone ? "form-input invalid" : "form-input"}
              value={values.phone}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="website">
              Website
            </label>
            <input
              type="text"
              name="website"
              id="website"
              className={errors.website ? "form-input invalid" : "form-input"}
              value={values.website}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="comment">
              Comment
            </label>
            <textarea
              type="text"
              name="comment"
              id="comment"
              className="form-input"
              value={values.comment}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <Button
          type="submit"
          value={"Отправить"}
          classColor={!editable ? "button-inactive" : "button-active"}
        />
      </form>
    </>
  );
};

export default ProfileForm;
