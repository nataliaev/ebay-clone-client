import React from 'react';
//import { connect } from "react-redux"
import PostDetails from "./PostDetails"
import superagent from "superagent"

export default class PostDetailsContainer extends React.Component {
  async componentDidMount() {
    const result = await superagent.get('')
    return result
  }

  render() {
    return (
      <div>
        <PostDetails title={} url={} description={} price={} email={} phone={} />
      </div>
    )
  }
}