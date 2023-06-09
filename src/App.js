import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import Home from './pages/Home';

import Login from './pages/Login';
import Signup from './pages/Signup';

import NavBar from './components/NavBar';

export const fetch_URL = process.env.REACT_APP_URL

function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <div className='pages'>
          <Routes>
          <Route 
          path='/'
          element={ user ? <Home /> : <Navigate to="/login" />} />
          <Route 
          path='/login'
          element={ !user ? <Login /> : <Navigate to="/" />} />
          <Route 
          path='/signup'
          element={ !user ? <Signup /> : <Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
