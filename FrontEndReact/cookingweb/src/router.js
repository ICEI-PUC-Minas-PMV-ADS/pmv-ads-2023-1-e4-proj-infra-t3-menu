import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Login from './pages/Login.js';
import Register from './pages/Register.js';
import ViewOrders from './pages/ViewOrders.js';
import ViewProducts from './pages/ViewProducts.js';
import App from "./App.js";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<ViewProducts />} />
                <Route path="/orders" element={<ViewOrders />} />                    
            </Routes>
        </BrowserRouter>
    );
}