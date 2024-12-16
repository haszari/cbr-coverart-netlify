import ArtistTitleLabel from 'components/ArtistTitleLabel';
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';

import 'styles/whole-earth.scss';

import image from 'images/morningtonchurch.jpg';

export default function Cover() {
  return (
    <div className='cover'>
      <BackgroundImage
        image={ image }
      />
      <ArtistTitleLabel
        artist='Haszari'
        title='Popup Corridor'
        padding='40px 60px'
        textSize='92px'
        titleTextSize='80%'
        length={ 44 }
        forceRadius={ true }
        textAlign='right'
        position={{
          left: 0,
          top: '25%',
        }}
        mixerSize={ '220px'}
        colours={{
          mixer: {
            // top: '#ff7700',
            // middle: '#8eb4bc',
            // bottom: '#fffee9',
            top: '#35240c',
            middle: '#84612e',
            bottom: '#ffe0a8',
          },
          background: 'rgb(199 190 205 / 70%)',
          text: '#000100',
        }}
      />
    </div>
  );
}
