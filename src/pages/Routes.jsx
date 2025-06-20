import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { SharedLayout } from "./SharedLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/orders" element={<Orders />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
