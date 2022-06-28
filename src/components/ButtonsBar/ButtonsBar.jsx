import { Button } from "../Button/Button";
import styles from "./ButtonsBar.module.css";

export const ButtonsBar = ({
  generateNewArray,
  selectionSort,
  bubbleSort,
  insertionSort,
  quickSort,
}) => {
  return (
    <div className={styles.buttonsBar}>
      <Button
        id="reset"
        appearance="array-btn"
        onClick={() => generateNewArray()}
      >
        Generate new array
      </Button>
      <Button
        id="bubble"
        appearance="sort-btn"
        speed="slow"
        onClick={bubbleSort}
      >
        Buble
      </Button>
      <Button
        id="insertion"
        appearance="sort-btn"
        speed="slow"
        onClick={insertionSort}
      >
        Insertion
      </Button>
      <Button
        id="selection"
        appearance="sort-btn"
        speed="medium"
        onClick={selectionSort}
      >
        Selection
      </Button>
      <Button
        id="quick"
        appearance="sort-btn"
        speed="quick"
        onClick={quickSort}
      >
        Quick
      </Button>
    </div>
  );
};
