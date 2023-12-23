import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import CBR012 from './components/covers/cbr012-coming-on';
import CBR012WholeEarth from './components/covers/cbr012-coming-on-whole';
import PhoticReflex from './components/covers/cbrxxx-photicreflex';
import Nontemplate from './components/covers/cbrxxx-nontemplate';
import SinkingGalley from './components/covers/cbrxxx-sinkinggalley';
import Mivova from './components/covers/cbrxxx-mivova';
import 'styles/app.scss';





function Home() {
  return (
    <>
      <Link to="/mivova">
        <Mivova />
      </Link>
      <Link to="/sinkinggalley">
        <SinkingGalley />
      </Link>
      <Link to="/nontemplate">
        <Nontemplate />
      </Link>

      <CBR012WholeEarth />
      <SinkingGalley />
      <Mivova />
      <CBR012 />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="mivova" element={<Mivova />} />
          <Route path="nontemplate" element={<Nontemplate />} />
          <Route path="sinkinggalley" element={<SinkingGalley />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
