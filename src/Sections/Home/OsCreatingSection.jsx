import { osBaner } from "../../assets/home";
import NumberTicker from "../../components/animation/image/NumberTicker.jsx";
import AnimatedTextSection from "../../components/animation/text/AnimatedTextSection.jsx";
import { creatingOs } from "../../constants/home.jsx";

function OsCreatingSection() {
  return (
    <section className="container-fluid  py-24">
      <div className="container flex justify-between flex-col lg:flex-row gap-5">
        <div className="flex-1 p-10 rounded-3xl border border-[#D7DADD] flex items-center">
          <AnimatedTextSection
            isBlack={false}
            blueHead={creatingOs.blueHead}
            heading={creatingOs.heading}
            content={creatingOs.content}
          />
        </div>
        <div className="flex-1 rounded-3xl border border-[#D7DADD]">
          <div className="w-full">
            <img src={osBaner} alt="baner" className="" />
          </div>
          <div className="grid grid-cols-2 p-8 gap-14">
            {creatingOs.gridContent.map((count, index) => (
              <div key={index} className="place-self-center text-center">
                <p className="heading-lg text-black">
                  <NumberTicker value={count.count} delay={1} /> {count.symbols}
                </p>
                <p className="text-default text-light-text">{count.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OsCreatingSection;
