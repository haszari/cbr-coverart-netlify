import ArtistTitleLabel from 'components/ArtistTitleLabel';
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';

import 'styles/whole-earth.scss';

import image from 'images/kl-booths.jpg';

export default function Cover() {
  return (
    <div className='cover'>
      <BackgroundImage
        image={ image }
      />
      <ArtistTitleLabel
        artist='Angry Suzy'
        title='Bad Reception (Haszari "Acoustic Handshake" remix)'
        padding='40px 60px'
        textSize='82px'
        titleTextSize='70%'
        length={ 60 }
        forceRadius={ true }
        textAlign='right'
        position={{
          left: 0,
          bottom: '5%',
        }}
        mixerSize={ '220px'}
        colours={{
          mixer: {
            // top: '#ff7700',
            // middle: '#8eb4bc',
            // bottom: '#fffee9',
            top: '#e44b55',
            middle: '#ff7d37',
            bottom: '#00c489',
          },
          background: '#d1d5d1',
          text: '#070500',
        }}
      />
    </div>
  );
}
