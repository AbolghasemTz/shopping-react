import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import CartProvider from "./context/CartContext/CartProvider";
import CartPage from "./pages/CartPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
      <CartProvider>
    <Layout className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
    </Layout>
      </CartProvider>
  );
}

export default App;
