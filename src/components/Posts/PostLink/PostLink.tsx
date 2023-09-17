import { Link } from "react-router-dom";
import styles from "./PostLink.module.scss";

const PostLink = ({ id }: { id: number }) => {
  return (
    <Link className={styles.link} to={"posts/" + id}>
      <a className={styles.link}>{id}</a>
    </Link>
  );
};

export default PostLink;
