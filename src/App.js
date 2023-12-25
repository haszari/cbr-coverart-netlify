import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import CBR012 from "./components/covers/cbr012-coming-on";
import CBR012WholeEarth from "./components/covers/cbr012-coming-on-whole";
import Nontemplate from "./components/covers/cbrxxx-nontemplate";
import SinkingGalley from "./components/covers/cbrxxx-sinkinggalley";
import Mivova from "./components/covers/cbrxxx-mivova";
import PhoticReflex from "./components/covers/cbrxxx-photicreflex";
import LabelTest from "./components/LabelTest";

import "styles/app.scss";

function Home() {
  return (
    <>
      <Link to="/photicreflex">
        <PhoticReflex />
      </Link>
      <Link to="/mivova">
        <Mivova />
      </Link>
      <Link to="/sinkinggalley">
        <SinkingGalley />
      </Link>
      <Link to="/nontemplate">
        <Nontemplate />
      </Link>
      <Link to="/comingon">
        <CBR012WholeEarth />
      </Link>

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
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="test" element={<LabelTest />} />
          <Route path="photicreflex" element={<PhoticReflex />} />
          <Route path="mivova" element={<Mivova />} />
          <Route path="nontemplate" element={<Nontemplate />} />
          <Route path="sinkinggalley" element={<SinkingGalley />} />
          <Route path="comingon" element={<CBR012WholeEarth />} />

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
