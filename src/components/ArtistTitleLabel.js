import MixerLogo from "components/mixer-logo";

export default function ArtistTitleLabel({
  artist = '',
  title = '',
  fontSize = '2em',
  // Specify 2x of left, right, top, bottom as percent of container.
  position = { bottom: 25, left: 0 },
  // Width of label as % of container.
  length = 50,
  scale = 1,
}) {
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
    borderRadius[2] = "0px";
  }

  const wrap = {
    ...position,
    position: "absolute",
    width: `${length}%`,
    height: `${102 * scale}px`,
  };

  const copy = {
    textAlign: `${position.left !== undefined ? "right" : "left"}`,
    fontSize: fontSize,
    backgroundColor: "#efffff",
    padding: "0px 10px 4px",
    position: "absolute",
    bottom: `${(scale - 1) * 66.67}px`,
    borderRadius: borderRadius.join` `,
    right: `${
      scale > 1 && position.right !== undefined
        ? (scale - 1) * 300
        : position.right
    }px`,
    left: `${
      scale > 1 && position.left !== undefined
        ? (scale - 1) * 300
        : position.left
    }px`,
    scale: `${scale * 100}%`,
  };
  const mixer = {
    display: 'none',
    position: "absolute",
    scale: `${scale * 100}%`,
    left: `${
      position.left !== undefined ? `${110 + 110 * (scale - 1)}px` : ""
    }`,
    right: `${position.right !== undefined ? `-8px` : ""}`,
    top: `${120 + 105 * (scale - 1)}px`,
  };

  return (
    <div style={wrap}>
      <div className="copy" style={copy}>
        <div className="artist">{artist}</div>
        <div className="title">{title}</div>
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
