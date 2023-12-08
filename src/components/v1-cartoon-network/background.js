import React from 'react';
import classnames from 'classnames';

function Background( { color, children, className } ) {
  const styles = {
    backgroundColor: color,
  };
  const classes = classnames( 'background', className );
  return (
    <div className={classes} style={ styles }>
      { children }
    </div>
  );
}

export default Background;
