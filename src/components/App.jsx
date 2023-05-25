import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { DotLoader } from 'react-spinners';
const Contacts = lazy(() => import('../pages/Contacts'));
const Login = lazy(() => import('./LoginForm/LoginForm'));
const Register = lazy(() => import('./RegisterForm/RegisterForm'));
const Home = lazy(() => import('../pages/Home'));

const App = () => {
    const refreshing = useSelector(selectIsRefreshing);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);
    return (
        <>
            {refreshing ? (
                <DotLoader
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        zIndex: '999',
                    }}
                    color="#3682d6"
                    cssOverride={{}}
                    loading
                    size={70}
                />
            ) : (
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path='/authorisation' element={<Register />} />
                        <Route path="/authorisation/login" element={<Login />} />
                    </Route>
                </Routes>
            )}
        </>
    );
};

export default App;
