import uniqid from 'uniqid'
import '../styles/Cart.css'

const Cart = props => {
    const cartItems = props.cart.map(item => {
        return(
            <div key={uniqid()} className='cart-item'>
                <img src={item.image} className='cart-item-image'></img>
                <div className='container'>
                    <div className='cart-item-name'>{item.name}</div>
                    <div className='cart-item-price'>{item.price}</div>
                    <div className='change-quantity-container'>
                        <button className='decrease' data-item={item.id} 
                        data-value={-1} onClick={props.change}>-</button>
                        <div className='cart-item-quantity'>{item.quantity}</div>
                        <button className='increase' data-item={item.id}
                        onClick={props.change} data-value={1}>+</button>
                    </div>
                </div>
            </div>
        );
    })
    return (
        <div className={ props.isVisible ? 'cart' : 'hidden'}>
            <h3>Your Cart</h3>
            <div className='cart-items-container'>
                {cartItems}
            </div>
            <div className='total'>
                <h4>Total: {'$' + props.getTotal()}</h4>
            </div>
            <button className='checkout'>Checkout</button>
            <button className='close' onClick={props.toggleCart}>Close</button>
        </div>
    );
}

export default Cart;