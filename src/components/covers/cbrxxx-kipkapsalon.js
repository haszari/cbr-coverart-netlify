
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';
import ArtistTitleLabel from 'components/ArtistTitleLabel';

import 'styles/whole-earth.scss';

import image from 'images/civic neon.jpeg';

export default function Cover() {
  return (
    <div className='cover'>
      <BackgroundImage
        image={ image }
        left={ -790 }
        top={ -220 }
        scale={ 120 }
      />
      <ArtistTitleLabel
        artist='Haszari'
        title='Kip Kapsalon'
        length={ 36 }
        textSize='100px'
        position={{
          top: '15%',
          right: 0,
        }}
        mixerSize={190}
        borderWidth='10px'
        colours={{
          background: 'black',//'#f8b212',
          text: '#faffff',
          mixer: {
            top: '#f101dc',
            middle: '#0049d7',
            bottom: '#df0202',
          },
        }}
      />
    </div>
  );
}
