import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import parse, { domToReact, Element } from "html-react-parser";
import { FiLink } from "react-icons/fi";

import classes from "./BlogsPage.module.scss";

const BlogsPage = () => {
  let html;
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchBlogs = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:8080/blogs`);
      const data = await response.json();
      setBlogs(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  if (loading) {
    html = <h1>Loading...</h1>;
  } else {
    html = (
      <section className={classes.blog_page_container}>
        <div className="margin">
          <div className={classes.blogs_wrapper}>
            {blogs.map((blog) => (
              <div
                onClick={() => navigate(`/blogs/${blog._id}`)}
                key={blog._id}
                className={classes.single_blog}
              >
                <div className={classes.blog_photo}>
                  <div className={classes.overlay}>
                    <div>
                      <Link to={`/blogs/${blog._id}`}>
                        <FiLink />
                      </Link>
                    </div>
                  </div>

                  <img
                    src={`http://localhost:8080/${blog.image.imageUrl}`}
                    alt={blog.title}
                  />
                </div>

                <div className={classes.published_date}>
                  <span>{blog.published_at}</span>
                </div>

                <div className={classes.blog_title}>
                  <h4>{blog.title}</h4>
                </div>

                <div className={classes.read_more}>
                  <Link to={`/blogs/${blog._id}`}>Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return html;
};

export default BlogsPage;
