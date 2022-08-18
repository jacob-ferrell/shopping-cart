import '../styles/Home.css';
import { Link } from 'react-router-dom';


const Home = props => {
    return (
        <div className='home'>
            <div className='home-window'>
                <div>Welcome to Retro Arcade!</div><div>The place for all your retro gaming needs!</div>
                <button className='shop-now'><Link style={{textDecoration: 'none', color: 'white' }} to='/shop'>Shop Now</Link></button>
            </div>
        </div>
    );
}

export default Home;