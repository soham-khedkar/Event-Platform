import React from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  console.log(id)
  return (
    <div>
      <h1>User Page</h1>
      <p>User ID: {id}</p>
    </div>
  );
}

export default Details;
