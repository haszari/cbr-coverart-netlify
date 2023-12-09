
import 'styles/whole-earth.scss';

import image from 'images/street-art-eye-coming-on.jpg';
import MixerLogo from 'components/mixer-logo';

export default function Cover() {
  const background = {
    backgroundImage: `url("${image}")`,
    backgroundPositionX: "-180px",
    backgroundPositionY: "-6px",
    backgroundSize: "1385px",
  };
  const copy = {
    bottom: '2%',
    left: '60%',
    width: '40%',
    textAlign: 'left',
    backgroundColor: '#efffff',
    paddingLeft: '10px',
    paddingBottom: '4px',
    borderRadius: '10px 0 0 10px',
  };
  const mixer = {
    position: 'absolute',
    right: '-8px',
    bottom: '9px',
  };

  return (
    <div className="cover">
      <div className="artwork" style={ background }>
        <div className="copy" style={ copy } >
          <div className="artist">Haszari</div>
          <div className="title">It Was Coming On</div>
        </div>
        <div style={ mixer } >
          <MixerLogo colors={ {
            top: '#92f8ff',
            middle: '#aaf5b4',
            bottom: '#db02a9',
          } } />
        </div>
      </div>
    </div>
  );
}
