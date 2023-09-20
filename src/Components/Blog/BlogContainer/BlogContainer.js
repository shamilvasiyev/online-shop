import { Link } from "react-router-dom";
import classes from "./BlogContainer.module.scss";

const BlogContainer = ({ blogs }) => {
  return (
    <div className={classes.blog_container}>
      {blogs.map((blog) => (
        <div className={classes.single_blog} key={blog.id}>
          <div className={classes.blog_img}>
            <img src={blog.img} alt={blog.title} />
          </div>

          <div className={classes.blog_content}>
            <div>
              <span>{blog.createdTime}</span>
              <h4>{blog.title}</h4>
              <p>{blog.content}</p>
            </div>
            <div>
              <Link to={`${blog.link}`}>Read more</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogContainer;
