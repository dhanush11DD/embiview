import { osBaner } from "../../assets/home";
import { creatingOs } from "../../constants/home.jsx";

function OsCreatingSection() {
  return (
    <section className="container-fluid  py-24">
      <div className="container flex justify-between flex-col lg:flex-row gap-5">
        <div className="flex-1 p-10 rounded-3xl border border-[#D7DADD] flex items-center">
          <div className="flex flex-col gap-2">
            <p className="blue-heading ">{creatingOs.blueHead}</p>
            <h2 className="heading-lg text-light-heading pb-2  xl:w-[70%] lg:w-[80%] w-full">{creatingOs.heading}</h2>
            <p className="content-2 text-light-text">{creatingOs.content}</p>
          </div>
        </div>
        <div className="flex-1 rounded-3xl border border-[#D7DADD]">
          <div className="w-full">
            <img src={osBaner} alt="baner" className="" />
          </div>
          <div className="grid grid-cols-2 p-8 gap-14">
            {creatingOs.gridContent.map((count, index) => (
              <div className="place-self-center text-center">
                 <p className="heading-lg ">{count.count}</p>
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
