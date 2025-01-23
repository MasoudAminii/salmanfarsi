import { GrUserWorker } from "react-icons/gr";

const page = () => {
  return (
    <div className="flex gap-4">
      <div className="Stats w-2/3 flex-auto rounded-[20px] bg-white p-4">
        <div className="Stat-Title mb-12">
          <h2 className="text-2xl font-bold text-[#425166]">
            School Statistics
          </h2>
          <p className="font-medium text-[#737791]">Last updated: 12:30 PM</p>
        </div>
        <div className="Stats-Conatiner grid grid-cols-4 gap-4">
          <div className="stat flex flex-col gap-2 rounded-2xl bg-[#FA5A7D]/30 p-4">
            <div className="icon w-fit rounded-full bg-[#FA5A7D] p-4 text-white">
              <GrUserWorker size={24} />
            </div>
            <p className="text-xl font-bold">2,000</p>
            <h3 className="text-lg font-semibold text-[#425166]">
              Total students
            </h3>
          </div>
          <div className="stat flex flex-col gap-2 rounded-2xl bg-[#FA5A7D]/30 p-4">
            <div className="icon w-fit rounded-full bg-[#FA5A7D] p-4 text-white">
              <GrUserWorker size={24} />
            </div>
            <p className="text-xl font-bold">2,000</p>
            <h3 className="text-lg font-semibold text-[#425166]">
              Total students
            </h3>
          </div>
          <div className="stat flex flex-col gap-2 rounded-2xl bg-[#FA5A7D]/30 p-4">
            <div className="icon w-fit rounded-full bg-[#FA5A7D] p-4 text-white">
              <GrUserWorker size={24} />
            </div>
            <p className="text-xl font-bold">2,000</p>
            <h3 className="text-lg font-semibold text-[#425166]">
              Total students
            </h3>
          </div>
          <div className="stat flex flex-col gap-2 rounded-2xl bg-[#FA5A7D]/30 p-4">
            <div className="icon w-fit rounded-full bg-[#FA5A7D] p-4 text-white">
              <GrUserWorker size={24} />
            </div>
            <p className="text-xl font-bold">2,000</p>
            <h3 className="text-lg font-semibold text-[#425166]">
              Total students
            </h3>
          </div>
        </div>
      </div>
      <div className="Top-News w-1/3 flex-auto rounded-[20px] bg-white p-4">
        <h2 className="text-2xl font-bold text-[#425166]">Top School News</h2>
      </div>
      <div className="Top-News-Container">
        
      </div>
    </div>
  );
};

export default page;
