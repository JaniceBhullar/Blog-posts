import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPosts from "./Newposts";
import PostPage from "./PostPage";
import Footer from "./Footer";
import About from "./About";
import PageNotFound from "./PageNotFound";
import { Routes, Route, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import api from "./api/posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const newSearch = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(newSearch.reverse());
  }, [posts, search]);

  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);
    navigate("/");
  };
  // this is create of CRUD
  const handleSubmit = async (e) => {
    e.preventDefault;
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post("/posts", newPost);
      setPosts([...posts, response.data]);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <>
      <div className="App">
        <Header title="BLOG" />
        <Nav search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home posts={searchResults} />} />
          <Route
            path="/post"
            element={
              <NewPosts
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postbody={postBody}
                setPostBody={setPostBody}
              />
            }
          />
          <Route
            path="/post/:id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
