const getSelectionSortAnimations = (array) => {
  const animations = [];

  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    animations.push(i, i, indexMin, false, false, -1);

    for (let j = i + 1; j < array.length; j++) {
      animations.push(i, j, indexMin, false, false, -1);
      if (array[j] < array[indexMin]) {
        indexMin = j;
        animations.push(i, j, indexMin, false, false, -1);
      }
    }

    if (indexMin !== i) {
      [array[i], array[indexMin]] = [array[indexMin], array[i]];
      animations.push(i, i, indexMin, true, false, -1);
    }

    animations.push(i, i, i, false, true, i);
  }

  return animations;
};

export default getSelectionSortAnimations;
