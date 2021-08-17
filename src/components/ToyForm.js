import React, { useState } from "react";

function ToyForm({addToy,toyAPI}) {

  const [submitObject,setSubmitObject] = useState({
    name: "",
    image: "",
    likes: 0
  })

  function handleFormChange(e) {
    let newSubmitObj = JSON.parse(JSON.stringify(submitObject))
    newSubmitObj[e.target.name] = e.target.value;
    setSubmitObject(newSubmitObj);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(toyAPI,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitObject)
    }).then(r=>r.json()).then(addToy);
    e.target.reset();
    setSubmitObject({
      name: "",
      image: "",
      likes: 0
    });
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange = {handleFormChange}
          value={submitObject.text}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange = {handleFormChange}
          value={submitObject.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
