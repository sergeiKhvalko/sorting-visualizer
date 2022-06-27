import "./AnimationSpeedRange.css";
import { Slider, withStyles } from "@material-ui/core";

const AnimationSpeedSlider = withStyles({
  root: {
    color: "rgba(100, 180, 255, 1)",
    inlineSize: "60%",
    padding: 10,
  },
  thumb: {
    height: 12,
    width: 12,
    backgroundColor: "#fff",
    border: "2px solid cyan",
    marginTop: -4,
    marginLeft: 0,
  },
  active: {},
  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
})(Slider);

const AnimationSpeedRange = ({ animationSpeed, onChangeAnimationSpeed }) => {
  return (
    <>
      <p className="range-title">Animation Speed (ms)</p>
      <AnimationSpeedSlider
        id="animationSpeedSlider"
        min={10}
        max={200}
        value={animationSpeed}
        valueLabelDisplay="auto"
        onChange={onChangeAnimationSpeed}
      />
    </>
  );
};

export default AnimationSpeedRange;
