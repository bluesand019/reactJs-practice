import React from 'react'
import useFetch from './useFetch'

const Page2 = () => {
    const data = useFetch(`https://jsonplaceholder.typicode.com/posts/1`,{})
  return (
    <div>
      <b>user Id:</b> {data.userId} <br />
      <b>Title: {data.title}</b> <br />
      <b>Body:</b> {data.body}
    </div>
  )
}

export default Page2
