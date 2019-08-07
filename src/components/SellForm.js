import React from "react";
import { addOnePost } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import "./SellForm.css";

class SellForm extends React.Component {
  state = {
    title: "",
    url: "",
    description: "",
    price: null,
    email: "",
    phone: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addOnePost(this.state);
  };

  render() {
    return (
      <div>
        <div className="form-title">Add your advertisment</div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="input-form"
            type="text"
            name="title"
            placeholder="title"
            onChange={this.handleChange}
          />
          <input
            className="input-form"
            type="text"
            name="url"
            placeholder="photo url"
            onChange={this.handleChange}
          />

          <input
            className="input-form"
            type="text"
            name="description"
            placeholder="description"
            onChange={this.handleChange}
          />
          <input
            className="input-form"
            type="text"
            name="price"
            placeholder="price"
            onChange={this.handleChange}
          />
          <input
            className="input-form"
            type="text"
            name="email"
            placeholder="e-mail"
            onChange={this.handleChange}
          />
          <input
            className="input-form"
            type="text"
            name="phone"
            placeholder="phone number"
            onChange={this.handleChange}
          />
          <input className="input-button" type="submit" value="Submit" />
        </form>
        <Link to='/'><button className="input-button">Back to the main page</button></Link>
      </div>
    );
  }
}

export default connect(
  null,
  { addOnePost }
)(SellForm);
