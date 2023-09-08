import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import App from '../App';
import AuthPage from '../Features/Authentication/AuthPage';
import Home from '../Pages/Home';
import Login from '../Features/Authentication/components/Login';
import SingIn from '../Features/Authentication/components/SingIn';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='authentication' element={<AuthPage />}>
        <Route path='' element={<Login />} />
        <Route path='sing-in' element={<SingIn />} />
      </Route>
    </Route>
  )
);
