
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';

import ArtistTitleLabel from 'components/ArtistTitleLabel';

import 'styles/whole-earth.scss';

import image from 'images/sunbeach.jpeg';


export default function Cover() {
  return (
    <div className="cover photicreflex">
      <BackgroundImage
        image={ image }
        scale={ 200 }
        left={ -50 }
        top={ -50 }
      />
      <ArtistTitleLabel
        artist='Haszari'
        title='photic reflex'
        position={{
          right: 0,
          bottom: '15%',
        }}
        colours={{
          text: '#040800',
          mixer: {
            top: 'rgb(167 199 223)',
            middle: 'rgb(246 235 214);',
            bottom: 'rgb(68 70 32)',
          }
        }}
      />
    </div>
  );
}
