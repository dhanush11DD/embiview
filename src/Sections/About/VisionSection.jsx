import { vision } from "../../constants/about";
import Container from "../../layout/Container";
import Section from "../../layout/Section";

function VisionSection() {
  return (
    <>
      {vision.map((item, index) => (
        <Section isBlack={true} key={index} className="text-white px-0">
          <Container className="">
            <div className="flex flex-col-reverse lg:flex-row gap-14">
              <div className="lg:w-[40%] w-full self-center">
                <div className="max-w-[550px] mx-auto">
                  <img src={item.img} alt="" className="" />
                </div>
              </div>
                <div className="lg:w-[60%] w-full">
                    <h2 className="heading-lg  text-center lg:text-start mb-3">{item.title}</h2>
                    <div className=" px-2 text-center lg:text-start lg:px-8 py-2 lg:border-l border-gray-400">
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
