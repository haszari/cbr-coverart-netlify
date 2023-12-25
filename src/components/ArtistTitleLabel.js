import MixerLogo from 'components/mixer-logo';

export default function ArtistTitleLabel({
  artist = '',
  title = '',
  fontSize = '2em',
  mixerSize = '4em',
  padding = '1em',
  radius = '1em',
  gap = '1em',
  // Specify 2x of left, right, top, bottom as percent of container.
  position = { bottom: 25, left: 0 },
  // Width of label as % of container.
  length = 50,
  textAlign = '',
  colours = {
    text: 'black',
    background: 'white',
    mixer: {
      top: '#555',
      middle: '#999',
      bottom: '#ccc',
    }
  },
}) {
  const leftAlign = position.left !== undefined;
  const centered = (length === 100);

  const borderRadius = [0, 0, 0, 0];
  if (! centered) {
    if (leftAlign) {
      borderRadius[1] = radius;
      borderRadius[2] = radius;
    }
    else {
      borderRadius[0] = radius;
      borderRadius[3] = radius;
    }
  }

  const wrap = {
    display: 'flex',
    flexDirection: leftAlign ? 'row' : 'row-reverse',
    alignItems: 'center',
    gap: gap,
    padding: padding,
    ...position,
    position: 'absolute',
    width: `${length}%`,
    backgroundColor: colours.background,
    color: colours.text,
    borderRadius: borderRadius.join` `,
  };
  const defaultTextAlign = centered ? 'center' : ( leftAlign ? 'right' : 'left' );
  const copy = {
    textAlign: textAlign || defaultTextAlign,
    fontSize: fontSize,
  };
  const mixer = {
    // display: 'none',
    // position: 'absolute',
    // // scale: `${scale * 100}%`,
    // left: `${
    //   position.left !== undefined ? `${110 + 110 * (scale - 1)}px` : ''
    // }`,
    // right: `${position.right !== undefined ? `-8px` : ''}`,
    // top: `${120 + 105 * (scale - 1)}px`,
  };

  return (
    <div style={wrap}>
      <div style={mixer}>
        <MixerLogo
          size={mixerSize}
          colors={{
            top: colours.mixer.top,
            middle: colours.mixer.middle,
            bottom: colours.mixer.bottom,
          }}
        />
      </div>
      <div className='copy' style={copy}>
        <div className='artist'>{artist}</div>
        <div className='title'>{title}</div>
      </div>
    </div>
  );
}
