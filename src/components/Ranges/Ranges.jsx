import ArrayBarRange from "./ArrayBarRange/ArrayBarRange";
import AnimationSpeedRange from "./AnimationSpeedRange/AnimationSpeedRange";
import "./Ranges.css";

export const Ranges = ({
  numberOfArrayBars,
  onChangeArrayBarRange,
  animationSpeed,
  onChangeAnimationSpeed,
}) => {
  return (
    <div id="range-slider">
      <div className="column">
        <div className="range-slider-container">
          <ArrayBarRange
            numberOfArrayBars={numberOfArrayBars}
            onChangeArrayBarRange={onChangeArrayBarRange}
          />
        </div>
      </div>
      <div className="column">
        <div className="range-slider-container">
          <AnimationSpeedRange
            animationSpeed={animationSpeed}
            onChangeAnimationSpeed={onChangeAnimationSpeed}
          />
        </div>
      </div>
    </div>
  );
};
