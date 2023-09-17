import { Link } from "react-router-dom";
import styles from "./PaginationItem.module.scss";
import cn from "classnames";

function PaginationItem({
  isActive,
  index,
}: {
  isActive: boolean;
  index: number;
}) {
  const itemClassName = cn(styles.item, {
    [styles.active]: isActive,
  });

  return (
    <Link className={itemClassName} to={"/posts/" + index}>
      {index}
    </Link>
  );
}

export default PaginationItem;
