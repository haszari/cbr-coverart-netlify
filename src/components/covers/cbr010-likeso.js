import ArtistTitleLabel from 'components/ArtistTitleLabel';
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';

import 'styles/whole-earth.scss';

import image from 'images/20220618 C Like So cover art purple halftone.png';

export default function Cover() {
  return (
    <div className='cover likeo'>
      <BackgroundImage
        image={ image }
      />
      <ArtistTitleLabel
        artist='Haszari'
        title='Like So'
        length={ 100 }
        position={{
          bottom: "0",
        }}
        padding='10em'
        textAlign='right'
        mixerSize='20em'
        colours={{
          background: 'transparent',
          text: 'rgb(228, 232, 232)',
          mixer: {
            top: 'rgb(228, 232, 232)',
            middle: '#98988f',
            bottom: '#282428'
          }
        }}
      />
    </div>
  );
}
