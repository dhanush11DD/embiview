import { Icon } from "@iconify/react"
import { smartLiving } from "../../constants/home.jsx"
import { smartLive1, smartLive2, smartLive3 } from "../../assets/home"
import { Link } from "react-router-dom"

function SmartLivingSection() {
  return (
    <section className="container-fluid  bg-secondary py-24">
      <div className="container flex justify-between flex-col lg:flex-row gap-40">
        <div className="flex-1 p-10  flex items-center">
          <div className="flex flex-col gap-3">
            <p className="blue-heading ">{smartLiving.blueHead}</p> 
            <h2 className="heading-lg text-white   w-full">{smartLiving.heading}</h2>
            <p className="content-2 text-dark-text">{smartLiving.content}</p>
            <p className="content-2 text-dark-text pb-5">{smartLiving.consten2}</p>
            <Link to='/automation'>
            <button className="btn  btn-hover text-white btn-outline flex gap-3 group w-fit">
            <p className="">Explore More</p>
            <Icon
              icon="heroicons:arrow-up-16-solid"
              className="text-lg rotate-45 group-hover:rotate-90 transition-all duration-75"
            />
          </button>
          </Link>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-6">
            <div className="h-full max-w-[250px] justify-self-end">
                <img src={smartLive2} alt="" className="w-full h-full" />
            </div>
            <div className="row-span-2 max-w-[300px] ">
                <img src={smartLive1} alt="" className="w-full h-full" />
            </div>
            <div className=" h-full max-w-[250px] justify-self-end">
                <img src={smartLive3} alt="" className="w-full h-full" />
            </div>

        </div>
      </div>
    </section>
  )
}

export default SmartLivingSection
