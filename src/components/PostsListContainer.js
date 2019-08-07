import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PostList from "./PostList";
import { addPosts, addOnePost } from "../actions";

class PostListContainer extends React.Component {
  async componentDidMount() {
    this.props.addPosts();
  }

  render() {
    return (
      <div>
        {this.props.post.map(post => (
          <Link to={`/posts/${post.id}`}>
            <PostList key={post.id} {...post} />
          </Link>
        ))}
      </div>
    );
  }
}

const MapStateToProps = state => ({
  post: state.post
});

export default connect(
  MapStateToProps,
  { addPosts, addOnePost }
)(PostListContainer);
