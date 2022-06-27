import { useEffect, useState } from "react";
import { Header, ButtonsBar, ArrayBar, Ranges } from "./components";
import "./Visualizer.css";
import { randomIntFromInterval } from "./helpers/HelperFunctions";

const Visualizer = () => {
  const [arrayBar, setArrayBar] = useState([]);
  const [numberOfArrayBars, setNumberOfArrayBars] = useState(10);
  const [animationSpeed, setAnimationSpeed] = useState(50);

  useEffect(() => {
    generateNewArray(numberOfArrayBars);
  }, []);

  const generateNewArray = (amount) => {
    const newArray = [];
    for (let i = 0; i < amount; i++) {
      newArray.push(randomIntFromInterval(5, 55));
    }
    setArrayBar(newArray);
  };

  const onChangeArrayBarRange = (event, value) => {
    setNumberOfArrayBars(value);
    generateNewArray(value);
  };

  const onChangeAnimationSpeed = (event, value) => {
    setAnimationSpeed(value);
  };

  return (
    <div className="Visualizer">
      <Header />
      <ButtonsBar />
      <ArrayBar arrayBar={arrayBar} />
      <Ranges
        numberOfArrayBars={numberOfArrayBars}
        onChangeArrayBarRange={onChangeArrayBarRange}
        animationSpeed={animationSpeed}
        onChangeAnimationSpeed={onChangeAnimationSpeed}
      />
    </div>
  );
};

export default Visualizer;
