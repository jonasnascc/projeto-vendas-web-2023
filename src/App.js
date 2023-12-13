import './App.css';
import { Anuncios} from './pages/Anuncios/Anuncios';
import { ImovelPage } from './pages/ProductPage/ImovelPage';
import { Navbar } from './shared/components/Navbar';
 
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <ImovelPage/> */}
      <Anuncios/>
    </div>
  );
}

export default App;
