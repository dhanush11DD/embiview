import { Route, Routes } from 'react-router-dom';
import './App.css'
import {AutomationScreen, HomeScreen, ProductScreen} from './Screens';
import { Footer } from './components/common';
import ScrollToTop from './utils/ScrollToTop';

function App() {

  return (
    <>
    <ScrollToTop>
      <Routes>
        <Route path='/' element={<AutomationScreen />} />
        {/* <Route path='/automation' element={<AutomationScreen />} />
        <Route path='/products' element={<ProductScreen />} /> */}
      </Routes>
      <Footer />
    </ScrollToTop>
    </>
  )
}

export default App
 