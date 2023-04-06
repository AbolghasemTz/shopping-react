import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CartProvider from "./context/CartContext/CartProvider";
import CartPage from "./pages/CartPage";
import Layout from "./components/layout/Layout";
import Products from "./pages/Products";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <CartProvider>
      <Layout className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;
