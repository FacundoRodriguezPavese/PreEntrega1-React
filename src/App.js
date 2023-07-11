import './App.css';
import Componente1 from "../src/components/Componente1";
import Contador from "../src/components/Contador";
import NavBar from "../src/components/NavBar"
import Carrito from "../src/components/Carrito"

function App() {
  return (
    <div className="App">
      <NavBar>
        <Carrito />
      </NavBar>
      <Contador />
      <Componente1 name="Facundo" description="Le gusta aprender" img="https://w7.pngwing.com/pngs/1008/377/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-black-hair-computer.png"/>
      <Componente1 name="Agustina" description="Se dedica a bailar" img="https://w7.pngwing.com/pngs/1008/377/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-black-hair-computer.png"/>
      <Componente1 name="Jesica" description="Es mi mama" img="https://w7.pngwing.com/pngs/1008/377/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-black-hair-computer.png"/>
    </div>
  );
}

export default App;
