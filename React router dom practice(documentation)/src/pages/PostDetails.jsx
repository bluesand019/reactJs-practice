import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'

const PostDetails = () => {
    const {postID} = useParams();
    const [detail, setDetail] = useState(null);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
        .then(res => res.json())
        .then(data => setDetail(data))
    },[postID]);
    
  return (
    <div>
      <h2>Post details of Post {postID}</h2>
      <p><b>Post title -</b> {detail?.title}</p>
      <p><b>Post Description -</b> {detail?.body}</p>
    </div>
  )
}

export default PostDetails
