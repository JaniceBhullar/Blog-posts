/* eslint-disable react/prop-types */
export default function NewPosts({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) {
  return (
    <main className="NewPost">
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title</label>
        <input
          id="postTitle"
          type="text"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Body</label>
        <input
          id="postBody"
          type="text"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
      </form>
      <button>Submit</button>
    </main>
  );
}
