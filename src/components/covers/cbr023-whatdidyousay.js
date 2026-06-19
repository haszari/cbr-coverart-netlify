
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';
import ArtistTitleLabel from 'components/ArtistTitleLabel';

import 'styles/whole-earth.scss';

import image from 'images/naoshima.png';

export default function Cover() {
  return (
    <div className='cover'>
      <BackgroundImage
        image={ image }
        top={ -550 }
      />
      <ArtistTitleLabel
        artist='PocketLipps'
        title='What Did You Say'
        length={100}
        position={{
          bottom: 0,
        }}
        padding='10em'
        textAlign='right'
        mixerSize={'300px'}
        colours={{
          background: 'transparent',//'#f8b212',
          text: '#e0ded3',
          mixer: {
            top: '#002f5a',
            middle: '#01466a',
            bottom: '#486d89',            
          }
          
        }}

      />
    </div>
  );
}
