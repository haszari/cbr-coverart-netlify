import ArtistTitleLabel from 'components/ArtistTitleLabel';
import Knob from 'components/knob';

import 'styles/whole-earth.scss';

// import image from 'images/morningtonchurch.jpg';

const scheme = {
  red: '#3a0a0a',
  tawn: '#d0953a',
  green: '#122F13',
  blue: '#1e3c44',
  brown: '#39310b',
}

function AnOwl({ 
  size = 250, 
  colour = scheme.red,
  angles = [ 0, 150 ]
}) {
  return (
    <div style={{ 
      display: 'flex',
      gap: '50px'
    }}>
      <Knob size={size} colors={{ background: colour }} angle={angles[0]} />
      <Knob size={size} colors={{ background: colour }} angle={angles[1]} />
    </div>
  );
}

function OwlsRow({ 
  size = 220, 
  colour = scheme.red,
  angles = [ 0, 150 ],
  gap = 200
}) {

  return (
    <div style={{ 
      display: 'flex',
      gap: `${gap}px`
    }}>
      <AnOwl size={size} colour={colour} angles={angles}/>
      <AnOwl size={size} colour={colour} angles={angles}/>
      <AnOwl size={size} colour={colour} angles={angles}/>
      <AnOwl size={size} colour={colour} angles={angles}/>
      <AnOwl size={size} colour={colour} angles={angles}/>
    </div>
  );
}

function OwlEyesBackground() {

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      gap: '200px'
    }}>
      <OwlsRow colour={scheme.red} />
      <OwlsRow colour={scheme.green} />
      <OwlsRow colour={scheme.brown} />
      <OwlsRow colour={scheme.tawn} />
      <OwlsRow colour={scheme.blue} />
      <OwlsRow colour={scheme.red} />
      <OwlsRow colour={scheme.green} />
      <OwlsRow colour={scheme.brown} />
      <OwlsRow colour={scheme.tawn} />
      <OwlsRow colour={scheme.blue} />
    </div>
  );
}

export default function Cover() {
  const style = {
    backgroundColor: 'black',
  };
  return (
    <div className='cover' style={style}>
      <OwlEyesBackground />
      <ArtistTitleLabel
        artist='Anika D'
        title='Owls'
        padding='40px 60px'
        textSize='92px'
        titleTextSize='80%'
        length={ 44 }
        forceRadius={ true }
        textAlign='right'
        position={{
          left: 0,
          top: '25%',
        }}
        mixerSize={ '220px'}
        colours={{
          mixer: {
            // top: '#ff7700',
            // middle: '#8eb4bc',
            // bottom: '#fffee9',
            top: '#35240c',
            middle: '#84612e',
            bottom: '#ffe0a8',
          },
          background: 'rgb(199 190 205 / 70%)',
          text: '#000100',
        }}
      />
    </div>
  );
}
