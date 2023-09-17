import styles from "./Posts.module.scss";
import PostLink from "./PostLink";
import { ReactElement } from "react";

const Posts = () => {
  const posts: ReactElement[] = [];

  for (let i = 1; i <= 100; i++) {
    posts.push(<PostLink key={i} id={i} />);
  }

  return <div className={styles.posts}>{posts}</div>;
};

export default Posts;
