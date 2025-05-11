import ArtistTitleLabel from 'components/ArtistTitleLabel';

import 'styles/whole-earth.scss';

export default function Cover() {
  return (
    <div className='cover'>
      {/* <BackgroundImage
        image={ image }
      /> */}
      <ArtistTitleLabel
        artist='Haszari'
        title='Flying Sauces'
        length={50}
        position={{
          top: '20%',
          left: '25%',
          right: '25%',
        }}
        textAlign='right'
        mixerSize='300px'
        borderWidth='10px'
        colours={{
          // background: 'transparent',
        }}
      />
    </div>
  );
}
