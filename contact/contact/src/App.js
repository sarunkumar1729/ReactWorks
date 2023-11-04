import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Specify the external URL provided by "formsubmit.co"
    const actionUrl = "https://formsubmit.co/sarunkumarvv1993@gmail.com"; // Replace with your actual URL

    // Create a form element dynamically
    const form = document.createElement("form");
    form.method = "POST";
    form.action = actionUrl;

    // Add form fields as hidden input elements
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = formData[key];
        form.appendChild(input);
      }
    }
    const x = document.createElement("input");
    x.type='hidden';
    x.name='_captcha';
    x.value="false";
    form.appendChild(x);
    // Append the form to the document body and submit it
    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="App">
      <h1>Sample Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
