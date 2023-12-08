import React from 'react';

import Background from 'components/v1-cartoon-network/background';
import TitleLine from 'components/v1-cartoon-network/title-line';
import CatalogueNumber from 'components/v1-cartoon-network/catalogue-number';
import MixerLogo from 'components/mixer-logo';


export default function Cover() {
  return (
    <div className="App">
      <>
        <Background className='coming-on'>
          <div className='ep-title'>
            <TitleLine text={ 'It Was Coming On' } />
            {/* <TitleLine text={ 'Coming On' } start='white' /> */}
          </div>
          <MixerLogo colors={ {
            top: '#92f8ff',
            middle: '#aaf5b4',
            bottom: '#db02a9',
          } } />
          <CatalogueNumber index='12' />
        </Background>
      </>
      <div className='elements'>
        <div className='ep-title'>
          <TitleLine text={ 'It Was Coming On' } />
          {/* <TitleLine text={ 'Coming On' } start='white' /> */}
        </div>
        <MixerLogo colors={ {
          top: '#92f8ff',
          middle: '#aaf5b4',
          bottom: '#db02a9',
        } } />
        <CatalogueNumber index='12' />
      </div>
    </div>
  );
}
