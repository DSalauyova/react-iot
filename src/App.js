//importe generic styles
import './App.css';
//import components
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Welcome from './components/Welcome/Welcome';
import FormPage from './components/Form/FormPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './logIn/Log_in';
import SignUp from './signUp/SignUp';
import AllRides from './allRides/AllRides';
import Home from './home/Home';
import Dasboard from './components/Dashboard/Dashboard';
 
//notion component
// function App() {
//   return JSX;
// } 
// OR
// const App = function() {
//   return JSX;
// }
 
const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        
        {/* <Dashboard /> */}
        
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/login' element={<Login />} />        
            <Route path='/all-rides' element={<AllRides />} />
            <Route path='/dashboard' element={<Dasboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;