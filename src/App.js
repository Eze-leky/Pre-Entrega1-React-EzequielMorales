import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
  return (
    <>
    <Navbar />

    <ItemListContainer greeting={"Bienvenidos!"} />
    </>
  )
}

export default App;
