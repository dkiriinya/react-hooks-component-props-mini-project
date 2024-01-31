import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <main key={post.id}>
          <Article title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
        </main>
      ))}
    </div>
  );
}

export default ArticleList;
