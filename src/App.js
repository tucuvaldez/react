import NavBar from "./components/NavBar";
import './app/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Hygge Vinoteca" />
    </>
  );
}

export default App;
