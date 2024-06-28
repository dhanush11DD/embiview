import { Icon } from "@iconify/react/dist/iconify.js";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { OTA_Product } from "../../assets/img/products";

const technologyData = [
  {
    id: 1,

    title: "SCHEDULED UPDATES",
    description:
      "Updates can be scheduled for the entire device fleet to avoid operational disruptions.",
  },
  {
    id: 2,

    title: "STAGED UPDATE ROLLOUT",
    description:
      "System updates are incrementally deployed to all Android devices to minimize malfunction risks.",
  },
  {
    id: 3,

    title: "AUTOMATIC FALLBACK",
    description:
      "Ensures devices automatically revert to the last working state if an Android OTA update fails.",
  },
];
export default function OTAProduct() {
  return (
    <Section>
      <Container className="lg:flex-col">
        {/* Content */}
        <div className="flex flex-col lg:items-start">
        <div className="lg:hidden w-[70%] mx-auto mb-8">
            <img src={OTA_Product} alt="OTA_Product" className="object-fit" />
          </div>
          <p className="blue-heading lg:mb-[10px] mb-1">
            Customization and Integration
          </p>
          <h2 className="heading-lg lg:mb-10 mb-8">
            OTA Updates and Device Management
          </h2>
        </div>

        {/* Image */}
        <div className="flex justify-between items-center">
          <div className="inline-flex flex-col rounded-lg lg:gap-6 md:gap-5 gap-3 lg:max-w-xl">
            {technologyData.map((item) => (
              <div
                key={item.id}
                className="rounded-lg p-4 flex items-center gap-4"
                style={{ background: "rgba(138, 170, 209, 0.10)" }}
              >
                <div className="">
                  <Icon
                    icon="mdi:check-bold"
                    className="bg-primary text-white rounded-full p-1 mr-2"
                  />
                </div>
                <div className="">
                  <p className="heading-sm">{item.title}</p>
                  <p className="content-normal text-light-text">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:block hidden">
            <img src={OTA_Product} alt="OTA_Product" className="object-fit" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
