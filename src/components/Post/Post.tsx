import { useLoaderData } from "react-router-dom";
import styles from "./Post.module.scss";
import { PostResponse } from "../../main";

function Post() {
  const { id, title, body } = useLoaderData() as PostResponse;

  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.id}>{id}</span>
      </div>
      <p className={styles.body}>{body}</p>
    </div>
  );
}

export default Post;
