// import "./style.css";
// import { useState, useEffect } from "react";

// function App() {
//   const [inputFields, setInputFields] = useState({
//     username: "",
//     password: "",
//     age: null
//   });
//   const [errors, setErrors] = useState({});
//   const [submitting, setSubmitting] = useState(false);

//   const validateValues = (inputValues) => {
//     let errors = {};
//     if (inputValues.username.length < 15) {
//       errors.username = "username is too short";
//     }
//     if (inputValues.password.length < 5) {
//       errors.password = "Password is too short";
//     }
//     if (!inputValues.age || inputValues.age < 18) {
//       errors.age = "Minimum age is 18";
//     }
//     return errors;
//   };
//   const handleChange = (e) => {
//     setInputFields({ ...inputFields, [e.target.name]: e.target.value });
//   };



//   const finishSubmit = () => {
//     console.log(inputFields);
//   };

//   useEffect(() => {
//     if (Object.keys(errors).length === 0 && submitting) {
//       finishSubmit();
//     }
//   }, [errors]);

//   return (
//     <div className="App">
//       {Object.keys(errors).length === 0 && submitting ? (
//         <span className="success">Successfully submitted ✓</span>
//       ) : null}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label for="username">username</label>
//           <input
//             type="username"
//             name="username"
//             value={inputFields.username}
//             onChange={handleChange}
//             style={{ border: errors.username ? "1px solid red" : null }}
//           ></input>
//           {errors.username ? (
//             <p className="error">username should be at least 15 characters long</p>
//           ) : null}
//           <label for="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={inputFields.password}
//             onChange={handleChange}
//             style={{ border: errors.password ? "1px solid red" : null }}
//           ></input>
//           {errors.password ? (
//             <p className="error">
//               Password should be at least 5 characters long
//             </p>
//           ) : null}
//           <label for="age">Age</label>
//           <input
//             type="number"
//             name="age"
//             value={inputFields.age}
//             onChange={handleChange}
//             style={{ border: errors.age ? "1px solid red" : null }}
//           ></input>
//           {errors.age ? <p className="error">Minimum age is 18</p> : null}
//         </div>
//         <button type="submit">SIGNUP</button>
//       </form>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const validateForm = () => {
    let isValid = true;

    if (formData.username.trim() === '') {
      errors.username = 'Username is required';
      isValid = false;
    } else {
      errors.username = '';
    }

    if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    } else {
      errors.password = '';
    }

    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    } else {
      errors.confirmPassword = '';
    }

    setErrors({ ...errors });

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, you can submit the data or perform other actions here
      alert('Form submitted successfully');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignUp;
