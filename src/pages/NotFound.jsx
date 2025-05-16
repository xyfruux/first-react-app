import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>404</h1>
      <p>Not Found!</p>
      <Link to={"/"}>Go Home</Link>
    </>
  );
}

export default NotFound;
