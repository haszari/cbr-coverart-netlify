
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';
import ArtistTitleLabel from 'components/ArtistTitleLabel';

import 'styles/whole-earth.scss';

import image from 'images/manas-concrete-seam.jpg';

export default function Cover() {
  return (
    <div className='cover manas'>
      <BackgroundImage
        image={ image }
      />
      <ArtistTitleLabel
        artist='Haszari'
        title='manas'
        length={ 44 }
        textSize='200px'
        position={{
          top: '20%',
          right: '28%',
          left: '28%',
        }}
        mixerSize={0}
        borderWidth='10px'
        colours={{
          background: 'transparent',//'#f8b212',
          // border: 'black',
        }}
      />
    </div>
  );
}
