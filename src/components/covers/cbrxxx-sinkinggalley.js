import ArtistTitleLabel from 'components/ArtistTitleLabel';
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';

import 'styles/whole-earth.scss';

import image from 'images/SinkingGalleySneer.jpeg';

export default function Cover() {
  return (
    <div className='cover sinking-galley'>
      <BackgroundImage
        image={ image }
      />
      <ArtistTitleLabel
        artist='Haszari + Kathia Rudametkin'
        title='Sinking Galley'
        padding='40px 50px'
        textSize='86px'
        titleTextSize='70%'
        length={ 60 }
        position={{
          bottom: '2%',
          left: 0,
        }}
        mixerSize={ '170px'}
        colours={{
          mixer: {
            top: '#4c302a',
            middle: '#978879',
            bottom: '#c6d2d3',
          },
          background: 'rgba(181, 186, 193, 80%)',
          text: '#1c0000',
        }}
      />
    </div>
  );
}
