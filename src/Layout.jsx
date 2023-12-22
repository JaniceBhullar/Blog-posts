import { Outlet } from "react-router";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="App">
      <Header title="BLOG" />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
