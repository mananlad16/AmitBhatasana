import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Gallery from './component/Gallery';
import Services from './component/Services';
import ContactUs from './component/ContactUs';
import KnowMore from './component/KnowMore';
import BusinessConsultancy from './component/BusinessConsultancy';
import CorporateStaffTraining from './component/CorporateStaffTraining';
import BoostSartup from './component/BoostSartup';
import BusinessGrowth from './component/BusinessGrowth';
import { BrandingConsultancy } from './component/BrandingConsultancy';



function App() {
  return (

    <div className="App">

    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/gallery' element={<Gallery/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/contactus' element={<ContactUs/>} />
            <Route path='/knowmore' element={<KnowMore/>} />
            <Route path='/businessconsultancy' element={<BusinessConsultancy/>} />
            <Route path='/corporatestaffTraining' element={<CorporateStaffTraining />} />
            <Route path='/boostsartup' element={<BoostSartup />} />
            <Route path='/businessgrowth' element={<BusinessGrowth />} />
            <Route path='/brandingconsultancy' element={<BrandingConsultancy/>} />
          </Routes>
    </BrowserRouter>

      
       
           
    </div>
  );
}

export default App;
