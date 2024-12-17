// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./assets/components/Navbar";
import AboutUs from "./assets/components/about-us";
import ContactPage from "./pages/Contant";
import Market from "./pages/Market";
// import Services from "./assets/components/services";
// import Packages from "./assets/components/packages";
// import ContactUs from "./assets/components/contact-us";
// import Market from "./assets/components/market";

// import Cart from "./assets/components/Cart";
// import "bootstrap/dist/css/bootstrap.min.css";
// import paymentDetails from "./assets/components/PaymentDetails";
// import PaymentDetails from "./assets/components/PaymentDetails";
// import LoginRegister from "./assets/components/LoginRegister";
// import Register from "./assets/components/Register";
// import DoctorRegister from "./assets/components/DoctorRegister";
// import Targetpage from "./assets/components/target-page";
// import Login from "./assets/components/login";
// import PatientRegistration from "./assets/components/Patient";
// import DashboardLayout from "./assets/components/DashboardLayout";
// import DashboardOverview from "./assets/components/DashboardOverview";
// import PatientList from "./assets/components/PatientList";
// import Dashboard from "./assets/components/Dashboard";
// import PatientSummaryCard from "./assets/components/PatientSummaryCard";
// import Appointmentlist from "./assets/components/appointmentlist";
// import Appointmentcard from "./assets/components/apppointmentCard";
// import UserProfile from "./assets/components/userprofile";
// import MessageList from './assets/components/messageList';
// import MessageInput from './assets/components/MessageInput';
// import Messages from './assets/components/messages';
// import ConsultationLayout from "./assets/components/Consultationlayout";
// const App: React.FC = () => {
//   interface Product {
//     id: number;
//     title: string;
//     category: string;
//     price: string;
//     rating: number;
//     imgSrc: string;
//   }

//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   const handleAddToCart = (product: Product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//   };

//   const handleRemoveFromCart = (id: number) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };
  

  

//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Navbar />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/packages" element={<Packages />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//           <Route path="/dashboard" element={<Dashboard />}></Route>

//           <Route
//             path="/market"
//             element={<Market handleAddToCart={handleAddToCart} />}
//           />
//           <Route
//             path="/cart"
//             element={
//               <Cart
//                 cartItems={cartItems}
//                 handleRemoveFromCart={handleRemoveFromCart}
//               />
//             }
//           />
//           <Route
//             path="/PaymentDetails"
//             element={<PaymentDetails cartItems={[]} />}
//           ></Route>

//           <Route path="/LoginRegister" element={<LoginRegister />} />
//           <Route path="/Register" element={<Register />} />
//           <Route path="/DoctorRegister" element={<DoctorRegister />} />
//           <Route path="/target-page" element={<Targetpage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/Patient" element={<PatientRegistration />} />

//           <Route element={<DashboardLayout />}>
//             <Route path="/DashboardOverview" element={<DashboardOverview />} />
//           </Route>
//           <Route element={<Dashboard />}>
//             <Route
//               path="/PatientSummaryCard"
//               element={
//                 <PatientSummaryCard
//                   count={500}
//                   label="Total Patients"
//                   color="blue"
//                 />
//               }
//             />
//           </Route>
//           <Route path="/appointmentlist" element={<Appointmentlist />}>
           
//           </Route>
//           <Route path="/userprofile" element={<UserProfile />} ></Route>
//            <Route path="/messages" element={<Messages />} />
//            <Route path="/Consultationlayout" element={<ConsultationLayout />} />
//         </Routes>
//       </Router>
//     </>
//   );
// };

// export default App;
import Home from "./pages/home"
import About from "./pages/about"
import Service from "./pages/service"
import Packages from "./pages/package"
import Cart from "./pages/Cart"
import Payment from "./pages/Payment";
import ProductCard from "./pages/SingleProduct";
// import PaymentPage from "./pages/Payment";
// import SingleProductPage from "./pages/SingleProduct";
export default function App(){
  return(
    <>
    <Home/>
    {/* <About/> */}
    {/* <AboutUs/> */}
    {/* <Service/> */}
    {/* <Packages/> */}
    {/* <ContactPage/> */}
    {/* <Market/> */}
    {/* <Cart/> */}
    {/* <PaymentPage/> */}
    {/* <SingleProductPage/> */}
    {/* <Payment/> */}
    {/* <ProductCard/> */}

    </>
  )
}