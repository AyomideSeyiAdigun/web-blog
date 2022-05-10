import Topbar from "./components/topbar/Topbar";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Settings from "./Pages/settings/Settings";
import Single from "./Pages/single-post/Single";
import Write from "./Pages/write/Write";
import { Routes, Route, Outlet } from "react-router-dom";


function App() {
   
    return ( 
    <>
        <Topbar />
        <Routes >
        <Route exact path = '/' element = { < Home /> }/>
         <Route path = '/settings' element = {< Settings /> } />
          <Route path = '/post/:postId' element = {<Single />}/>
         <Route path = '/write' element = {<Write />}/> 
         <Route path = '/login' element = { <Login /> }/>
          <Route path = '/register' element = { <Register /> } />
      </Routes> 
    </>
    );
}

export default App;