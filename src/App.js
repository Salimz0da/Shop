import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./page/home";
import Product from "./page/product";

function App() {
  return (
    <div className="App">

      {/* <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/product/"}>Product</Link>
      </div> */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
