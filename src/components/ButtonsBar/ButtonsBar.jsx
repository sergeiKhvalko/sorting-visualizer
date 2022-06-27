import { Button } from "../Button/Button";
import styles from "./ButtonsBar.module.css";

export const ButtonsBar = () => {
  return (
    <div className={styles.buttonsBar}>
      <Button id="reset" appearance="array-btn">
        Generate new array
      </Button>
      <Button id="selection" appearance="sort-btn" speed="slow">
        Selection
      </Button>
      <Button id="buble" appearance="sort-btn" speed="slow">
        Buble
      </Button>
      <Button id="insertion" appearance="sort-btn" speed="medium">
        Insertion
      </Button>
      <Button id="quick" appearance="sort-btn" speed="quick">
        Quick
      </Button>
    </div>
  );
};
