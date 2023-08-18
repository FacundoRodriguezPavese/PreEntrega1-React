import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path={"/"} element={<ItemListContainer />} />
            <Route exact path={"/category/:categoryId"} element={<ItemListContainer />} />
            <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route exact path={"/cart"} element={<Cart />} />
            <Route exact path={"/checkout"} element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
