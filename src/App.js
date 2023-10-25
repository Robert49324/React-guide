import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "аа", body: "бб" },
    { id: 2, title: "гг 2", body: "вв" },
    { id: 3, title: "вв 3", body: "гг" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  function getSortedPosts() {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }

  const sortedPosts = getSortedPosts();

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />

      <MyInput 
      placeholder="Найти"
      onChange={e => setSearchQuery(e.target.value)}
      value={searchQuery}
      />

      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
      {posts.length ? (
        <PostList
          remove={removePost}
          posts={sortedPosts}
          title="Посты про JavaScript"
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не были найдены!</h1>
      )}
    </div>
  );
}

export default App;
