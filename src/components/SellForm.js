import React from "react";
import { addOnePost } from "../actions";
import { connect } from "react-redux";

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
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="url"
            placeholder="photo url"
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="description"
            placeholder="description"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="price"
            placeholder="price"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="e-mail"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="phone number"
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addOnePost }
)(SellForm);
