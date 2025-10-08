import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

// import CBR012 from './components/covers/cbr012-coming-on';
import CBR012WholeEarth from './components/covers/cbr012-coming-on-whole';
import Nontemplate from './components/covers/cbrxxx-nontemplate';
import SinkingGalley from './components/covers/cbrxxx-sinkinggalley';
import GalleyListing from './components/covers/cbrxxx-galleylisting';
import Mivova from './components/covers/cbrxxx-mivova';
import PhoticReflex from './components/covers/cbr018-photicreflex';
import PhoticMiddlemarch from './components/covers/cbr018b-photicmiddlemarch';
import MomCircles from './components/covers/cbrxxx-momcircles';
import FoundationSlab from './components/covers/cbr009-foundation-slab-whole';
import RedlineTrain from './components/covers/cbr010-redline-train';
import Parkplatz from './components/covers/cbrxxx-parkplatz';
import Gumdrop from './components/covers/cbrxxx-gumdrop';
import Manas from './components/covers/cbrxxx-manas';
import PopupCorridor from './components/covers/cbrxxx-popupcorridor';
import KipKapsalon from './components/covers/cbrxxx-kipkapsalon';
import BadReception from './components/covers/cbrxxx-badreception';
import FlyingSauces from './components/covers/cbrxxx-flyingsauces';
import WetPaint from './components/covers/cbrxxx-wetpaint';
import AnikaOwls from './components/covers/cbrxxx-anika-d-owls-forest';
import HaszariOwls from './components/covers/cbrxxx-anika-d-owls-forest-haszari';

import DJMixInfo from './components/djmix/djmix-info';

import LabelTest from './components/LabelTest';

import 'styles/app.scss';

function Home() {
  return (
    <>
      <Link to='/howls'>
        <HaszariOwls />
      </Link>
      <Link to='/owls'>
        <AnikaOwls />
      </Link>
      <Link to='/wetpaint'>
        <WetPaint />
      </Link>
      <Link to='/flyingsauces'>
        <FlyingSauces />
      </Link>
      <Link to='/badreception'>
        <BadReception />
      </Link>
      <Link to='/kipkapsalon'>
        <KipKapsalon />
      </Link>
      <Link to='/popupcorridor'>
        <PopupCorridor />
      </Link>
      <Link to='/manas'>
        <Manas />
      </Link>
      <Link to='/photicmiddlemarch'>
        <PhoticMiddlemarch />
      </Link>
      <Link to='/galleylisting'>
        <GalleyListing />
      </Link>
      <Link to='/sinkinggalley'>
        <SinkingGalley />
      </Link>
      <Link to='/gumdrop'>
        <Gumdrop />
      </Link>
      <Link to='/parkplatz'>
        <Parkplatz />
      </Link>
      <Link to='/redlinetrain'>
        <RedlineTrain />
      </Link>
      <Link to='/foundationslab'>
        <FoundationSlab />
      </Link>
      <Link to='/momcircles'>
        <MomCircles />
      </Link>
      <Link to='/photicreflex'>
        <PhoticReflex />
      </Link>
      <Link to='/mivova'>
        <Mivova />
      </Link>
      <Link to='/nontemplate'>
        <Nontemplate />
      </Link>
      <Link to='/comingon'>
        <CBR012WholeEarth />
      </Link>

      <SinkingGalley />
      <Mivova />
      {/* <CBR012 /> */}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='howls' element={<HaszariOwls />} />
          <Route path='owls' element={<AnikaOwls />} />
          <Route path='flyingsauces' element={<FlyingSauces />} />
          <Route path='badreception' element={<BadReception />} />
          <Route path='kipkapsalon' element={<KipKapsalon />} />
          <Route path='popupcorridor' element={<PopupCorridor />} />
          <Route path='manas' element={<Manas />} />
          <Route path='photicmiddlemarch' element={<PhoticMiddlemarch />} />
          <Route path='galleylisting' element={<GalleyListing />} />
          <Route path='sinkinggalley' element={<SinkingGalley />} />
          <Route path='sinkinggalleyfoison' element={<SinkingGalley
            title='Sinking Galley (Foison remix)'
          />} />
          <Route path='gumdrop' element={<Gumdrop />} />
          <Route path='parkplatz' element={<Parkplatz />} />
          <Route path='test' element={<LabelTest />} />
          <Route path='redlinetrain' element={<RedlineTrain />} />
          <Route path='foundationslab' element={<FoundationSlab />} />
          <Route path='photicreflex' element={<PhoticReflex />} />
          <Route path='momcircles' element={<MomCircles />} />
          <Route path='mivova' element={<Mivova />} />
          <Route path='nontemplate' element={<Nontemplate />} />
          <Route path='comingon' element={<CBR012WholeEarth />} />

          <Route path='dj/:ymlfile' element={<DJMixInfo />} />

          {/* Using path='*'' means 'match anything', so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
