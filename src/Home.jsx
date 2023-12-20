import Feed from "./Feed";

// eslint-disable-next-line react/prop-types
export default function Home({ posts, fetchError, isLoading }) {
  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading posts ...</p>}
      {!isLoading && fetchError && <p className="statusMsg">{fetchError}</p>}
      {!isLoading & !fetchError &&
        (posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p style={{ marginTop: "2rem" }}>No posts to display</p>
        ))}
    </main>
  );
}

{
  /* {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No posts to display</p>
      )} */
}
