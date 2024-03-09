
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';
import ArtistTitleLabel from 'components/ArtistTitleLabel';

import 'styles/whole-earth.scss';

import image from 'images/saint-kilda-space-rocks.png';

export default function Cover() {
  return (
    <div className='cover redline'>
      <BackgroundImage
        image={ image }
        scale={ 140 }
        left='-2300px'
        top='-700px'
      />
      <ArtistTitleLabel
        artist='Haszari'
        title='Redline Train'
        textSize='110px'
        length={ 40 }
        position={{
          bottom: '8%',
          right: 0
        }}
        mixerSize='220px'
        colours={{
          mixer: {
            top: '#720533',
            middle: '#ccac4b',
            bottom: '#9f2f1d',//'#a2835f',
          },
          background: '#e5e5e5',
          // text: '#fdfdfd'
          text: '#120412',
        }}
      />
    </div>
  );
}
