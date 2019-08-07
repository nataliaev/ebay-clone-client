import React from "react";

export default function PostDetails(props) {
  if (props.title) {
    return (
      <div>
        <h2>{props.title}</h2>
        <img src={props.url} alt={props.title} />
        <p>{props.description}</p>
        <p>{props.price}</p>
        <p>{props.email}</p>
        <p>{props.phone}</p>
      </div>
    );
  } else {
    return <p>Loading...</p>
  }
}
