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
import Redeem from "pages/redeem/RedeemPage";
import "leaflet/dist/leaflet.css";
import OrderStatus from "pages/order/orderStatus";
import TrackOrder from "pages/order/TrackOrder"; // Import trang tra cứu đơn hàng
import Menu from "pages/menu/Menu";
import DrinkDetailPage from "pages/menu/DetailDrink";
import {PopupProvider} from "context/PopupContext";
import DemoPayment from "pages/payment/DemoPayment";
import PaymentResult from "pages/payment/PaymentResult";

import "./App.css";

import { menuItems } from "pages/menu/menuData";
import Checkout from "pages/checkout/Checkout";
import ModalAddress1 from "components/modal/ModalAddress1";
import ModalAddress2 from "components/modal/ModalAddress2";
import ModalProfile from "components/modal/ModalProfile";
import ModalTrackOrder1 from "components/modal/ModalTrackOrder1";
import ModalTrackOrder2 from "components/modal/ModalTrackOrder2";
import VoucherPage from "pages/voucher/VoucherPage";
import ListOrderPage from "pages/order/ListOrderPage";
import UserProfile from "pages/user/UserProfile";
import CartPage from "pages/cart/CartPage";
import FlashSalePage from "pages/flashsale/FlashSalePage";

function App() {
  return (
    <PopupProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/set-new-password" element={<SetNewPassword />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shop/list" element={<ShopListPage />} />
          <Route path="/shop/detail/:_id" element={<ShopDetailPage />} />

          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/drink/detail/:id" element={<DrinkDetailPage />} />
          <Route path="/order/:orderId" element={<OrderStatus />} />
          <Route path="/order" element={<ListOrderPage />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/redeem" element={<Redeem />} />
          <Route path="/menu/*" element={<Menu />} />

          <Route path="/cart" element={<CartPage/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/demo-payment" element={<DemoPayment/>} />
          <Route path="/payment-result" element={<PaymentResult/>} />
          <Route path="/flashsale" element={<FlashSalePage/>} />
        </Routes>
      </Router>
      <VoucherPage/>
    </PopupProvider>
  );
}

export default App;
