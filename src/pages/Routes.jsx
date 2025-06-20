import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { SharedLayout } from "./SharedLayout";
import { About } from "./About";
import { Products } from "./Products";
import { Contact } from "./Contact";
import { Orders } from "./Orders";
import { History } from "./History";
import { Mission } from "./Mission";
import { Values } from "./Values";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/about/history" element={<History />}/>
          <Route path="/about/mission" element={<Mission />}/>
          <Route path="/about/values" element={<Values />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/orders" element={<Orders />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
