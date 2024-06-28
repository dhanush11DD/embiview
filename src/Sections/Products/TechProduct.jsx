import { Icon } from "@iconify/react/dist/iconify.js";
import Section from "../../layout/Section";
import Container from "../../layout/Container";

const techProductData = [
  {
    id: 1,
    icon: "carbon:ibm-cloud-direct-link-2-connect",
    title: "Advanced Android Integration",
    description:
      "Embedded systems solutions with optimized Android OS integration.",
  },
  {
    id: 2,
    icon: "icon-park-outline:application-menu",
    title: "Personalized Android OS",
    description:
      "Custom Android development for unique business needs and requirements.",
  },
  {
    id: 3,
    icon: "ion:hardware-chip-outline",
    title: "Reliable Updates and Maintenance",
    description:
      "OS updates and maintenance for secure, up-to-date, and reliable devices.",
  },
  {
    id: 4,
    icon: "ic:outline-tips-and-updates",
    title: "Advanced Hardware Integration",
    description:
      "Hardware specialization for optimal device performance and integration.",
  },
];

export default function TechProduct() {
  return (
    <Section isBlack={true}>
      <Container className="md:gap-y-24 lg:flex-col">
        {/* Heading */}
        <div className="flex flex-col text-center lg:mb-0 mb-10">
          <p className="blue-heading">Our Services</p>
          <h2 className="heading-lg text-white">Tech at Your Fingertips</h2>
        </div>
        {/* Grid */}
        <div className="grid lg:grid-cols-4 ">
          {techProductData.map((item) => (
            <div
              key={item.id}
              className={`relative flex flex-col justify-start items-start p-5 ${item.id < 4 ? "lg:border-r-[0.6px] lg:border-b-0 border-b-[1px] border-[#60636D]" : ""} ${item.id === 1  ? "rounded-tl-[10px] lg:rounded-tl-none lg:rounded-bl-[10px] md:rounded-none lg:rounded-tr-none rounded-tr-[10px]" : item.id ===4 ? "lg:rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]" : ""} `}
              style={{
                background: "linear-gradient(180deg, #161C3B 0%, #2B1B46 100%)",
              }}
            >
              {/* Icon */}
              <div className="bg-gray-700 p-2 mb-6">
                <Icon
                  icon={item.icon}
                  color="white"
                  fontSize={20}
                  className=" text-white "
                />
              </div>
              {/* Content */}
              <div className="flex flex-1 flex-col justify-between">
                <p className="content-1 text-white md:mb-2">{item.title}</p>
                <p className="content-2 text-light-text">{item.description}</p>
              </div>
              {
                item.id >= 2 && item.id <= 4 && (
                  <div className="bg-gray-900 p-2 rounded-full absolute top-1/2 lg:block hidden" style={{ right: "calc(100% - 18px)"}}>
                  <Icon icon={"mdi:arrow-right"} color="white" className="text-white "  />
                  </div>
                )
              }
              {
                item.id >= 1 && item.id <= 3 && (
                  <div className="bg-gray-900 p-2 rounded-full absolute -bottom-5 lg:hidden z-10" style={{ right: "calc(50% - 18px)"}}>
                  <Icon icon={"mdi:arrow-down"} color="gray" className="text-gray-500 "  />
                  </div>
                )
              }
              
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
