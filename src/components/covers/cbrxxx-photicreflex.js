
import BackgroundImage from 'components/v2-whole-earth/BackgroundImage';

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
      <div className="copy">
        <div className="artist">Haszari</div>
        <div className="title">photic reflex</div>
      </div>
    </div>
  );
}
