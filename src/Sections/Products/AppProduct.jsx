import { Icon } from "@iconify/react/dist/iconify.js";
import { securityFeatures  } from "../../constants/products.jsx";
import Container from "../../layout/Container";
import Section from "../../layout/Section";

export default function AppProduct() {
  return (
    <Section>
      <Container className="lg:flex-col md:gap-[88px]">
        {/* Heading */}
        <div className="lg:text-start text-center lg:mb-0 mb-8">
          <p className="blue-heading">{securityFeatures.blueHead}</p>
          <h2 className="heading-lg">{securityFeatures.heading}</h2>
        </div>
        {/* grid */}
        <div className="grid md:grid-cols-3 grid-cols-2  gap-16 md:gap-y-12">
          {securityFeatures.listContent.map((feature) => (
            <div key={feature.id} className="inline-flex flex-col lg:items-start items-center lg:gap-0 gap-2">
              <div className="bg-primary p-2 rounded-lg aspect-square flex items-center justify-center md:mb-3">
                <Icon
                  icon={feature.icon}
                  className="text-white text-center"
                  fontSize={40}
                />
              </div>
              <div className="flex flex-1 flex-col mt-auto">
                <h3 className="heading-sm lg:text-start text-center">{feature.title}</h3>
                <p className="content-1 text-light-text lg:block hidden">{feature.content}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
