import './App.css';
import {Component} from 'react'
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Products from './Pages/Products';
import Product from './Pages/Product';
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'
import CartIcon from './components/CartIcon';
import store from './Store/store'
import { Provider } from 'react-redux';

class App extends Component{

  render(){
  
   return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">CatsStore</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">Cart</Link>
                </li>
              </ul>  
            </div>
            <CartIcon />
          </div>
          
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/products/:id" element={<Product />}/>
        </Routes>
      </div>
    </BrowserRouter>
   ) 
  }
}

function AppWithStore(){
  return <Provider store={store}>
    <App />
  </Provider>
}
export default AppWithStore;
