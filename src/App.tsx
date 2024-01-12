import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { DashboardPage } from './pages/dashboard';
import { ProductsPage } from "./pages/products";
import Nav from "./components/nav/nav";
import Drawer from "./components/drawer/drawer"

function App() {
  return (
    <>
    <Nav />
    <Drawer />
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;