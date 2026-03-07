import { useEffect, useState } from "react";
function MyComponent() {
  const [data, setData] = useState(null);
  async function getData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const result = await response.json();
    setData(result);
  }

  useEffect(() => {
    getData();
  }, []);

  return (

    <div className="container">
        <h2>Title: {data.title}</h2>
      <ul className="ul-data">
        <li>Data Id: {data.id}</li>
        <li>Completed: {data.completed ? "yes" : "no"}</li>
        <li>User Id: {data.userId}</li>
      </ul>
    </div>
      
  );
}

export default MyComponent;
