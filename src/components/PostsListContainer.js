import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PostList from "./PostList";
import { addPosts, addOnePost } from "../actions";

class PostListContainer extends React.Component {
  componentDidMount() {
    this.props.addPosts();
  }

  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <Link to={"/"}>Main page</Link>
        {this.props.post ? (
          this.props.post.map(post => (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <PostList {...post} />
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

const MapStateToProps = state => ({
  post: state
});

export default connect(
  MapStateToProps,
  { addPosts, addOnePost }
)(PostListContainer);
