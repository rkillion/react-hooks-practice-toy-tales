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

  function increaseLikes(toy) {
    toy.likes++;
    fetch(`${toyAPI}/${toy.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({likes: toy.likes})
    }).then(r=>r.json()).then(data=> {
      let newToyList = [...toys];
      setToys(newToyList);
    })
  }

  function deleteToy(toy) {
    fetch(`${toyAPI}/${toy.id}`,{
      method: 'DELETE'
    }).then(r=>r.json()).then(()=>{
      let thisToyIndex = toys.indexOf(toys.find(eachToy=>eachToy.id===toy.id));
      let newToyList = [...toys.slice(0,thisToyIndex),...toys.slice(thisToyIndex+1)];
      setToys(newToyList);
    })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} toyAPI={toyAPI}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      {toys ? <ToyContainer 
      toys={toys} 
      deleteToy={deleteToy}
      increaseLikes={increaseLikes}
      /> : null}
    </>
  );
}

export default App;
