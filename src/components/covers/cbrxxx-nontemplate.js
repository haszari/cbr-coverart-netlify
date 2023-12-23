
import 'styles/whole-earth.scss';

import image from 'images/nontemplate-1.jpeg';

export default function Cover() {
  const background = {
    backgroundImage: `url("${image}")`,
    backgroundPositionY: "-21%",
    backgroundPositionX: "center",
    backgroundSize: "112%",
  };
  const copy = {
    fontSize: "44px",
    position: "absolute",
    textAlign: "right",
    width: "280px",
    color: "rgb(12 2 1)",
    top: "220px",
    backgroundColor: "rgb(241 145 0)",
    paddingRight: '20px',
    paddingBottom: '12px',
    paddingTop: '8px',
    borderRadius: '0 10px 10px 0',
  };
  const signBorder = {
    position: 'absolute',
    left: '-100px',
    top: 2,
    width: 'calc(100% + 100px - 2px)',
    height: 'calc(100% - 4px)',
    border: '3px solid rgb(12 2 1)',
    borderRadius: '10px',
    padding: '8px',
  };

  return (
    <div
      className="cover nontemplate"
    >
      <div className="artwork" style={ background } >
        <div className="copy" style={ copy } >
          <div className="signBorder" style={ signBorder } />
          <div className="artist">Haszari</div>
          <div className="title">Nontemplate</div>
        </div>
      </div>
    </div>
  );
}
