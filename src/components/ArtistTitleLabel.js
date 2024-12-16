import MixerLogo from 'components/mixer-logo';

export default function ArtistTitleLabel({
  artist = '',
  title = '',
  // Default sizing for 3000px square image.
  textSize = '140px', // Artist text size.
  titleTextSize = '60%', // Title text size, relative to textSize.
  padding = '50px 80px',
  radius = '50px',
  gap = '50px',
  // Pass zero or negative to hide mixer.
  mixerSize = '200px',
  // Specify 2x of left, right, top, bottom as percent of container.
  position = { bottom: 25, left: 0 },
  // Width of label as % of container.
  length = 50,
  textAlign = '',
  colours,
  borderWidth = '0',
  forceRadius = false
}) {
  const leftAlign = position.left !== undefined;
  let anchored = 'centre';
  if (position.left === 0) {
     anchored = 'left';
  }
  else if (position.right === 0) {
    anchored = 'right';
  }
  const centered = anchored === 'centre';

  colours = {
    text: 'black',
    background: 'white',
    border: 'transparent',
    mixer: {
      top: '#555',
      middle: '#999',
      bottom: '#ccc',
    },
    ...colours,
  };

  const borderRadius = [0, 0, 0, 0];
  borderRadius[1] = radius;
  borderRadius[2] = radius;
  borderRadius[0] = radius;
  borderRadius[3] = radius;

  if (anchored === 'left') {
    borderRadius[0] = 0;
    borderRadius[3] = 0;
  }
  else if (anchored === 'right') {
    borderRadius[1] = 0;
    borderRadius[2] = 0;
  }

  const wrap = {
    display: 'flex',
    // flexDirection: leftAlign ? 'row' : 'row-reverse',
    alignItems: 'center',
    gap: gap,
    padding: padding,
    ...position,
    position: 'absolute',
    width: `${length}%`,
    backgroundColor: colours.background,
    color: colours.text,
    borderRadius: borderRadius.join` `,
    borderStyle: 'solid',
    borderColor: colours.border,
    borderWidth: borderWidth,
  };

  let defaultTextAlign = 'center';
  if (anchored === 'left') {
    wrap.borderLeftStyle = 'none';
    wrap.flexDirection = 'row';
    defaultTextAlign = 'right';
  }
  else if (anchored === 'right') {
    wrap.borderRightStyle = 'none';
    wrap.flexDirection = 'row-reverse';
    defaultTextAlign = 'left';
  }

  const copy = {
    textAlign: textAlign || defaultTextAlign,
    fontSize: textSize,
    width: '100%',
  };
  const mixer = {
    // Pure fudge to nudge the mixer down as it renders with bottom padding.
    // (I think the SVG needs to be centered exactly in bounding box.)
    position: 'relative',
    top: `calc(${textSize} * 0.05)`,
  };
  if ( !mixerSize || mixerSize < 1 ) {
    mixer.display = 'none';
  }
  const titleStyle = {
    fontSize: titleTextSize,
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
        <div className='title gritle' style={titleStyle}>{title}</div>
      </div>
    </div>
  );
}
