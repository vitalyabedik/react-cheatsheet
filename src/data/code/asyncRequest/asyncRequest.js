export const asyncRequest = {
  fetchBasic: `function App() {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then((response) => response.json())
          .then((json) => console.log(json));
      return <div className='App'></div>;
  }
  
  export default App;`,
  fetchProblem: `import { useState } from 'react';
 
  function App() {
      const [todo, setTodo] = useState(null);
      console.log('App rendered');
  
      fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then((response) => response.json())
          .then((json) => setTodo(json));
  
      return <div></div>;
  }
  
  export default App;`,
  fetchUseEffect: `import { useEffect, useState } from 'react';
  import './App.css';
  
  function App() {
      const [todo, setTodo] = useState(null);
      useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/todos/1')
              .then((response) => response.json())
              .then((json) => setTodo(json));
      }, []);
      console.log('App rendered');
      console.log(todo);
  
      return <div className='App'></div>;
  }
  
  export default App;`,
  fetchExample: `import { useState, useEffect } from 'react';
  
  const API_URL = 'https://jsonplaceholder.typicode.com/posts';
  
  const Posts = () => {
      const [posts, setPosts] = useState([]);
      const [error, setError] = useState('');
      const [isLoading, setIsLoading] = useState(true);
  
      useEffect(() => {
          fetch(API_URL)
              .then((response) => response.json())
              .then((data) => setPosts(data))
              .catch((error) => setError(error.message))
              .finally(() => setIsLoading(false));
      }, []);
  
      if (error) {
          return <h1>Error: {error}</h1>;
      }
  
      return (
          <>
              <h1>Posts</h1>
              <hr />
              {isLoading ? (
                  <h1>Loading...</h1>
              ) : (
                  posts.map((post) => {
                      return <Post key={post.id} {...post} />;
                  })
              )}
          </>
      );
  };
  
  const Post = (props) => {
    const { id, title, userId, body } = props;
    return (
        <div className='post'>
            <small>{id}</small>
            <h2>{title}</h2>
            <p>{body}</p>
            <h3>User ID: {userId}</h3>
        </div>
    );
};
  `,
  asyncExample: `import { useState, useEffect } from 'react';
  import Post from './Post';
  
  const API_URL = 'https://jsonplaceholder.typicode.com/posts';
  
  const Posts = () => {
      const [posts, setPosts] = useState([]);
      const [error, setError] = useState('');
      const [isLoading, setIsLoading] = useState(true);
  
      useEffect(() => {
          const fetchData = async () => {
              try {
                  const response = await fetch(API_URL);
                  const data = await response.json();
                  setPosts(data);
              } catch (error) {
                  setError(error.message);
              }
              setIsLoading(false);
          };
          fetchData();
      }, []);
  
      if (error) {
          return <h1>Error: {error}</h1>;
      }
  
      return (
          <>
              <h1>Posts</h1>
              <hr />
              {isLoading ? (
                  <h1>Loading...</h1>
              ) : (
                  posts.map((post) => {
                      return <Post key={post.id} {...post} />;
                  })
              )}
          </>
      );
  };
  
  export default Posts;`,
  axiosExample: `useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setPosts(response.data);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);`,
};
