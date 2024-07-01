import { specialize } from "../../constants/home.jsx"

function SpecializeSection() {
  return (
    <section className="container-fluied  py-24">
      <div className="container text-light-text ">
        <div className="text-center lg:text-start">
            <p className="blue-heading">{specialize.blueHead}</p>
            <h1 className="heading-lg text-light-heading pb-8 lg:pb-20">{specialize.heading}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2  md:gap-5">
                {
                    specialize.listContent.map((item,index)=>(
                        <div className="py-12 px-6 bg-[#F3F3F9] rounded-3xl flex flex-col items-center text-center" key={index}>
                            <div className="w-[72px] h-[72px] mb-10">
                                <img src={item.icon} alt="" className="w-full h-full" />
                            </div>
                            <h3 className="heading-sm lg:heading-md text-light-heading pb-3">{item.title}</h3>
                            <p className="content-2 text-light-text">{item.content}</p>
                        </div>
                    ))
                }
        </div>
      
    </div>
    </section>
  )
}

export default SpecializeSection
