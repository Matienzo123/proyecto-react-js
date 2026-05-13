import './App.css';
import { Header } from "./components/Header/Header";
import { Home } from './components/Home/Home';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Footer } from "./components/Footer/Footer";
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <main>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/juegos' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          <Route path='/carrito' element={<h1>Carrito</h1>} />
        </Routes>

      </main>
      <Footer />
    </>
  )
}

export default App
