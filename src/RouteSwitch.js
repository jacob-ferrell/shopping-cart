import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Home from './components/Home';
import Shop from './components/Shop';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;
