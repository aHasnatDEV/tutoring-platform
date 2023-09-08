import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import App from '../App';
import AuthPage from '../Features/Authentication/AuthPage';
import Home from '../Pages/Home';
import Login from '../Features/Authentication/components/Login';
import SingInRoll from '../Features/Authentication/components/SingIn/SingInRoll';
import SingInForm from '../Features/Authentication/components/SingIn/SingInForm';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='authentication' element={<AuthPage />}>
        <Route path='' element={<Login />} />
        <Route path='sing-roll' element={<SingInRoll />} />
        <Route path='sing-form' element={<SingInForm />} />
      </Route>
    </Route>
  )
);
