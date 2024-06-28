import { Icon } from "@iconify/react/dist/iconify.js";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { Smart_Generation } from "../../assets/img/products";

const features = [
  "Connectivity",
  "Entertainment Integration",
  "Advanced Navigation",
];

export default function SmartProduct() {
  return (
    <Section isBlack={false}>
      <Container className="justify-between lg:items-end items-center lg:gap-x-24">
        {/* Image */}
        <div className="lg:w-[40%] lg:order-1 order-2 flex lg:flex-row flex-col justify-center items-center ">
          <div className="lg:w-full w-[80%] flex flex-grow-0">
            <img
              src={Smart_Generation}
              alt="smart-genration"
              className="object-contain"
            />
          </div>
          <ul className="list-none lg:hidden space-y-5 shrink-0 flex flex-col">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center lg:mb-8">
                <Icon
                  icon="mdi:check-bold"
                  className="bg-primary text-white rounded-full p-1 mr-2"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        {/* Content */}
        <div className="lg:w-[60%] lg:text-start text-center lg:mb-0 mb-10">
          <p className="blue-heading lg:mb-1 mb-4">Next-Generation Smart Systems</p>
          <h2 className="heading-lg lg:mb-2 mb-4">
          Discover Our Transformative Home Automation Vision
          </h2>
          <p className="content-2 text-light-text lg:mb-6">
            Android OS streamlines smart device control with intuitive
            customization, efficient management, voice control, and robust
            security features in home environments. In automotive applications,
            Android OS integrates seamlessly to provide advanced navigation,
            entertainment, and connectivity services, elevating your driving
            experience with sophisticated features and seamless access.
          </p>
          <ul className="list-none lg:block hidden">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center lg:mb-8">
                <Icon
                  icon="mdi:check-bold"
                  className="bg-primary text-white rounded-full p-1 mr-2"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
