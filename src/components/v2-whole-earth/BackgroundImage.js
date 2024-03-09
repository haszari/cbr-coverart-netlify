

/**
 * Renders a background image with customizable scale, position, and image source.
 *
 * @param {Object} props - The component props.
 * @param {string} props.image - Imported image (path).
 * @param {number} [props.scale=100] - The scale of the background image as % of container.
 * @param {number} [props.left=0] - The horizontal offset of the background image.
 * @param {number} [props.top=0] - The vertical offset of the background image.
 * @returns {JSX.Element} The rendered background image component.
 */
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
    backgroundPositionX: left,
    backgroundPositionY: top,
  };
  return (
    <div className="artwork" style={ background } />
  );
}
