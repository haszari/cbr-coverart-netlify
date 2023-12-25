
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';
import ArtistTitleLabel from 'components/ArtistTitleLabel';

import 'styles/whole-earth.scss';

import image from 'images/street-art-eye-coming-on.jpg';

export default function Cover() {
  return (
    <div className='cover'>
      <BackgroundImage
        image={ image }
        scale={ 100 }
        left='-450px'
        // top={ 0 }
      />
      <ArtistTitleLabel
        artist='Haszari'
        title='It Was Coming On'
        position={{
          right: 0,
          bottom: '5%',
        }}
      />
    </div>
  );
}
