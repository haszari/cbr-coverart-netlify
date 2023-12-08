import React from 'react';

function CatalogueNumber( { index } ) {
  // we use letter o for our zeros in cat number
  const cat = 'cbr' + index.padStart( 3, '0' );
  return (
    <div className='catalogue-number'>
      { cat }
    </div>
  );
}

export default CatalogueNumber;
