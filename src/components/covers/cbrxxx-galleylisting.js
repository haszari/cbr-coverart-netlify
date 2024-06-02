import ArtistTitleLabel from 'components/ArtistTitleLabel';
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';

import 'styles/whole-earth.scss';

import image from 'images/SinkingGalleySneer.jpeg';

export default function Cover() {
  const overlay = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at center, transparent 0, transparent 40%, #978879 95%)',
  };

  const overlayDark = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at center, transparent 0, transparent 50%,  black 80%)',
    opacity: 0.25,
  };

  const blackCorners = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle, transparent 0px, transparent 70%, rgb(24, 0, 0) 90%)',
    opacity: 0.23,
  };

  return (
    <div className='cover sinking-galley'>
      <BackgroundImage
        image={ image }
        scale={ 250 }
        left='-3620px'
        top='-2150px'
      />
      {/* <div style={overlay}/>
      <div style={overlayDark}/>
      <div style={blackCorners}/> */}
      <ArtistTitleLabel
        artist='Haszari'
        title='Galley Listing'
        padding='40px 50px'
        textSize='86px'
        // titleTextSize='50%'
        length={ 35 }
        position={{
          bottom: '5%',
          right: 0,
        }}
        mixerSize={ '200px'}
        colours={{
          mixer: {
            top: '#040000',
            middle: '#260000',
            bottom: '#562c15',
          },
          background: '#94795f',
          text: '#f0f9ff',
        }}
      />
    </div>
  );
}
