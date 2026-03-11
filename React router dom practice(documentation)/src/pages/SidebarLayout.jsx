import { Outlet } from "react-router";
import { Link } from "react-router";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <nav>
          <ul>
            <li>
              <Link to={`/`} href={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/about`}>About</Link>
            </li>
            <li>
              <Link to={`/contact`}>Contact</Link>
            </li>
            <li>
              <Link to={`/notes`}>Notes</Link>
            </li>
            <li>
              <Link to={`/posts`}>All posts</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet></Outlet>
      </div>
    </>
  );
}
