
import './app/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './app/Router';
import CartProvider from './app/CartContext';


const App = () => {
  return (

    <CartProvider >
      <Router />
    </ CartProvider >

  )
}
export default App;
