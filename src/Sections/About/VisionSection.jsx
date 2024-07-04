import { vision } from "../../constants/about";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { Icon } from "@iconify/react";
function VisionSection() {
  return (
    <>
      {vision.map((item, index) => (
        <Section isBlack={true} key={index} className="text-white px-0">
          <Container className="">
            <div className={`flex flex-col-reverse  gap-14 ${index === 0? "lg:flex-row" : "lg:flex-row-reverse"}`}>
              <div className="lg:w-[40%] w-full self-center">
                <div className="max-w-[550px] mx-auto">
                  <img src={item.img} alt="" className="" />
                </div>
              </div>
                <div className="lg:w-[60%] w-full">
                    <h2 className="heading-lg  text-center lg:text-start mb-3">{item.title}</h2>
                    <div className={`px-2 text-center lg:text-start  py-2  border-gray-400 ${index === 0? "lg:border-l lg:px-8" : "lg:border-r lg:pr-8"}`}>
                        <p className="content-2 text-dark-text mb-3">{item.content1}</p>
                        <p className="content-2 text-dark-text mb-3">{item.content2}</p>
                    </div>
                </div>
            </div>
          </Container>
        </Section>
      ))}
    </>
  );
}

export default VisionSection;
