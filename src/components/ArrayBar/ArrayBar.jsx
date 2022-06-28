import "./ArrayBar.css";

const ColorBar = ({ height, className }) => {
  return (
    <div
      className={className}
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
            <ColorBar className={"color-bar right-color-bar"} height={value} />
          </div>
          <div className="side left">
            <ColorBar className={"color-bar left-color-bar"} height={value} />
          </div>
          <div className="side front">
            <ColorBar className={"color-bar front-color-bar"} height={value} />
          </div>
          <div className="side back">
            <ColorBar className={"color-bar back-color-bar"} height={value} />
          </div>
        </div>
      ))}
    </div>
  );
};
