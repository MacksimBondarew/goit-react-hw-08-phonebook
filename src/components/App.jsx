import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { lazy } from 'react';
const Contacts = lazy(() => import('../components/Contacts/Contacts'));
const Login = lazy(() => import('../components/LoginForm/LoginForm'));
const Register = lazy(() => import('../components/RegisterForm/RegisterForm'));
const Home = lazy(() => import('../pages/Home'));

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />}></Route>
                </Route>
            </Routes>
        </>
    );
};

export default App;
