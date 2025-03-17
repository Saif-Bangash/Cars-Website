import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Sidebar from "./Section/FormComponent/Sidebar";  // Global sidebar for all pages
 import Homepage from "./Section/HomeSection/Homepage";
import Register from "./Section/FormComponent/Register";
import Login from "./Section/FormComponent/Login";
import Aboutpage from "./Section/AboutSection/Aboutpage";
import BlogNews from "./Section/BlogSection/BlogNews";
import Contact from "./Section/ContactSection/Contact";
import Forgatepassword from "./Section/FormComponent/Forgatepassword";
import Genesis from "./Section/HomeSection/CardsFloder/Genesis";
import AudiList from "./Section/HomeSection/CardsFloder/AudiList";
import BMWDetails from "./Section/HomeSection/CardsFloder/BMWDetails";
import SubaruDetails from "./Section/HomeSection/CardsFloder/SubaruDetails";
import FuelCostUAE from "./Section/HomeSection/FuelFloderLink/FuelCostUAE";
import EVPickupTrucks from "./Section/HomeSection/FuelFloderLink/EVPickupTrucks";
import CarBuyingTipsUAE from "./Section/HomeSection/FuelFloderLink/CarBuyingTipsUAE";
import Dashboard from "./Section/FormComponent/Dashboard";
import Settings from "./Section/FormComponent/Settings";
import Profile from "./Section/FormComponent/Profile";  
import TableOfContents from "./Section/BlogSection/TableOfContents";

// Layout for pages that should use the global sidebar
const GlobalSidebarLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />  {/* Global Sidebar */}
      <div className="flex-1 ">{children}</div>  {/* Main content */}
    </div>
  );
};

 

// Layout for pages where only Header is shown, no sidebar or footer
const HeaderOnlyLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes that do not need sidebar or footer */}
        <Route path="/register" element={<HeaderOnlyLayout><Register /></HeaderOnlyLayout>} />
        <Route path="/login" element={<HeaderOnlyLayout><Login /></HeaderOnlyLayout>} />
        <Route path="/forgatepassword" element={<HeaderOnlyLayout><Forgatepassword /></HeaderOnlyLayout>} />

        {/* Routes that should display Header and Footer */}
        <Route path="/" element={<><Header /><Homepage /><Footer /></>} />
        <Route path="/about-us" element={<><Header /><Aboutpage /><Footer /></>} />
        <Route path="/blogs" element={<><Header/><BlogNews/><Footer /></>} />
        <Route path="/contacts" element={<><Header /><Contact /><Footer /></>} />

        <Route path="/genesis" element={<><Header /><Genesis /><Footer /></>} />
        <Route path="/audiList" element={<><Header /><AudiList /><Footer /></>} />
        <Route path="/bmwlist" element={<><Header /><BMWDetails /><Footer /></>} />
        <Route path="/Subaru" element={<><Header /><SubaruDetails /><Footer /></>} />

        <Route path="/fuelscost" element={<><Header /><FuelCostUAE /><Footer /></>} />
        <Route path="/pickup" element={<><Header /><EVPickupTrucks /><Footer /></>} />
        <Route path="/carbuying" element={<><Header /><CarBuyingTipsUAE /><Footer /></>} />
 
         
         <Route path="table" element={<><Header/><TableOfContents /></>} />
           
        {/* Routes that should use the Global Sidebar (for admin-like pages) */}
        <Route path="/dashboard" element={<GlobalSidebarLayout><Header /><Dashboard /></GlobalSidebarLayout>} />
        <Route path="/settings" element={<GlobalSidebarLayout><Header /><Settings /></GlobalSidebarLayout>} />
        <Route path="/profile" element={<GlobalSidebarLayout><Header /><Profile /></GlobalSidebarLayout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
