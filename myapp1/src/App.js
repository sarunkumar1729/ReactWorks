import Home from "./pages/Home";
import ExampleComponent from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Layout from "./pages/Layout";
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Notfound from "./pages/Notfound";
// import Component1 from "./pages/Test";
import Notfound from "./pages/Notfound";
import RegistrationForm from "./pages/form";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='contact' element={<ExampleComponent/>}/>
          <Route path='signin' element={<SignIn/>}/>
          <Route path='signup' element={<SignUp/>}/>
          <Route path="form" element={<RegistrationForm/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;