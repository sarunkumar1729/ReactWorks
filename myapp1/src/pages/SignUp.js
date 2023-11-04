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

function SignUp(){
  return(
    <h1>signup</h1>
  )
}

export default SignUp;