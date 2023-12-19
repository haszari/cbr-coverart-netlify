import CBR012 from './components/covers/cbr012-coming-on';
import CBR012WholeEarth from './components/covers/cbr012-coming-on-whole';
import PhoticReflex from './components/covers/cbrxxx-photicreflex';
import Nontemplate from './components/covers/cbrxxx-nontemplate';
import SinkingGalley from './components/covers/cbrxxx-sinkinggalley';
import Mivova from './components/covers/cbrxxx-mivova';
import 'styles/app.scss';

function App() {
  return (
    <>
      <Nontemplate />
      <CBR012WholeEarth />
      <SinkingGalley />
      <Mivova />
      <CBR012 />
    </>
  );
}

export default App;
