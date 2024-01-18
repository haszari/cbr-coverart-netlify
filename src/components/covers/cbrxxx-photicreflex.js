
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';
import ArtistTitleLabel from 'components/ArtistTitleLabel';

import 'styles/whole-earth.scss';

import image from 'images/venicepoles.jpg';


export default function Cover() {
  return (
    <div className='cover photicreflex'>
      <BackgroundImage
        image={ image }
        scale={ 160 }
        left='-1500px'
        top='-750px'
      />
      <ArtistTitleLabel
        length={45}
        artist='Haszari'
        title='photic reflex'
        position={{
          right: 0,
          bottom: '8%',
        }}
        colours={{
          text: '#250000',
          mixer: {
            top: '#b25011',
            middle: '#250000',
            bottom: '#3e3d0d',
          }
        }}
      />
    </div>
  );
}

/*
            top: '#aacefe',
            middle: '#250000',
            bottom: '#ffcb53',
*/