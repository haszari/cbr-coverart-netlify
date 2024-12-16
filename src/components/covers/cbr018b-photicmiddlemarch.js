
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';
import ArtistTitleLabel from 'components/ArtistTitleLabel';

import 'styles/whole-earth.scss';

import image from 'images/photicmiddlemarch.png';


export default function Cover() {
  return (
    <div className='cover'>
      <BackgroundImage
        image={ image }
        // scale={ 160 }
        // left='-1500px'
        // top='-750px'
      />
      <ArtistTitleLabel
        length={64}
        artist='Haszari'
        title='photic reflex (middlemarch moonlight throwdown)'
        position={{
          right: 0,
          bottom: '4%',
        }}
        textSize='90px'
        titleTextSize='70%'
        colours={{
          background: 'rgba(228, 225, 185, 0.75)',
          text: '#0f181c',
          mixer: {
            top: '#580203',
            middle: '#7e6d4b',
            bottom: '#7d8205',
          }
        }}
      />
    </div>
  );
}
