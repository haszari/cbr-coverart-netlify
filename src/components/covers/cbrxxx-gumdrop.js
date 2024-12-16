import ArtistTitleLabel from 'components/ArtistTitleLabel';
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';

import 'styles/whole-earth.scss';

import image from 'images/Ice Cream Carpark IMG_6989.jpg';

export default function Cover() {
  return (
    <div className='cover gumdrop'>
      <BackgroundImage
        image={ image }
        scale={ 108 }
        left='-608px'
        top='-200px'
      />
      <ArtistTitleLabel
        artist='Haszari'
        title='Gumdrop'
        padding='40px 50px'
        textSize='92px'
        titleTextSize='80%'
        length={ 40 }
        forceRadius={ true }
        textAlign='right'
        position={{
          left: '30%',
          bottom: '5%',
        }}
        mixerSize={ '220px'}
        colours={{
          mixer: {
            // top: '#ff7700',
            // middle: '#8eb4bc',
            // bottom: '#fffee9',
            top: '#840000',
            middle: '#b56900',
            bottom: '#ffcc88',
          },
          background: 'rgb(198 226 223 / 90%)',
          text: '#000100',
        }}
      />
    </div>
  );
}
