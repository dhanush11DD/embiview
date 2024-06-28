import { supportedHardware } from "../../constants/products";
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
          {supportedHardware.listContent.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center aspect-square border border-[#2E3B4C] rounded-[20px] p-4"
              style={{ background: "radial-gradient(50% 50% at 50% 50%, #213B63 0%, #101722 100%)" }}
            >
              <img src={item.image} alt={item.title} className="lg:max-w-[160px] lg:min-h-[160px] max-h-[80px] min-h-[80px] mb-9"/>
              <p className="heading-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
