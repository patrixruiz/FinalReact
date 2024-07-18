import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ProductsComponents/ItemListContainer'
import NavBar from './components/NavBarComponents/NavBar'
import ItemDetailContainer from './components/ProductsDetails/ItemDetailContainer';
import CategoryListContainer from './components/ProductsComponents/CategoryListContainer';
import CartComponent from './components/CartComponent/CartComponent';
import CartContextComponentProvider from './components/CartContextComponent/CartContextComponent';
import CheckoutComponent from './components/CheckoutComponent/CheckoutComponent';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
    
    <BrowserRouter>
      <CartContextComponentProvider>
        <NavBar/>
        <ToastContainer theme='light'/>
        <Routes>
          <Route exact path ="/" element = {<ItemListContainer greeting={"LA CICLO, LA MEJOR COMIDA!"}/>} />
          <Route exact path ="/category/:id" element = {<CategoryListContainer greeting={"¡Categorías!"}/>} />
          <Route exact path ="/item/:id" element = {<ItemDetailContainer greeting={"¡Más detalles!"}/>} />
          <Route exact path ="/CartComponent" element = {<CartComponent/>} />
          <Route exact path ="/CheckoutComponent" element = {<CheckoutComponent/>} />
        </Routes>
      </CartContextComponentProvider>
    </BrowserRouter>
    
    </>
  );
}

export default App