import './App.css'
import './responsive.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Acts from './pages/Acts';
import Contact from './pages/Contact';
import Documents from './pages/Documents';
import Notices from './pages/Notices';
import Schemes from './pages/Schemes';
import Tenders from './pages/Tenders';
import Service from './pages/Service';
import MoreImages from './pages/MoreImages';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/act&rules' element={<Acts />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/documents' element={<Documents />} />
        <Route path='/https://champions.gov.in/Government-India/Ministry-MSME-Portal-handholding/msme-problem-complaint-welcome.htm' />
        <Route path='/notices' element={<Notices />} />
        <Route path='/services' element={<Service />} />
        <Route path='/schemes' element={<Schemes />} />
        <Route path='/tenders' element={<Tenders />} />
        <Route path='/more-images' element={<MoreImages />} />
      </Routes>
    
    </>
  )
}

export default App
