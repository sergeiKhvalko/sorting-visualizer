import "./ArrayBar.css";

const ColorBar = ({ height }) => {
  return (
    <div
      className="color-bar"
      style={{
        height: `${height}vh`,
        transform: `translateY(${55 - height}vh)`,
      }}
    ></div>
  );
};

export const ArrayBar = ({ arrayBar }) => {
  return (
    <div className="bar-container">
      {arrayBar.map((value, i) => (
        <div className="bar" key={i}>
          <div className="side top"></div>
          <div className="side bottom"></div>
          <div className="side right">
            <ColorBar height={value} />
          </div>
          <div className="side left">
            <ColorBar height={value} />
          </div>
          <div className="side front">
            <ColorBar height={value} />
          </div>
          <div className="side back">
            <ColorBar height={value} />
          </div>
        </div>
      ))}
    </div>
  );
};
