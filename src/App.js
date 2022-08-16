import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';

function App() {

  const [cart, setCart] = useState([]);

  const [cartVisible, setCartVisibile] = useState(false)
  

  const merch = [
    {
      name: '10X Poop',
      price: 420.69,
      image: 'https://cdn.shopify.com/s/files/1/0702/7837/files/2017May14_3_1024x1024_094052a6-0243-4cd9-8584-ddb3f378e432_240x240.png?v=1646060577',
      id: 'item001',
    },
    {
      name: 'Pee',
      price: 0.69,
      image: 'https://dam.northwell.edu/m/1a44c3f331e1d917/Drupal--TheWell_what-urine-color-means_GettyImages-872424350.jpg',
      id: 'item002',
    }
  ];

  const addToCart = event => {
    let item = merch.find(item => item.id == event.target.id);
    const itemInCart = cart.find(item => item.id == event.target.id);
    if (itemInCart) {

      item = {
        ...item,
        quantity: itemInCart.quantity + 1
      }
    } else {
      item = {
        ...item,
        quantity: 1
      }
    }
    setCart([...cart.filter(inCart => inCart.id != item.id), item])
  }

  const getCartCount = () => {
    return cart.map(e => e.quantity).reduce((a, b) => a + b, 0);
  }

  const getTotal = () => {
    return cart.map(e => e.quantity * e.price).reduce((a, b) => a + b, 0);
  }

  const changeQuantity = event => {
    console.log(event.target.dataset.item)
    let item = cart.find(item => item.id == event.target.dataset.item);
    let changedQuantity = item.quantity + Number(event.target.dataset.value);
    if (changedQuantity < 0) changedQuantity = 0;
    item = {
      ...item,
      quantity: changedQuantity
    }
    let updatedCart = [...cart];
    updatedCart[cart.findIndex(inCart => inCart.id == item.id)] = item;
    setCart(updatedCart)
  }

  const toggleCart = event => setCartVisibile(!cartVisible);
  


  return (
    <div className="App">
      
      <BrowserRouter>
        <Header items={cart} cartCount={getCartCount} toggleCart={toggleCart}/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop merch={merch}
            addToCart={addToCart}/>} />
        </Routes>
        <Cart cart={cart} getTotal={getTotal} change={changeQuantity} isVisible={cartVisible}
        toggleCart={toggleCart}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
