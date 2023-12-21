/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

export const DataContext = createContext({});

export default function DataProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { response, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:5174/posts"
  );

  console.log(useAxiosFetch(
    "http://localhost:5174/posts".fetchError))

  useEffect(() => {
    setPosts(response);
  }, [response]);

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        fetchError,
        isLoading,
        posts,
        setPosts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
