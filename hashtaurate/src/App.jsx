import './App.css';
import Categorias from './components/Categorias';
import Cards from "./components/Cards";
import Banner from './components/banner';



function App() {

  return (
    <div className="container">
      
      <Banner />

      <Categorias />

      <Cards />

    </div>
  );

}

export default App;