import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import merch from './merchandise';

function App() {

  const [cart, setCart] = useState([]);

  const [cartVisible, setCartVisible] = useState(false)

  const cartDropdownRef = useRef(null);

{ /*  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = event => {
    
    console.log(cartDropdownRef.current, event.target, cartDropdownRef.current.dataset.visible)
    if (cartDropdownRef.current && cartDropdownRef.current.dataset.visible && !cartDropdownRef.current.contains(event.target)) {
      setCartVisible(false);
    } 
  } */}

  const addToCart = event => {
    const itemid = event.target.dataset.itemid;
    let item = merch.find(item => item.id == itemid);
    const itemInCart = cart.find(item => item.id == itemid);
    if (itemInCart) {
      item = {
        ...item,
        quantity: itemInCart.quantity + 1
      }
      let updatedCart = [...cart];
      updatedCart[cart.findIndex(inCart => inCart.id == item.id)] = item;
      setCart(updatedCart);
    } else {
      item = {
        ...item,
        quantity: 1
      }
      setCart([...cart, item])
    }
    
    
  }

  const getCartCount = () => {
    return cart.map(e => e.quantity).reduce((a, b) => a + b, 0);
  }

  const getTotal = () => {
    return cart.map(e => e.quantity * e.price).reduce((a, b) => a + b, 0).toFixed(2);
  }

  const changeQuantity = event => {
    const itemid = event.target.dataset.item;
    let item = cart.find(item => item.id == itemid);
    let changedQuantity = item.quantity + Number(event.target.dataset.value);
    if (changedQuantity < 0) changedQuantity = 0;
    item = {
      ...item,
      quantity: changedQuantity
    }
    let updatedCart = [...cart];
    updatedCart[cart.findIndex(inCart => inCart.id == item.id)] = item;
    setCart(updatedCart.filter(item => item.quantity > 0))
  }

  const openCart = event => setCartVisible(true);

  const closeCart = event => setCartVisible(false);

  const handleCartClick = event => setCartVisible(!cartVisible);
  
  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header style={{ fontFamily: 'Exo 2' }} items={cart} cartCount={getCartCount} toggleCart={handleCartClick}/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop merch={merch}
            addToCart={addToCart}/>} />
        </Routes>
        <Cart cart={cart} getTotal={getTotal} change={changeQuantity} isVisible={cartVisible}
        closeCart={closeCart} ref={cartDropdownRef}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
