import React from 'react';

export default class PostDetails extends React.Component {
  render() {
    return(
    <div>
      <h2>{this.props.title}</h2>
      <img src={this.props.url} alt={this.props.title} />
      <p>{this.props.description}</p>
      <p>{this.props.price}</p>
      <p>{this.props.email}</p>
      <p>{this.props.phone}</p>
    </div>
    )
  }
}