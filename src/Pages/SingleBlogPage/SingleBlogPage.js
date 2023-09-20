import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import parse, { domToReact } from "html-react-parser";

import classes from "./SingleBlogPage.module.scss";

const SingleBlogPage = () => {
  const [blog, setBlog] = useState({});
  const { bId } = useParams();

  const fetchBlog = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8080/blogs/${bId}`);
      const data = await response.json();

      setBlog(data);
    } catch (error) {
      console.log(error);
    }
  }, [bId]);

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);

  // console.log(blog?.image?.imageUrl);
  const html = blog.body;

  const options = {
    replace: (node) => {
      // if (!attribs) {
      //   return;
      // }

      const { attribs, children } = node;

      if (!attribs) return;

      if (node.name === "p" && node.children[0].attribs.hasOwnProperty("src")) {
        return (
          <div className={classes.blog_content_photo}>
            {domToReact(children, options)}
          </div>
        );
      }
    },
  };

  // let html;
  // if (blog === {}) {
  //   html = <h1>Loading...</h1>;
  // } else {
  //   html = null;
  // }

  return (
    <div className={classes.wrapper}>
      <div className="margin">
        <div className={classes.simple_blog_container}>
          <div className={classes.title_box}>
            <h1>{blog?.title}</h1>
          </div>

          <div className={classes.blog_cover_photo}>
            <img
              src={`http://localhost:8080/${blog?.image?.imageUrl}`}
              alt={blog.title}
            />
          </div>

          <div className={classes.blog_content}>
            {html && parse(html, options)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
