import ArtistTitleLabel from 'components/ArtistTitleLabel';
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';

import 'styles/whole-earth.scss';

import image from 'images/forest-top.jpg';

export default function Cover() {
  return (
    <div className='cover mivova'>
      <BackgroundImage
        image={ image }
      />
      <ArtistTitleLabel
        artist='Anika D'
        title='owls (Haszari remix)'
        length={ 100 }
        position={{
          bottom: 0,
        }}
        padding='10em'
        textAlign='right'
        mixerSize='16em'
        colours={{
          background: 'transparent',
          text: '#bbc075',
          mixer: {
            top: '#becd42',
            middle: '#3b6200',
            bottom: '#000e00'
          }
        }}
      />
    </div>
  );
}
