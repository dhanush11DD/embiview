import { team } from "../../assets/about-us";
import { outTeams } from "../../constants/about";
import Container from "../../layout/Container";
import Section from "../../layout/Section";

function OurTeamSection() {
  return (
    <Section isBlack={false} className="px-0">
      <Container className="">
        <div className="w-full">
          <div className="pb-16">
            <p className="blue-heading text-center">{outTeams.blueHead}</p>
            <h1 className="heading-lg text-light-heading text-center">
              {outTeams.heading}
            </h1>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
             {
                outTeams.listContent.map((item,index)=>(
                    <div className="aspect-square rounded-lg bg-[#CCDDF6]" key={index}>
                        <div className="max-w-[300px] flex items-end pt-4 lg:pt-8 h-full justify-center">
                          <img src={team} alt="" className=" h-full" />
                        </div>
                    </div>
                ))
             }

             <div className="aspect-square bg-[#CCDDF6] rounded-lg flex flex-col gap-5 lg:gap-11 justify-center items-center">
                    <h1 className="lg:text-2xl text-xs md:text-lg font-bold text-center">Join our dynamic <br /> team!</h1>
                    <button className="btn btn-fill">
                        Apply Now
                    </button>
             </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default OurTeamSection;
