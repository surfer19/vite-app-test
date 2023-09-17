import styles from "./PostLink.module.scss";
// import Link from 'next/link';

const PostLink = ({ id }) => {
  return (
    // <Link className={styles.link} href={'posts/' + id} shallow={true}> {/* this shallow routing has no effect */}
    <a className={styles.link}>Post {id}</a>
    // {id}
    // </Link>
  );
};

export default PostLink;
