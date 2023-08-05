import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path={"/"} element={<ItemListContainer />} />
          <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route exact path={"/categoria/:id"} element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
