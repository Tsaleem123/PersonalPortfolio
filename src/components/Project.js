export const Project = ({ Title, Para, Img , TechList }) => {
  return (
    <div className="flex justify-center my-10">
      <div className="rounded-lg shadow-lg bg-[#2A2D3A] border border-[#374151] max-w-2xl hover:scale-105 hover:shadow-xl hover:border-[#9D8DF1] hover:bg-[#9D8DF1]/10 transition-all duration-300 ease-in-out">
        <img className="max-h-96 mx-auto my-10 rounded-xl shadow-md" src={Img} alt="" />
        
        <div className="px-6 pb-6">
          <div className="text-[#D1D5DB] text-lg font-medium mb-4">{Title}</div>
          <div className="text-[#F9FAFB] text-base leading-relaxed mb-6">
            {Para}
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {TechList.map((item, index) => (
              <span 
                key={index} 
                className="bg-[#374151] text-[#D1D5DB] px-3 py-1 rounded-full text-sm font-medium border border-[#4B5563]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};