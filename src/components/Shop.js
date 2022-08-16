import Header from "./Header";
import Merch from './Merch'
import uniqid from 'uniqid';
import '../styles/Shop.css';

const Shop = props => {

const merch = props.merch.map(item => {
    const { name, price, image, id } = item
    return (
        <Merch name={name} price={price} image={image}
            itemId={id} key ={uniqid()} addToCart={props.addToCart}/>
    );
})
    return (
        <div className='shop'>
            {merch}
        </div>
    );
}

export default Shop;