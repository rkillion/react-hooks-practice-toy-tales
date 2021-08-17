import React from "react";

function ToyCard({ toy, deleteToy, increaseLikes }) {
  return (
    <div className="card">
      <h2>{toy.name /* Toy's Name */}</h2>
      <img
        src={toy.image /* Toy's Image */}
        alt={toy.name /* Toy's Name */}
        className="toy-avatar"
      />
      <p>{toy.likes /* Toy's Likes */} Likes </p>
      <button className="like-btn" onClick={()=>increaseLikes(toy)}>Like {"<3"}</button>
      <button className="del-btn" onClick={()=>{deleteToy(toy)}}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
