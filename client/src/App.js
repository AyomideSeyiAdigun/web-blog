import Topbar from "./components/topbar/Topbar";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Settings from "./Pages/settings/Settings";
import Single from "./Pages/single-post/Single";
import Write from "./Pages/write/Write";
import { Routes, Route} from "react-router-dom";


function App() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return ( 
    <>
        <Topbar />
        <Routes >
        <Route exact path = '/' element = { < Home /> }/>
         <Route path = '/settings' element = {user ?  < Settings /> :<Login />  } />
          <Route path = '/post/:postId' element = {<Single />}/>
         <Route path = '/write' element = {user ? <Write /> : <Login />}/> 
         <Route path = '/login' element = { user ? <Home/> :<Login /> }/>
          <Route path = '/register' element = {user ? <Home/> : <Register /> } />
      </Routes> 
    </>
    );
}

export default App;