import { Icon } from "@iconify/react"
import { joinOurs } from "../../constants/career"
import Container from "../../layout/Container"
import Section from "../../layout/Section"
import { valuesImg } from "../../assets/career"

function JoinOursSection() {
    return (
        <Section isBlack={true} className="">
            <Container className="">
                <div className="flex flex-col lg:flex-row gap-32">
                    <div className="w-full lg:w-[60%] text-dark-text">
                        <p className="blue-heading text-center lg:text-start">
                            {joinOurs.blueHead}
                        </p>
                        <h2 className="heading-lg text-center lg:text-start text-white">
                            {joinOurs.heading}
                        </h2>
                        <p className="content-2 text-center lg:text-start">{joinOurs.content}</p>
                        <div className="lg:hidden block w-full lg:w-[40%]">
                        <div className="max-w-[450px] mx-auto">
                            <img src={valuesImg} alt="" />
                        </div>
                    </div>
                        <div className="grid grid-cols-1 mt-10 gap-6 md:grid-cols-2">
                            {
                                joinOurs.listContent.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4">
                                        <div className="text-primary text-2xl">
                                            <Icon icon="teenyicons:tick-circle-solid" />
                                        </div>
                                        <div className="text-dark-text">
                                            <h3 className="heading-sm">{item.title}</h3>
                                            <p className="text-defalt leading-9 tracking-wide">{item.content}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="hidden lg:block w-full lg:w-[40%]">
                        <div className="max-w-[450px] mx-auto">
                            <img src={valuesImg} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default JoinOursSection
