import React from 'react';

function Knob( { 
  size, 
  angle = 0,
  colors = {background: 'white', foreground: "black"}, 
  strokeWidth=0 
} ) {
  const {background, foreground} = colors;
  return (
    <div className="knob" style={{ transform: `rotate(${angle}deg)` }}>
      <svg version="1.1" x="0" y="0" width={size} height={size} viewBox="0, 0, 250, 250">
        <g id="Layer_1">
          <g>
            <g id="path2944">
              <path 
                d="M7.697,98.321 C22.892,32.651 87.952,-8.417 153.012,6.593 C218.073,21.604 258.498,87.008 243.303,152.679 C228.108,218.349 163.048,259.417 97.988,244.407 C32.927,229.396 -7.498,163.992 7.697,98.321 z" 
                fill={ background }/>
              <path 
                d="M7.697,98.321 C22.892,32.651 87.952,-8.417 153.012,6.593 C218.073,21.604 258.498,87.008 243.303,152.679 C228.108,218.349 163.048,259.417 97.988,244.407 C32.927,229.396 -7.498,163.992 7.697,98.321 z" 
                fill-opacity="0" 
                stroke={ foreground }
                stroke-width={ strokeWidth }
              />
            </g>
            <path 
              d="M181.2,168.981 C167.283,162.98 160.821,146.97 166.767,133.222 C172.712,119.474 188.814,113.194 202.731,119.195 C216.648,125.196 223.11,141.206 217.165,154.954 C211.219,168.702 195.117,174.983 181.2,168.981 z" 
                stroke={ foreground }
              id="path2946"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Knob;
