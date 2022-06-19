import React, { useState } from "react";

// Completed
function Form() {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");
  /* State useState. */
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });
  //////////////////////////////////////////
  // function handleFirstNameChange(event) {
  //   // setFirstName(event.target.value);
  //   /* State setter functions */
  //   setFormData({
  //     ...formData,
  //     firstName: event.target.value,
  //   });
  // }
  // function handleLastNameChange(event) {
  //   // setLastName(event.target.value);
  //   /* State setter functions */
  //   setFormData({
  //     ...formData,
  //     lastName: event.target.value,
  //   })
  // }

  /* Refactored event handlers into one handler. */
  function handleChange(event) {
    // 
    const name = event.target.name;
    let value = event.target.value;
    // use "checked" property of checkboxes instead of value.
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }
    // Call state setter function.
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  /* Submit handler */
  function handleSubmit(event) {
    event.preventDefault();
    // Logging state values right now.
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="firstName"
        onChange={handleChange} 
        value={formData.firstName} 
      />
      <input 
        type="text" 
        name="lastName"
        onChange={handleChange} 
        value={formData.lastName} 
      />
      <input 
        type="checkbox"
        name="admin"
        onChange={handleChange}
        value={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
