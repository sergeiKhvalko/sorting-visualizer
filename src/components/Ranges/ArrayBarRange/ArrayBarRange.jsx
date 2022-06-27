import { Slider, withStyles } from "@material-ui/core";

const ArrayBarSlider = withStyles({
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

const ArrayBarRange = ({ numberOfArrayBars, onChangeArrayBarRange }) => {
  return (
    <>
      <p className="range-title">Array Size</p>
      <ArrayBarSlider
        id="arrayBarSlider"
        min={2}
        max={14}
        step={1}
        value={numberOfArrayBars}
        valueLabelDisplay="auto"
        marks
        onChange={onChangeArrayBarRange}
      />
    </>
  );
};

export default ArrayBarRange;
