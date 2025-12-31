import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout/Layout";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Aboutus from "./Pages/Aboutus/Aboutus";
import BlogDetailsPage from "./Pages/Blog/BlogDetailsPage";
import BlogPage from "./Pages/Blog/BlogPage";
import MutualFunds from "./Pages/Products/MutualFunds";
import LifeInsurancePage from "./Pages/Products/LifeInsurancePage";
import ChildEducationCalculator from "./Pages/Planning/ChildEducationCalculator";
import ChildWeddingCalculator from "./Pages/Planning/ChildWeddingCalculator";
import DreamHomeCalculator from "./Pages/Planning/DreamHomeCalculator";
import DreamCarCalculator from "./Pages/Planning/DreamCarCalculator";
import SIPCalculator from "./Pages/Planning/SIPCalculator";
import RetirementCalculator from "./Pages/Planning/RetirementCalculator";
import DreamVacationCalculator from "./Pages/Planning/DreamVacationCalculator";
import GeneralInsurancePage from "./Pages/Products/GeneralInsurancePage";
import PageNotFound from "./Pages/ErrorPages/NotFound";
import ServicesOverview from "./Pages/Services/ServicesOverview";
import GoalsLayout from "./Layout/GoalsLayout";
import ProductDetailPage from "./Pages/Products/MutualFunds/ProductDetailPage";
import LifeInsurance from "./Pages/Products/LifeInsurance";
import PortfolioManagementServ from "./Pages/Services/PortfolioManagementServ";
import FixedDeposits from "./Pages/Services/FixedDeposits";
import Bonds from "./Pages/Services/Bonds";
import LiquiLoans from "./Pages/Services/LiquiLoans";
import MutualFund from "./Pages/Services/MutualFund";
import LifeInsuranceserv from "./Pages/Services/LifeInsuranceserv";
import CarInsurance from "./Pages/Services/CarInsurance";
import WcInsurance from "./Pages/Services/WcInsurance";
import MarineInsurance from "./Pages/Services/MarineInsurance";
import LiabilityInsurance from "./Pages/Services/LiabilityInsurance";
import FactoryInsurance from "./Pages/Services/FactoryInsurance";
import GalleryPage from "./Pages/Gallery/GalleryPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="services/:id" element={<Services />} />
        <Route path="/products/mutual-funds" element={<MutualFunds />} />
        <Route
          path="/products/life-insurance"
          element={<LifeInsurancePage />}
        />
        <Route
          path="/products/general-insurance"
          element={<GeneralInsurancePage />}
        />
        <Route path="/goals" element={<GoalsLayout />}>
          <Route
            path="child-education"
            element={<ChildEducationCalculator />}
          />
          <Route path="child-wedding" element={<ChildWeddingCalculator />} />
          <Route path="dream-home" element={<DreamHomeCalculator />} />
          <Route path="dream-car" element={<DreamCarCalculator />} />
          <Route path="dream-vacation" element={<DreamVacationCalculator />} />
          <Route path="retirement-plan" element={<RetirementCalculator />} />
          <Route path="sip-plan" element={<SIPCalculator />} />
        </Route>
        <Route
          path="services/services-overview"
          element={<ServicesOverview />}
        />
        <Route path="services/mutual-funds" element={<MutualFund />} />
        <Route path="services/life-insurance" element={<LifeInsuranceserv />} />
        <Route path="services/car-insurance" element={<CarInsurance />} />
        <Route
          path="services/factory-insurance"
          element={<FactoryInsurance />}
        />
        <Route path="services/insurance" element={<LifeInsurance />} />
        <Route
          path="services/portfolio-management"
          element={<PortfolioManagementServ />}
        />
        <Route path="services/fixed-deposits" element={<FixedDeposits />} />
        <Route path="services/wc-insurance" element={<WcInsurance />} />
        <Route path="services/marine-insurance" element={<MarineInsurance />} />
        <Route
          path="services/liability-insurance"
          element={<LiabilityInsurance />}
        />
        <Route path="services/bonds" element={<Bonds />} />
        <Route path="services/liquiloans" element={<LiquiLoans />} />
        <Route path="blog" element={<BlogPage />} />{" "}
        <Route path="/blog/:slug" element={<BlogDetailsPage />} />
        <Route path="/product/:slug" element={<ProductDetailPage />} />
        <Route path="contactus" element={<Contact />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
