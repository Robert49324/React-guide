import React, { useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "аа", body: "Description" },
    {id: 2, title: "гг 2", body: "Description" },
    {id: 3, title: "вв 3", body: "Description" },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const [selectedSort, setSelectedSort] = useState('')

  const sortPosts = (sort) => {
    console.log(sort);
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  };

  return (
    <div className="App">
    <PostForm create={createPost}/>
    <hr style={{margin: "15px 0"}}/>
    <div>
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка"
        options={[
          {value: "title", name: "По названию"},
          {value: "body", name: "По описанию"}
        ]}
      />
    </div>
    {posts.length
      ? <PostList remove = {removePost} posts={posts} title="Посты про JavaScript"/>
      : <h1 style={{textAlign:"center"}}>Посты не были найдены!</h1>
    }
    </div>
  );
}

export default App;
