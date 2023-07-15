import logo from './logo.svg';
import './App.css';
import Header from './components/navbar/header';
import Home from './components/home/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Features from './components/features/features';
import Faq from './components/faq/faq';
import Pricing from './components/pricing/pricing';
import Contactus from './components/contactUs/contactus';
import Support from './components/support/support';
import Terms from './components/terms/terms';
import Privacy from './components/privacy/privacy';
import GetStarted from './components/getStarted/getStarted';
import Refund from './components/refundPolicy/refund';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/features' element={<Features/>}></Route>
        <Route path='/faq' element={<Faq/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
        <Route path='/contact' element={<Contactus/>}></Route>
        <Route path='/support' element={<Support/>}></Route>
        <Route path="/terms" element={<Terms/>}></Route>
        <Route path="/privacy" element={<Privacy/>}></Route>
        <Route path='/get-started' element={<GetStarted/>}></Route>
        <Route path="/refund" element={<Refund/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
