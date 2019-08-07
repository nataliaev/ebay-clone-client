import React from 'react';
import { connect } from "react-redux"
import PostDetails from "./PostDetails"

class PostDetailsContainer extends React.Component {
  render() {
    const post = this.props.post.find(post => post.id === this.props.match.params)

    return (
      <div>
        <PostDetails {...post} />
      </div>
    )
  }
}

const MapStateToProps = state => ({
  post: state.post
})

export default connect(MapStateToProps)(PostDetailsContainer)