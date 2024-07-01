
import { HeroProduct, OTAProduct, TechProduct,  SmartProduct, AppProduct, HardwareProduct, ScrollProduct } from '../Sections/Products'
import ContactCard from '../components/common/ContactCard'
import { contactSec } from '../constants/products'

function ProductScreen() {
  return (
    <div className='w-full overflow-x-hidden'>
      <HeroProduct/>
      <SmartProduct/>
      <ScrollProduct/>
      <OTAProduct/>
      <TechProduct/>
      <AppProduct/>
      <HardwareProduct/>
      <ContactCard contactSec={contactSec} />
    </div>
  ) 
}

export default ProductScreen
