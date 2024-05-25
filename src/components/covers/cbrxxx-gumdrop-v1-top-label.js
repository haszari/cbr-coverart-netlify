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
        top='-50px'
      />
      <ArtistTitleLabel
        artist='Haszari'
        title='Gumdrop'
        padding='40px 50px'
        textSize='90px'
        titleTextSize='70%'
        length={ 40 }
        forceRadius={ true }
        position={{
          left: '30%',
          top: '12%',
        }}
        mixerSize={ '190px'}
        colours={{
          mixer: {
            // top: '#ff7700',
            // middle: '#8eb4bc',
            // bottom: '#fffee9',
            top: '#840000',
            middle: '#b56900',
            bottom: '#ffcc88',
          },
          background: '#c6e2df',
          text: '#000100',
        }}
      />
    </div>
  );
}
