import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, deleteToy, increaseLikes}) {
  return (
    <div id="toy-collection">
      {toys.map(toy=><ToyCard
        key={toy.id} 
        toy={toy}
        deleteToy={deleteToy}
        increaseLikes = {increaseLikes}
      />)}
    </div>
  );
}

export default ToyContainer;
