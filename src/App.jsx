import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

// import { Header } from "./components/Header/Header";
// import { Footer } from "./components/Footer/Footer";

import { Home } from './components/Home/Home';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from './components/Cart/CartView';
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer';
import { ProductSuccess } from './components/adminComponents/ProductSuccess';
import { ProtectedRoute } from './components/ProtectedRoute/ProtctedRoute';
import { Dashboard } from './components/adminComponents/Dashboard/Dashboard'
import { Login } from './components/Login/Login';

import { PublicLayout } from './layouts/PublicLayout';
import { AdminLayout } from './layouts/AdminLayout';


function App() {

  return (
    <>
      {/* <Header />*/}
      {/*<main> */}

      <Routes>
        {/* ---------------- RUTAS PUBLICAS ---------------- */}
        <Route element={<PublicLayout />}>

          <Route path='/' element={<Home />} />
          <Route path='/juegos' element={<ItemListContainer />} />
          <Route path='/juegos/category/:category' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          <Route path='/carrito' element={<CartView />} />

        </Route>

        {/* ---------------- RUTA LOGIN ADMIN -------------- */}
        <Route path='/admin/login' element={<Login />} />

        {/* --------------------- ADMIN -------------------- */}
        <Route
          path='/admin'
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>

          <Route index element={<Navigate to={"dashboard"} />} />
          <Route path='dashboard' element={<Dashboard />} />

          <Route path='products/new' element={<ProductFormContainer />} />
          <Route path='productos/success/:id' element={<ProductSuccess />} />

        </Route>

      </Routes>

      {/* </main>*/}
      {/* <Footer /> */}
    </>
  )
}

export default App
