import { Icon } from "@iconify/react"
import { heroContent } from "../../constants/home.jsx"
import { Header } from "../../components/common"
import { hero1, hero2 } from "../../assets/home"
import { Link } from 'react-router-dom';

function HomeHeroSection() {
  return (
    <section className="container-fluid bg-secondary relative flex w-full justify-center items-center min-h-screen">
      {/* header starts */}
      <div className="header absolute top-0 left-0 w-full  my-8">
        <Header />
      </div>
      {/* header end */}
      <div className="container flex flex-col lg:flex-row w-full">
        <div className="lg:w-[50%] w-full flex-col flex items-start justify-center gap-8">
          <h1 className="heading-xl">{heroContent.mainContent}</h1>
          <p className="heading-md text-dark-text mb-6">
            {heroContent.content}
          </p>
          <Link to='/automation'>
          <button className="btn btn-hover text-white btn-outline flex gap-3 group">
            <p className="">Explore More</p>
            <Icon
              icon="heroicons:arrow-up-16-solid"
              className="text-lg rotate-45 group-hover:rotate-90 transition-all duration-75"
            />
          </button>
          </Link>
        </div>
        <div className="lg:w-[50%] w-full ">
          <div className="max-w-[400px] h-full  mx-auto relative">
            <div className="max-w-[400px] absolute z-10 top-7 -left-14">
              <img src={hero1} alt="Home " className="w-full" />
            </div>
            <div className="max-w-[400px] absolute -top-7 left-10">
              <img src={hero2} alt="Home " className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHeroSection
