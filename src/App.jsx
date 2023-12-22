import Home from "./Home";
import NewPosts from "./Newposts";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import About from "./About";
import PageNotFound from "./PageNotFound";
import { Routes, Route } from "react-router";
import DataProvider from "./context/DataContext";
import Layout from "./Layout";

function App() {
  return (
    <>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="post" element={<NewPosts />}>
              <Route path=":id" element={<PostPage />} />
              <Route path="edit/:id" element={<EditPost />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
