import Feed from "./Feed";

// eslint-disable-next-line react/prop-types
export default function Home({ posts }) {
  return (
    <main className="Home">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No posts to display</p>
      )}
    </main>
  );
}
