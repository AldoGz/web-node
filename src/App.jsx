import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppCliente from "./template/AppCliente";
import AppPromedio from "./template/AppPromedio";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppCliente />}></Route>
        <Route path="/promedio" element={<AppPromedio />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
