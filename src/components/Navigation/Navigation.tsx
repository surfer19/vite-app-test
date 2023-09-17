import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

function Navigation() {
  return (
    <div className={styles.navigation}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
