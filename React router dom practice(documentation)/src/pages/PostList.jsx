import React, { useEffect } from 'react'
import { useState, useEffectEvent } from 'react'
import { Link } from 'react-router';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {
            posts.map((element) => {
               return <li key={element.id}>
                <Link to={`/posts/${element.id}`}>&#8594;{element.title}</Link>
                </li>
            })
        }
      </ul>
    </div>
  )
}

export default PostList
