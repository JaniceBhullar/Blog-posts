import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <main className="PageNotFound">
      <p>Sorry this page does not exist</p>

      <Link to="/">Go back to Homepage</Link>
    </main>
  );
}
