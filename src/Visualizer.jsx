import { useEffect, useState } from "react";
import { Header, ButtonsBar, ArrayBar, Ranges } from "./components";
import "./Visualizer.css";
import { randomIntFromInterval } from "./helpers/HelperFunctions";

const Visualizer = () => {
  const [arrayBar, setArrayBar] = useState([]);
  const [numberOfArrayBars, setNumberOfArrayBars] = useState(10);
  const [animationSpeed, setAnimationSpeed] = useState(50);

  useEffect(() => {
    generateNewArray();
  }, []);

  const generateNewArray = () => {
    const array = [];
    for (let i = 0; i < numberOfArrayBars; i++) {
      array.push(randomIntFromInterval(5, 55));
    }
    setArrayBar(array);
  };

  const onChangeArrayBarRange = (value) => {
    setNumberOfArrayBars(value);
    generateNewArray();
  };

  const onChangeAnimationSpeed = (value) => {
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
