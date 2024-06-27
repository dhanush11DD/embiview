import { Route, Routes } from 'react-router-dom';
import './App.css'
import {AutomationScreen, HomeScreen} from './Screens';
import { Footer } from './components/common';
import ScrollToTop from './utils/ScrollToTop';

function App() {

  return (
    <>
    <ScrollToTop>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/automation' element={<AutomationScreen />} />
      </Routes>
      <Footer />
    </ScrollToTop>
    </>
  )
}

export default App
 