import { Icon } from "@iconify/react/dist/iconify.js";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { useState } from "react";
import { faq } from "../../constants/products";

function FaqSection() {
    const [selected, setSelected] = useState(null)
    const togle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <Section isBlack={false}>
            <Container className="flex-col md:flex-row md:gap-16">
                <div className="md:w-[40%] py-8 ">
                    <h1 className="heading-lg lg:mb-2 mb-4 ">
                        {faq.heading}
                    </h1>
                    <p className="content-2 text-light-text lg:mb-6 ">
                        {faq.content}
                    </p>
                     <button
                  type="submit"
                  className="btn btn-hover mt-10 md:mb-6 btn-outline flex gap-3 lg:mx-0   group"
                >
                  <p className="text-[#4541FE] group-hover:text-white">
                    Contact us
                  </p>
                  <Icon
                    icon="heroicons:arrow-up-16-solid"
                    className="text-lg rotate-45 group-hover:rotate-90 transition-all duration-75 text-primary group-hover:text-white"
                  />
                </button>
                </div>
                <div className="md:w-[60%] py-8">
                    {
                        faq.query.map((da, ind) => (
                            <div className=""
                                key={ind}
                            >
                                <div
                                    onClick={() => togle(ind)}
                                    className="flex justify-center items-center gap-4 cursor-pointer">
                                    <div className="vl border-l-4 h-[40px] border-[#4541FE] "></div>
                                    <h1

                                        className="text-[#253241] font-lato text-[20px] font-bold leading-[29px] ">
                                        {da.heading}
                                    </h1>
                                    {
                                        selected === ind ?  <Icon className="ml-auto" icon="oui:arrow-up" /> :  <Icon className="ml-auto" icon="oui:arrow-down" />
                                    }
                                </div>
                                <h2 className={selected === ind ? 'proDrop show content-2 text-light-text lg:mb-6 mt-3 ' : 'proDrop content-2 text-light-text lg:mb-6 mt-3'}>
                                    {da.answer}
                                     </h2>
                                <div className="py-6">
                                    <hr className="" />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>

                </div>
            </Container >
        </Section >
    )
}

export default FaqSection