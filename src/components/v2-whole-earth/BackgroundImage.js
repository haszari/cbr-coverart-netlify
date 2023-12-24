

export default function BackgroundImage( {
  image,
  scale = 100,
  left = 0,
  top = 0,
} ) {
  const background = {
    backgroundImage: `url("${image}")`,
    height: `${scale}%`,
    width: `${scale}%`,
    left: `${left}%`,
    top: `${top}%`,
  };
  return (
    <div className="artwork" style={ background } />
  );
}
