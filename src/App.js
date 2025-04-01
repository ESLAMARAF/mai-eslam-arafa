import Login from './components/login/Login';
import Regist from './components/register/regist';
import {BrowserRouter , Routes,Route , Navigate} from "react-router-dom";
import Home from './pages/home/Home';
import OtpVerificaton from './components/otpVerificaton/OtpVerificaton';
import ResetPassword from './components/resitPassword/ResetPassword';
import CreateNewPassword from './components/createNewPass/Create New Password';

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


  </Routes>
</BrowserRouter>
    
    </>
  );
}

export default App;
