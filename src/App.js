import React, { useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Javascript", body: "Description" },
    {id: 2, title: "Javascript 2", body: "Description" },
    {id: 3, title: "Javascript 3", body: "Description" },
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  function addNewPost(e) {
    e.preventDefault()
    const NewPost = {
      title,
      body
    }
    console.log(NewPost)
  }

  return (
    <div className="App">
      <form>
        <MyInput 
        type="text"  
        placeholder="Название поста" 
        value={title} 
        onChange={e => setTitle(e.target.value)}>
        </MyInput>

        <MyInput 
        value={body} 
        onChange={e => setBody(e.target.value)}
        type="text" 
        placeholder="Описание поста">
        </MyInput>

        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JavaScript"/>
    </div>
  );
}

export default App;
