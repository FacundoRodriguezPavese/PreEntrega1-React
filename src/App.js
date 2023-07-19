import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartWidget from "./components/CartWidget/CartWidget";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar>
          <CartWidget />
        </NavBar>
      </BrowserRouter>
    </div>
  );
}

export default App;
