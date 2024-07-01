import {  connecting } from "../../constants/about"
import Container from "../../layout/Container"
import Section from "../../layout/Section"

function ConnectingSection() {
  return (
    <Section isBlack={false} className="px-0">
        <Container className="">
            <div className="w-full">
                <div className="pb-20">
                    <p className="blue-heading text-center">{connecting.blueHead}</p>
                    <h1 className="heading-lg text-light-heading text-center">{connecting.heading}</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 text-light-text">
                    {
                        connecting.listContent.map((item, index) => (
                            <div key={index} className="flex flex-col items-start gap-3 lg:gap-4">
                                <div className="flex flex-row items-start ">
                                    <div className=" text-2xl text-primary bg-[#EDF4FF] p-3 rounded-lg">
                                        {item.icon}
                                    </div>
                                    <div className="ml-4">
                                        <p className="heading-sm text-black">{item.title}</p>
                                        <p className="content-2 lg:text-start">{item.content}</p>
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

export default ConnectingSection
