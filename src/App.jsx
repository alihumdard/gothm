import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
// import SourcingChinaPage from "./Components/Services/ServicesLinkPages/SourcingChina";
// import PreProductionPage from "./Components/Services/ServicesLinkPages/Pre-Production";
// import DuringProductionPage from "./Components/Services/ServicesLinkPages/During-Production";
// import PreShipmentPage from "./Components/Services/ServicesLinkPages/Pre-Shipment";
// import SampleInspectionServicePage from "./Components/Services/ServicesLinkPages/Sample-Inspection-Service";
// import SampleConsolidationServicePage from "./Components/Services/ServicesLinkPages/Sample-Consolidation-Service";
// import FreightForwardingPage from "./Components/Services/ServicesLinkPages/Freight-Forwarding";
// import Amazon3PLPage from "./Components/Services/ServicesLinkPages/Amazon-3PL";
// import ProductPhotographyPage from "./Components/Services/ServicesLinkPages/Product-Photography";
// import ProductVideographyPage from "./Components/Services/ServicesLinkPages/Product-Videography";
// Components Import

// Yahan humne individual Hero/Section2 ki jagah Combined 'Landing' uthaya hai
import LandingH from "./Components/Home/LandingH";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Jab koi website khole (root path), to Landing page dikhao */}
          <Route index element={<LandingH />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
