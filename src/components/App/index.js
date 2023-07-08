import React, { useState, createContext } from "react";
import Post from "../Post";
import Header from "../Header";
import { ThemeProvider } from "../../context/ThemeContext";

import styles from "./App.scss"


function App() {


  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20, read: true, removed: true },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#03', likes: 10, read: false, removed: false },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50, read: false, removed: false },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: 50
      }
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.map(
      post => (
        post.id === postId ? { ...post, removed: true }
        : post
      )
    ));
  }

  return (
    <ThemeProvider>
      <Header>
        <h2 className={styles.title}>Posts da semana</h2>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>
      <hr />
      {posts.map(post => (
        <Post
          key={post.title}
          likes={post.likes}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>


  );
}

export default App;
