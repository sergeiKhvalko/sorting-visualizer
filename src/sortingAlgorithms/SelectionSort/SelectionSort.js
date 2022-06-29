import getSelectionSortAnimations from "./getSelectionSortAnimations";
import {
  changeBackgroundColor,
  changeBoxShadow,
  swapBars,
  resetBarStyleDefault,
  disableButtons,
  enableButtons,
} from "../../helpers/HelperFunctions";

const SelectionSort = (array, animationSpeed) => {
  disableButtons();

  const animations = getSelectionSortAnimations(array);
  console.log(animations);

  for (let i = 0; i < animations.length; i += 6) {
    const comparingElement1 = animations[i],
      comparingElement2 = animations[i + 1],
      minIndexElement = animations[i + 2],
      doSwap = animations[i + 3],
      isFinalElement = animations[i + 4],
      finalElement = animations[i + 5];

    const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        changeBackgroundColor(minIndexElement, "rgba(0,0,255, 0.9)"); //blue
        changeBackgroundColor(comparingElement1, "rgba(0,0,0, 0.9)"); //black
        changeBackgroundColor(comparingElement2, "rgba(255,165,0, 0.9)"); //yellow

        if (doSwap === true) {
          changeBackgroundColor(minIndexElement, "rgba(144,238,144, 0.9)"); //green-light
          changeBackgroundColor(comparingElement1, "rgba(144,238,144, 0.9)"); //green-light

          swapBars(comparingElement1, minIndexElement);
        }
      }, i * animationSpeed);

      resolve();
    });

    const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isFinalElement === true) {
          changeBackgroundColor(finalElement, "rgba(0, 164, 86, 0.6)"); // green
          changeBoxShadow(
            finalElement,
            "5px 5px 50px 5px rgba(0, 164, 86, 0.2)"
          );
        } else {
          changeBackgroundColor(comparingElement2, "rgba(225, 0, 120, 0.6)"); //pink
          changeBackgroundColor(minIndexElement, "rgba(225, 0, 120, 0.6)"); //pink
        }

        if (finalElement === array.length - 1) resolve();
      }, (i + 6) * animationSpeed);
    });

    Promise.all([promise1, promise2]).then(enableButtons);
  }

  resetBarStyleDefault(array, (animations.length + 6) * animationSpeed);
};

export default SelectionSort;
