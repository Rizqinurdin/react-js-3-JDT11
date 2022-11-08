import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, DetailProduct } from "@pages";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/detail-product/:id" element={<DetailProduct/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
