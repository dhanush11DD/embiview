import { Icon } from "@iconify/react";
import { about } from "../../assets/about-us";
import { aboutUs } from "../../constants/about";
import Container from "../../layout/Container";
import Section from "../../layout/Section";

function AboutUsSection() {
  return (
    <Section isBlack={false} className="px-0">
      <Container className="">
        <div className="">
          <div className="">
            <p className="blue-heading mb-2 text-center lg:text-start">
              {aboutUs.blueHead}
            </p>
            <h2 className="heading-lg text-light-heading text-center lg:text-start">
              {aboutUs.heading}
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-28">
            <div className=" w-full lg:w-[60%]">
              <p className="pb-6 content-2 text-center lg:text-start">
                {aboutUs.content}
              </p>
              <div className="max-w-[430px] mb-6 block mx-auto lg:hidden ">
                <img src={about} alt="about us" className="" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
                {aboutUs.listContent.map((item, index) => (
                  <div
                    key={index}
                    className="flex col-span-1 flex-row items-start gap-4"
                  >
                    <div className="text-primary text-2xl mt-2">
                      <Icon icon="teenyicons:tick-circle-solid" />
                    </div>
                    <div className="">
                      <p className="heading-md text-light-heading">{item.title}</p>
                      <p className="content-2 lg:text-start">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="max-w-[430px] hidden lg:block">
                <img src={about} alt="about us" className="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default AboutUsSection;
