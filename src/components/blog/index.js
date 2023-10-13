import React from "react";
import MyCoolCodeBlock from "../codeblock";

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p>Published on {new Date(post.createdAt).toLocaleDateString()}</p>
      <p>Author: {post.authorId}</p>
      <div className="content">
        {post.content.map((item, index) => (
          <div key={index}>
            {item.type === "text" ? (
              <p>{item.value}</p>
            ) : (
              //   <p>{item.value}</p>
              <MyCoolCodeBlock
                code={item.value}
                language={item.language}
                showLineNumbers={true}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
