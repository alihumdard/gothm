import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import LandingH from "./Components/Home/LandingH";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingH />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
