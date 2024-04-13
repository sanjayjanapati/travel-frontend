import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Package from "./Component/Package/Tour";
import AboutUs from "./Component/AboutUs/about"
import ContactUs from "./Component/ContactUs/contact";
function App(){
return <div>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/package' element={<Package/>}></Route>
      <Route path='/aboutus' element={<AboutUs/>}></Route>
      <Route path='/contactus' element={<ContactUs/>}></Route>
    </Routes>
  </BrowserRouter>
</div>  
}

export default App;