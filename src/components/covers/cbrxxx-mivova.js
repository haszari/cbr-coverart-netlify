
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';

import 'styles/whole-earth.scss';

import image from 'images/mivovawave.jpeg';

export default function Cover() {
  return (
    <div className="cover mivova">
      <BackgroundImage
        image={ image }
      />
      <div className="copy">
        <div className="artist">Haszari</div>
        <div className="title">Mivova</div>
      </div>
    </div>
  );
}
