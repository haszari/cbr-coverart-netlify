import ArtistTitleLabel from 'components/ArtistTitleLabel';
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';

import 'styles/whole-earth.scss';

import image from 'images/alcatraz.jpg';

export default function Cover() {
  return (
    <div className='cover eggsfortea'>
      <BackgroundImage
        image={ image }
        left='-400px'
      />
      <ArtistTitleLabel
        artist='Haszari'
        title='Eggs for Tea'
        length={ 100 }
        position={{
          bottom: "0",
        }}
        padding='10em'
        textAlign='right'
        mixerSize='20em'
        colours={{
          background: 'transparent',
          text: 'rgb(2 0 1)',
          mixer: {
            top: 'rgb(251 222 204)',
            middle: 'rgb(159 0 0)',
            bottom: 'rgb(90 76 69)'
          }
        }}
      />
    </div>
  );
}
