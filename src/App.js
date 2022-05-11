import React, {useState} from 'react';
import  Counter  from './components/Counter';
import  ClassCounter  from './components/ClassCounter';
import  PostList  from './components/PostList';
import './styles/App.css'
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript', body: 'Description'},
    {id: 3, title: 'Javascript', body: 'Description'}
  ])

  const [title, setTitle] = useState('sdfsdf')
  const [body, setBody] = useState('sdfsdf')

  const addNewPost = function (e) {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    console.log(newPost)
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder='Название поста' value={title} onChange={e => setTitle(e.target.value)}/>
        <MyInput type="text" placeholder='Название поста' value={body} onChange={e => setBody(e.target.value)}/>

        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS"/>

      <Counter />
      <ClassCounter />

    </div>
  );
}

export default App;
