
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';
import ArtistTitleLabel from 'components/ArtistTitleLabel';

import 'styles/whole-earth.scss';

import image from 'images/pathanlyart.jpg';

export default function Cover() {
  return (
    <div className='cover manas'>
      <BackgroundImage
        image={ image }
      />
      <ArtistTitleLabel
        artist='Haszari'
        title='Wet Paint'

        // centered, floating text
        length={ 44 }
        textSize='200px'
        position={{
          top: '20%',
          right: '28%',
          left: '28%',
        }}
        mixerSize={0}
        colours={{
          background: 'transparent',//'#f8b212',
          text: '#a7f2fd'
          // border: 'black',
        }}


        // mixerSize='200px'
        // colours={{
        //   background: '#e70d20',
        //   text: '#a7f2fd'
        //   // border: 'black',
        // }}
        borderWidth='10px'
      />
    </div>
  );
}
