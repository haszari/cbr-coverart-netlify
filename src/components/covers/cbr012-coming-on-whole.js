
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';
import ArtistTitleLabel from 'components/ArtistTitleLabel';

import 'styles/whole-earth.scss';

import image from 'images/street-art-eye-coming-on.jpg';

export default function Cover() {
  return (
    <div className='cover'>
      <BackgroundImage
        image={ image }
        scale={ 103 }
        left='-492px'
        top='-90px'
      />
      {/* <ArtistTitleLabel
        artist='Haszari'
        title='It Was Coming On'
        position={{
          right: 0,
          bottom: '5%',
        }}
      /> */}
      <ArtistTitleLabel
        artist='Haszari'
        title='It Was Coming On'
        length={ 100 }
        padding='10em'
        mixerSize='20em'
        colours={{
          background: 'transparent',
          text: '#000479',
          mixer: {
            top: '#a5ebfb',
            middle: '#7cccb9', 
            bottom: '#93005f'
          }
        }}
        position={{
          right: 0,
          bottom: 0,
          width: '100%'
        }}
      />
    </div>
  );
}
