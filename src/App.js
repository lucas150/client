import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import NavbarFlowbite2 from "./Components/Flowbite/NavbarFlowbite2.jsx";
import PhotoSwipe from "./Components/Flowbite/PhotoSwipe.jsx";
import Body from "./Pages/Body/index.js";
import Card2 from "./Components/Flowbite/Card2.jsx";
import Footer from "./Components/Footer/index.jsx";
import Home from "./Pages/Home";
import Contactus from "./Pages/Contact/index.js";
import Products from "./Pages/Products/index.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/products" exact={true} element={<Products />} />
        <Route path="/contactus" exact={true} element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
