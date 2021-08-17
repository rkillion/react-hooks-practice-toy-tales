import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const toyAPI = "http://localhost:3001/toys";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys,setToys] = useState(null);

  useEffect(() => {
    fetch(toyAPI).then(r=>r.json()).then(setToys);
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(toy) {
    let newToyList = [...toys,toy];
    setToys(newToyList);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} toyAPI={toyAPI}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      {toys ? <ToyContainer toys={toys}/> : null}
    </>
  );
}

export default App;
