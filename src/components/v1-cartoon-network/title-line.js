import React from 'react';

function EPTitleLetter( { letter, onBlack } ) {
  let classes = 'grid-letter ';
  if ( letter === ' ' ) {
    classes += ' transparent-background';
  }
  else {
    classes += onBlack ? 'black-background' : 'white-background';
  }
  return ( <span className={ classes }><span className='letter'>{ letter }</span></span> )
}

function TitleLine( { text, start } ) {
  const modBlack = ( start === 'white' ? 1 : 0 );
  const letters = Array.from( text ).map( ( letter, i ) => {
    return ( <EPTitleLetter letter={ letter } onBlack={ i % 2 === modBlack } key={ i } /> );
  } );
  return (
    <div className='title-line'>
      { letters }
    </div>
  );
}

export default TitleLine;
