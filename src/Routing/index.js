import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Auth/Login/Login";
import Signup from "../Pages/Auth/Signup/Signup";
import Forgotpassword from "../Pages/Auth/Forgotpassword/Forgotpassword";
import Pagenotfound from "../Pages/Auth/Pagenotfound";
import Dashboard from "../Pages/Dashboard/Dashboard";

function Allroutes() {

    return (
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Forgotpassword" element={ <Forgotpassword />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="*" element = {<Pagenotfound />} />
        </Routes>
      </>
    );
  }
  
  export default Allroutes;