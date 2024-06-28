
import { HeroProduct, OTAProduct, TechProduct,  SmartProduct, AppProduct, HardwareProduct, ScrollProduct } from '../Sections/Products'

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
      
    </div>
  )
}

export default ProductScreen
