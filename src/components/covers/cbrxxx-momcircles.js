
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';
import ArtistTitleLabel from 'components/ArtistTitleLabel';

import 'styles/whole-earth.scss';

import image from 'images/circles-staromestska.jpeg';

export default function Cover() {
  return (
    <div className='cover'>
      <BackgroundImage
        image={ image }
        scale={ 100 }
        left='-266px'
      />
      <ArtistTitleLabel
        artist='möm'
        title='Circles (Haszari remix)'
        textSize='100px'
        position={{
          right: 0,
          bottom: '5%',
        }}
      />
    </div>
  );
}
