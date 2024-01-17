import NavBar from "./components/navbar/NavBar";
import LandingPage from "./pages/landingPage/LandingPage.jsx";
import MansSection from "./pages/manSection/MansSection.jsx";
import WomansSection from "./pages/womanPage/WomansSection.jsx";
import ManDiscount from "./pages/manDiscountSection/ManDiscountPage.jsx";
import WomanDiscount from "./pages/womanDiscountPage/WomanDiscountPage.jsx";
import Product from "./pages/productPage/ProductsPage.jsx";
import Cart from "./pages/cartSection/Cart.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HideNavBar from "./context/HideNavBar.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HideNavBar>
          <NavBar />
        </HideNavBar>

        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/man" element={<MansSection />}></Route>
          <Route path="/man/discount" element={<ManDiscount />}></Route>
          <Route path="/woman" element={<WomansSection />}></Route>
          <Route path="/woman/discount" element={<WomanDiscount />}></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
