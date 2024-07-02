import { Route, Routes } from 'react-router-dom';
import './App.css'
import {AboutScreen, AutomationScreen, CareerScreen, ContactScreen, HomeScreen, IVIScreen, ProductScreen} from './Screens';
import { Footer } from './components/common';
import ScrollToTop from './utils/ScrollToTop';

function App() {

  return (
    <>
    <ScrollToTop>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/automation' element={<AutomationScreen />} />
        <Route path='/products' element={<ProductScreen />} />
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/career' element={<CareerScreen />} />
        <Route path='/ivi' element={<IVIScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
      </Routes>
      <Footer />
    </ScrollToTop>
    </>
  )
}

export default App
 