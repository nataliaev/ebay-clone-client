import React from "react";
import { Link } from "react-router-dom";

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Link to="sell/"><button>I want to sell</button></Link>
        <Link to="posts/"><button>I want to buy</button></Link>
      </div>
    );
  }
}
