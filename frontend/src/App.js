import React from "react";
import Details from "./pages/Details/Details";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";
import Payment from "./pages/Payment/Payment";
import Login from "./pages/Login/Login";
import Search from "./pages/Search/Search";
import Admin from "./pages/Admin/Admin";
import Cart from "./pages/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ContentDisplay from "./components/ContentDisplay/ContentDisplay";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Dashboard} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/payment" Component={Payment} />
        <Route path="/admin" Component={Admin} />
        <Route path="/cart" Component={Cart} />
        <Route path="/detail" Component={Details} />
      </Routes>
    </Router>
  );
}

export default App;
