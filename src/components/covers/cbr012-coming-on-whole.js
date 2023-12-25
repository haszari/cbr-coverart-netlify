import 'styles/whole-earth.scss';

import image from 'images/street-art-eye-coming-on.jpg';
import ArtistTitleLabel from 'components/ArtistTitleLabel';

export default function Cover() {
  const scale = 3;
  const labelPosition = {
    right: 0,
    bottom: 2,
  };

  const background = {
    backgroundImage: `url('${image}')`,
    backgroundPositionX: `${-180 * scale}px`,
    backgroundPositionY: `${-6 * scale}px`,
    backgroundSize: `${1385 * scale}px`,
    width: `${1000 * scale}px`,
    height: `${1000 * scale}px`,
  };

  return (
    <div className='cover'>
      <div className='artwork' style={background}>
        <ArtistTitleLabel
          artist='Haszari'
          title='It Was Coming On'
          position={labelPosition}
          scale={scale}
        />
      </div>
    </div>
  );
}
