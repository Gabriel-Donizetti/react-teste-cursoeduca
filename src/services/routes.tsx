import { Route, Routes } from "react-router-dom";
import { Login } from "../components/loginpage";
import { SignIn } from "../components/signinpage";

const MainRoutes = () => {
   return(
       <Routes>
           <Route path="/"  element = { <Login />} />
           <Route path="/signinPage" element = { <SignIn/> } />
           <Route path="/dashboardPage" element = { <SignIn/> } />
       </Routes>
   )
}

export { MainRoutes };