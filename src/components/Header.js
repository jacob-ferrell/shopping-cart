import '../styles/Header.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Header = React.forwardRef((props, ref) => {
const linkStyle = { 
    textDecoration: 'none',
    color: 'white' 
};

    return (
        <div className='header'>
            <div className='navbar'>
                <div className='logo'>
                <svg style={{ width: '50px', height: '50px'}} viewBox="0 0 24 24">
                <path fill="currentColor" d="M21,6H3A2,2 0 0,0 1,8V16A2,2 0 0,0 3,18H21A2,2 0 0,0 23,16V8A2,2 0 0,0 21,6M21,16H3V8H21M6,15H8V13H10V11H8V9H6V11H4V13H6M14.5,12A1.5,1.5 0 0,1 16,13.5A1.5,1.5 0 0,1 14.5,15A1.5,1.5 0 0,1 13,13.5A1.5,1.5 0 0,1 14.5,12M18.5,9A1.5,1.5 0 0,1 20,10.5A1.5,1.5 0 0,1 18.5,12A1.5,1.5 0 0,1 17,10.5A1.5,1.5 0 0,1 18.5,9Z" />                </svg>
                <div>Retro Arcade</div>
                </div>
                <div className='link-container'>
                    <div><Link style={linkStyle} to='/'>Home</Link></div>
                    <div><Link style={linkStyle} to='/shop'>Shop</Link></div>
                    <div onClick={props.toggleCart} 
                    className='header-cart'>
                       <svg style={{ width: '35px', height:'35px'}} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 20C19 21.11 18.11 22 17 22C15.89 22 15 21.1 15 20C15 18.89 15.89 18 17 18C18.11 18 19 18.9 19 20M7 18C5.89 18 5 18.89 5 20C5 21.1 5.89 22 7 22C8.11 22 9 21.11 9 20S8.11 18 7 18M7.2 14.63L7.17 14.75C7.17 14.89 7.28 15 7.42 15H19V17H7C5.89 17 5 16.1 5 15C5 14.65 5.09 14.32 5.24 14.04L6.6 11.59L3 4H1V2H4.27L5.21 4H20C20.55 4 21 4.45 21 5C21 5.17 20.95 5.34 20.88 5.5L17.3 11.97C16.96 12.58 16.3 13 15.55 13H8.1L7.2 14.63M8.5 11H10V9H7.56L8.5 11M11 9V11H14V9H11M14 8V6H11V8H14M17.11 9H15V11H16L17.11 9M18.78 6H15V8H17.67L18.78 6M6.14 6L7.08 8H10V6H6.14Z" />
                        </svg> 
                        {props.cartCount()}</div>
                </div>
            </div>
        </div>
    );
})

export default Header;