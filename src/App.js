import Login from './components/login/Login';
import Regist from './components/register/regist';
import {BrowserRouter , Routes,Route , Navigate} from "react-router-dom";
import Home from './pages/home/Home';

function App() {
  return (
    <>
    <BrowserRouter>
  <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/Login'element={<Login/>}/>
    <Route path='/Register'element={<Regist/>}/>


  </Routes>
</BrowserRouter>
    
    </>
  );
}

export default App;
