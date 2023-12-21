import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPosts from "./Newposts";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import Footer from "./Footer";
import About from "./About";
import PageNotFound from "./PageNotFound";
import { Routes, Route } from "react-router";
import DataProvider from "./context/DataContext";

function App() {
  return (
    <>
      <div className="App">
        <DataProvider>
          <Header title="BLOG" />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<NewPosts />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </DataProvider>
      </div>
    </>
  );
}

export default App;
