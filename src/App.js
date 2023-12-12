import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { ImovelPage } from './pages/ProductPage/ImovelPage';
import { Navbar } from './shared/components/Navbar';
 
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <ImovelPage/> */}
      <HomePage/>
    </div>
  );
}

export default App;
