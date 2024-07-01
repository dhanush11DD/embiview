import { integration } from "../../constants/ivi"
import Container from "../../layout/Container"
import Section from "../../layout/Section"

function IntegrationSection() {
    return (
        <Section isBlack={true} className="text-white">
            <Container className="">
                <div className="w-full">
                    <div className="w-full mb-24">
                        <p className="blue-heading text-center">{integration.blueHead}</p>
                        <h2 className="heading-lg text-center">{integration.heading}</h2>
                    </div>
                    <div className='grid grid-cols-12 gap-6 py-12'>
                        {
                            integration.listContent.map((item, index) => (
                                <div key={index} className="md:col-span-3 sm:col-span-6 col-span-12 h-[330px] bg-transparent cursor-pointer group perspective">
                                    <div className="relative  preserve-3d group-hover:my-rotate-y-180 w-full lg:h-[270px] md:h-[210px] xl:h-[330px] duration-1000">
                                        <div className="aspect-square md:h-full h-[300px] absolute flex justify-center items-center  flex-col backface-hidden border rounded-[19px] w-full ">
                                            <img src={item.img} className="" />
                                            <p className='text-[#fff] font-lato mt-4 font-normal text-[23px] leading-[37px]'>
                                                {item.title}
                                            </p>
                                        </div>
                                        <div
                                            className="absolute my-rotate-y-180 backface-hidden rounded-[19px] md:h-full h-[300px] bg-gray-100 overflow-hidden">
                                            <div
                                                className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 ">
                                                <p>
                                                    {item.content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default IntegrationSection
