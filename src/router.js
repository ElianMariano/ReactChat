import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Chat from './pages/Chat';
import Layout from './pages/Layout';
import Reset from './pages/Reset';
import Register from './pages/Register';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>} path='/'>
                    <Route element={<Login/>} index/>
                    <Route element={<Chat/>} path="/chat"/>
                    <Route element={<Reset/>} path="/reset"/>
                    <Route element={<Register/>} path="/registrar"/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
