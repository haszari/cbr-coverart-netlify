
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';
import ArtistTitleLabel from 'components/ArtistTitleLabel';

import 'styles/whole-earth.scss';

import image from 'images/mivovawave.jpeg';

export default function Cover() {
  return (
    <div className="cover mivova">
      <BackgroundImage
        image={ image }
      />
      <ArtistTitleLabel
        artist='Haszari'
        title='mivova'
        length={ 100 }
        position={{
          top: '25%',
        }}
        mixerSize={0}
        colours={{
          background: 'transparent'
        }}
      />
    </div>
  );
}
