
import 'styles/whole-earth.scss';

import image from 'images/mivovawave.jpeg';

export default function Cover() {
  const background = {
    backgroundImage: `url("${image}")`,
  };


  return (
    <div className="cover mivova">
      <div className="artwork"  style={ background }>
        <div className="copy">
          <div className="artist">Haszari</div>
          <div className="title">Mivova</div>
        </div>
      </div>
    </div>
  );
}
