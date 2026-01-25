
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';
import ArtistTitleLabel from 'components/ArtistTitleLabel';

import 'styles/whole-earth.scss';

import image from 'images/IMG_7517.jpeg';

export default function Cover() {
  return (
    <div className='cover manas'>
      <BackgroundImage
        image={ image }
      />
      <ArtistTitleLabel
        artist='Haszari'
        title='Wet Paint'

        // Option 1 - Centered floating text in blue
        length={100}
        position={{
          bottom: 0,
        }}
        padding='10em'
        textAlign='right'
        mixerSize={'300px'}
        colours={{
          background: 'transparent',//'#f8b212',
          text: '#dce2e5',
          mixer: {
            top: '#8bb100',
            middle: '#006b88',
            bottom: '#3e3c37',            
          }
          
        }}

        // Option 2 - label         
        // mixerSize='200px'
        // textSize='110px'
        // position={{
        //   bottom: '15%',
        //   right: 0
        // }}
        // colours={{
        //   background: '#e00000',
        //   text: '#630000',
        //   border: '#6e0000',
        // }}
        // borderWidth='10px'
      />
    </div>
  );
}
