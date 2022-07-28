import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Shared/Navbar';
import Home from './components/Home/Home';
import RequireAuth from './components/Login/Register';
import Updateprofile from './components/Updateprofile/Updateprofile';
import Manageusers from './components/Manageusers/Manageusers';
import Managerole from './components/Managerole/Managerole';
import Targetset from './components/Targetset/Targetset';
import Nexttask from './components/Nexttask/Nexttask';
import Exposureupdate from './components/Exposureupdate/Exposureupdate';
import Statusupdate from './components/Statusupdate/Statusupdate';
import Login from './components/Login/Login';
import Register from './components/Login/Register';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>

          <Route index element={<Updateprofile />}></Route>
          <Route path='manageusers' element={<Manageusers></Manageusers>}></Route>
          <Route path='managerole' element={<Managerole></Managerole>}></Route>
          <Route path='targetset' element={<Targetset></Targetset>}></Route>
          <Route path='nexttask' element={<Nexttask></Nexttask>}></Route>
          <Route path='exposureupdate' element={<Exposureupdate></Exposureupdate>}></Route>
          <Route path='statusupdate' element={<Statusupdate></Statusupdate>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
