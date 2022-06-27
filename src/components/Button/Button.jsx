import styles from "./Button.module.css";
import cn from "classnames";

export const Button = ({
  appearance,
  speed,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(styles.btn, className, {
        [styles.arrayBtn]: appearance === "array-btn",
        [styles.sortBtn]: appearance === "sort-btn",
        [styles.slow]: speed === "slow",
        [styles.medium]: speed === "medium",
        [styles.quick]: speed === "quick",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
