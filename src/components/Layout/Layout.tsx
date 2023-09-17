import styles from "./Layout.module.scss";
import Navigation from "../Navigation";

function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className={styles.layout}>
      <Navigation />
      <div className={styles.children}>{children}</div>
    </div>
  );
}

export default Layout;
