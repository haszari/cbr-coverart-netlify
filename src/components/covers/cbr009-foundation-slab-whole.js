
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';
import ArtistTitleLabel from 'components/ArtistTitleLabel';

import 'styles/whole-earth.scss';

import image from 'images/gutterplant.jpeg';

export default function Cover() {
  return (
    <div className='cover'>
      <BackgroundImage
        image={ image }
        scale={ 119 }
        left='-1140px'
        top='-290px'
      />
      <ArtistTitleLabel
        artist='Haszari'
        title='Foundation Slab'
        position={{
          left: 0,
          bottom: '5%',
        }}
      />
    </div>
  );
}
