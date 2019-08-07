import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import PostListContainer from "./components/PostsListContainer";
import PostDetailsContainer from "./components/PostDetailsContainer";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={PostListContainer} />
      <Route path="/posts/:id" component={PostDetailsContainer} />
    </div>
  );
}

export default App;
