import React from 'react'
import useFetch from './useFetch'

const Page1 = () => {
    const data = useFetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`,[])
  return (
    <div>
      <ul>
        {data.map(element => {
           return <li key={element.id}>{element.title}</li>
        })}
      </ul>
    </div>
  )
}

export default Page1
