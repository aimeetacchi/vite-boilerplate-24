import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { DashboardPage } from './pages/dashboard';
import { ProductsPage } from "./pages/products";
import Nav from "./components/nav/nav";

function App() {
  return (
    <>
    <Nav />
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/products" element={<ProductsPage />} />
        {/* <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;