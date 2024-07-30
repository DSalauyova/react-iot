//importe generic styles
import './App.css';
//import components
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllRides from './allRides/AllRides';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './home/Home';
import Login from './logIn/Log_in';
import SignUp from './signUp/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/all-rides' element={<AllRides />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;