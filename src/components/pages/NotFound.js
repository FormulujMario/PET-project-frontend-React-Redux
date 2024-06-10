import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main>
      <h2>Oops! You seem to be lost</h2>
      <p>Here are some helpful links:</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </main>
  );
}
