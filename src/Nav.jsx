import { Link } from "react-router-dom";

export default function Nav({ search, setSearch }) {
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="serch">Search Posts</label>
        <input
          id="serch"
          type="text"
          placeholder="Search posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/post"> New Post </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
        </ul>
      </form>
    </nav>
  );
}
