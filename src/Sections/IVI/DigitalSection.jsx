import { Icon } from "@iconify/react";
import { digitalSec } from "../../constants/ivi";
import Container from "../../layout/Container";
import Section from "../../layout/Section";

function DigitalSection() {
  return (
    <>
      {digitalSec.map((item, index) => (
        <Section isBlack={true} key={index} className="text-white px-0">
          <Container className="">
            <div className="flex flex-col-reverse lg:flex-row gap-14">
              <div className="lg:w-[40%] w-full self-center">
                <div className="max-w-[550px] mx-auto">
                  <img src={item.img} alt="" className="" />
                </div>
              </div>
              <div className="lg:w-[60%] w-full">
                <h2 className="heading-lg  text-center lg:text-start mb-3">
                  {item.heading}
                </h2>
                <div className=" px-2 text-center lg:text-start lg:px-8 py-2 lg:border-l border-gray-400">
                  <p className="content-2 text-dark-text mb-3">
                    {item.content}
                  </p>
                  <ul className="mt-8">
                    {item.listContent.map((item, index) => (
                      <li key={index} className=" flex items-center mb-3 gap-4">
                        <div className="text-primary text-xl">
                          <Icon icon="teenyicons:tick-circle-solid" />
                        </div>
                        <p className="content-2 text-dark-text ">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ))}
    </>
  );
}

export default DigitalSection;
