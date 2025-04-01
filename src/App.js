import Login from './components/login/Login';
import Regist from './components/register/regist';
import {BrowserRouter , Routes,Route } from "react-router-dom";
import Home from './pages/home/Home';
import ResetPassword from './components/resitPassword/ResetPassword';
import CreateNewPassword from './components/createNewPass/CreateNewPassword';
import ResetSuccessful from './components/createNewPass/ResetSuccessful';

function App() {
  
  return (
    <>
    <BrowserRouter>
  <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/Login'element={<Login/>}/>
    <Route path='/Register'element={<Regist/>}/>
    <Route path='/CreateNewPassword'element={<CreateNewPassword/>}/>
    <Route path='/ResetPassword'element={<ResetPassword/>}/>
    <Route path='/CreateNewPassword'element={<CreateNewPassword/>}/>
    <Route path='/ResetSuccessful'element={<ResetSuccessful/>}/>


  </Routes>
</BrowserRouter>
    
    </>
  );
}

export default App;
