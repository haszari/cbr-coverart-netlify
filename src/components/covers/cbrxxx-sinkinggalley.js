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
        scale={ 110 }
        left='-730px'
        top='-300px'
      />
      <div style={overlay}/>
      <div style={overlayDark}/>
      <div style={blackCorners}/>
      <ArtistTitleLabel
        artist='Haszari + Kathia Rudametkin'
        title='Sinking Galley'
        padding='40px 50px'
        textSize='86px'
        titleTextSize='70%'
        length={ 55 }
        position={{
          bottom: '2%',
          left: 0,
        }}
        mixerSize={ '170px'}
        colours={{
          mixer: {
            top: '#4c302a',
            middle: '#978879',
            bottom: '#c6d2d3',
          },
          background: 'rgba(181, 186, 193, 80%)',
          text: '#1c0000',
        }}
      />
    </div>
  );
}
