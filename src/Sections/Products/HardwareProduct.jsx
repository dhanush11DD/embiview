import { supportedHardware } from "../../constants/products";
import Tilt from "react-parallax-tilt";
import Container from "../../layout/Container";
import Section from "../../layout/Section";

export default function HardwareProduct() {
  return (
    <Section isBlack={true}>
      <Container className="lg:flex-col md:gap-16">
        {/* Heading */}
        <div className="text-center">
          <p className="blue-heading">{supportedHardware.blueHead}</p>
          <h2 className="heading-lg text-white">{supportedHardware.heading}</h2>
        </div>
        {/* Image Grid */}
        <div className="grid lg:grid-cols-4 grid-cols-2 md:gap-5 gap-4 text-white lg:py-0 py-14">
          {supportedHardware.listContent.map((item, index) => (
            <div key={index} className="
                                 h-[330px] bg-transparent cursor-pointer group perspective">
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
      </Container>
    </Section>
  );
}
