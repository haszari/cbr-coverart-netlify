import ArtistTitleLabel from 'components/ArtistTitleLabel';
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';

import 'styles/whole-earth.scss';

import image from 'images/parkplatz1.jpeg';

export default function Cover() {

  return (
    <div className='cover'>
      <BackgroundImage
        image={ image }
        scale={ 118 }
        left='-1035px'
        top='-250px'
      />
      <ArtistTitleLabel
        artist='Haszari'
        title='Parkplatz-Schlurfen'
        padding='50px 50px 50px 70px'
        textSize='86px'
        titleTextSize='70%'
        length={ 42 }
        position={{
          bottom: '5%',
          right: 0,
        }}
        mixerSize={ '170px'}
        colours={{
          mixer: {
            top: '#b61625',
            middle: '#d15218',
            bottom: '#b09d3e',
          },
          background: '#0c1220',
          text: '#eaf0ff',
        }}
      />
    </div>
  );
}
