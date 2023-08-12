import { useState } from "react";
import { validations } from "../../utils/validations";
import "./form.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newUserData = {
      ...userData,
      [name]: value,
    };
    setUserData(newUserData);

    const validationErrors = validations(newUserData);
    setErrors(validationErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email: </label>
        <input
          type="text"
          name='email'
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          name='password'
          value={userData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
