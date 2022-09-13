import NavBar from "./components/NavBar";
import './app/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Hygge Vinoteca" />
      <ItemDetailContainer />
    </>
  );
}

export default App;
