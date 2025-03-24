import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "pages/auth/login/LoginPage.js";
import SignUp from "pages/auth/signup/SignUpPage.js";
import VerifyEmail from "pages/auth/signup/Verify.js";
import ForgotPassword from "pages/auth/forgotPw/ForgotPassword.js";
import PasswordReset from "pages/auth/forgotPw/PasswordReset.js";
import SetNewPassword from "pages/auth/forgotPw/SetNewPassword.js";
import HomePage from "pages/homepage/HomePage.js";
import ShopListPage from "pages/shop/ShopListPage";
import ShopDetailPage from "pages/shop/DetailShop";
import Menu from "pages/menu/Menu";
import OrderStatus from "pages/order/orderStatus";
import ModalAddress1  from "components/modal/ModalAddress1";
import "./App.css";

import { menuItems } from "pages/menu/menuData";
import ModalAddress2 from "components/modal/ModalAddress2";
import ModalTrackOrder1 from "components/modal/ModalTrackOrder1";
import ModalTrackOrder2 from "components/modal/ModalTrackOrder2";
import ModalProfile from "components/modal/ModalProfile";
import Checkout from "pages/checkout/Checkout";

function App() {
  // const menuRoutes = menuItems.flatMap((item) => {
  //   const routes = [];
  //   routes.push(<Route key={item.path} path={item.path} element={<Menu />} />); // Thêm route cho parent path
  //   if (item.subMenu) {
  //     item.subMenu.forEach((subItem) => {
  //       routes.push(
  //         <Route key={subItem.path} path={subItem.path} element={<Menu />} />
  //       );
  //     });
  //   }
  //   return routes;
  // });
  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<HomePage />} />
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/signup" element={<SignUp />} />
  //       <Route path="/verify-email" element={<VerifyEmail />} />
  //       <Route path="/forgot-password" element={<ForgotPassword />} />
  //       <Route path="/password-reset" element={<PasswordReset />} />
  //       <Route path="/set-new-password" element={<SetNewPassword />} />

  //       <Route path="/shop/list" element={<ShopListPage />} />
  //       <Route path="/shop/detail/:_id" element={<ShopDetailPage />} />

  //       <Route path="/order-status" element={<OrderStatus />} />

  //       {/* Thêm các Route động vào đây */}
  //       {menuRoutes}
  //     </Routes>
  //   </Router>
  // );
  return (
    <Checkout/>
  )
}

export default App;
