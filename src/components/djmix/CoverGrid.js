
// import CBRMixerLogo from "./CBRMixerLogo";
import "./CoverGrid.scss";


function CoverGridItem({ imageUrl }) {
  return (
    <div className="release">
      <img src={imageUrl} alt="" />
    </div>
  );
}


export default function CoverGrid({ tracks }) {
  if (!tracks) {
    return "No tracks";
  }

  const gapEm = 1;
  const square = Math.ceil( Math.sqrt( tracks.length ) );
  const gridStyles = {
    gridTemplateColumns: `repeat(${ square }, 1fr)`,
    gridColumnGap: `${ gapEm }em`,
    gridRowGap: `${ gapEm }em`,
  }


  const cells = tracks.map((tune, index) => {
    const imageUrl = tune?.spotify?.coverArtUrl;
    return (
      <CoverGridItem
        key={index}
        id={index}
        imageUrl={imageUrl}
      />
    )
  });


  return (
    <div className='CoverGrid-wrappper'>
      <div className='CoverGrid-container' style={ gridStyles }>
      { cells }
      </div>
    </div>
  );
}
