import ArtistTitleLabel from 'components/ArtistTitleLabel';
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';
import MixerLogo from 'components/mixer-logo';

import 'styles/whole-earth.scss';

import image from 'images/alcatraz.jpg';

export default function Cover() {
  const mixer = {
    // Pure fudge to nudge the mixer down as it renders with bottom padding.
    // (I think the SVG needs to be centered exactly in bounding box.)
    position: 'absolute',
    bottom: '4em',
    right: '4em',
  };
  return (
    <div className='cover eggsfortea'>
      <BackgroundImage
        image={ image }
        left='-550px'
      />
      <div style={mixer}>
        {/* <MixerLogo
          size="20em"
          colors={{
            top: 'rgb(251 222 204)',
            middle: 'rgb(159 0 0)',
            bottom: 'rgb(90 76 69)'
          }}
        /> */}
      </div>
      <ArtistTitleLabel
        artist='Haszari'
        title='Eggs for Tea'
        length={ 100 }
        position={{
          bottom: "0",
        }}
        padding='10em'
        textAlign='right'
        mixerSize='20em'
        colours={{
          background: 'transparent',
          text: 'rgb(2 0 1)',
          mixer: {
            top: 'rgb(251 222 204)',
            middle: 'rgb(159 0 0)',
            bottom: 'rgb(90 76 69)'
          }
        }}
      />
    </div>
  );
}
