import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { SharedLayout } from "../components/layout/SharedLayout"
import { Contact } from "./Contact";
import { Orders } from "./Orders";
import { Vision } from "./Vision";
import { Mission } from "./Mission";
import { Values } from "./Values";
import { Tables } from "./Tables";
import { Chairs } from "./Chairs"; 
import { Miscellaneous } from "./Miscellaneous"; 


const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route path="/about/mission" element={<Mission />}/>
          <Route path="/about/vision" element={<Vision />}/>
          <Route path="/about/values" element={<Values />}/>
          <Route path="/products/tables" element={<Tables />}/>
          <Route path="/products/chairs" element={<Chairs />}/>
          <Route path="/products/miscellaneous" element={<Miscellaneous />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/orders" element={<Orders />}/>
        </Route>
      </Routes>
    </HashRouter>
  );
};

export { AppRoutes };
