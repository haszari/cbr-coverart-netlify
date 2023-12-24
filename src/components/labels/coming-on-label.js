import MixerLogo from "components/mixer-logo";

export default function ComingOnLabel({ position, scale }) {
  const borderRadius = ["10px", "10px", "10px", "10px"];
  if (position.top === 0) {
    borderRadius[0] = "0px";
    borderRadius[1] = "0px";
  }
  if (position.bottom === 0) {
    borderRadius[2] = "0px";
    borderRadius[3] = "0px";
  }
  if (position.left === 0) {
    borderRadius[0] = "0px";
    borderRadius[3] = "0px";
  }
  if (position.right === 0) {
    borderRadius[1] = "0px";
    borderRadius[4] = "0px";
  }

  const copy = {
    textAlign: "left",
    backgroundColor: "#efffff",
    paddingLeft: "10px",
    paddingBottom: "4px",
    position: "absolute",
    bottom: `${scale > 1 ? 11.11 * scale : 0}%`,
    borderRadius: borderRadius.join` `,
    right: `${
      scale > 1 && position.right !== undefined
        ? (scale - 1) * 200
        : position.right
    }px`,
    left: `${
      scale > 1 && position.left !== undefined
        ? (scale - 1) * 200
        : position.left
    }px`,
    scale: `${scale * 100}%`,
  };
  const mixer = {
    position: "absolute",
    scale: `${scale * 100}%`,
    right: `${-8 + (position.right !== undefined ? 0 : -(scale - 1) * 400)}px`,
    bottom: `${-8 - (scale - 1) * 10}px`,
    // translate: "0% 50%",
  };
  const wrap = {
    position: "absolute",
    top: `${position.top}%`,
    bottom: `${position.bottom}%`,
    left: `${position.left}%`,
    right: `${position.right}%`,
    width: `400px`,
    height: `${102 * scale}px`,
  };

  return (
    <div style={wrap}>
      <div className="copy" style={copy}>
        <div className="artist">Haszari</div>
        <div className="title">It Was Coming On</div>
      </div>
      <div style={mixer}>
        <MixerLogo
          colors={{
            top: "#92f8ff",
            middle: "#aaf5b4",
            bottom: "#db02a9",
          }}
          style={{ scale: `${scale * 100}%` }}
        />
      </div>
    </div>
  );
}
