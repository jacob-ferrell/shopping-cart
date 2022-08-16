import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = props => {


    return (
        <div className='header'>
            <div className='navbar'>
                <div className='logo'>Logo</div>
                <div className='link-container'>
                    <div><Link to='/'>Home</Link></div>
                    <div><Link to='/shop'>Shop</Link></div>
                    <div onClick={props.toggleCart} 
                    className='header-cart'>Cart {props.cartCount()}</div>
                </div>
            </div>
        </div>
    );
}

export default Header;