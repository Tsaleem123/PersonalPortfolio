export const Project = ({ Title, Para, Img , TechList }) => {
  return (
    <div className="flex justify-center my-10 ">
      <div className="rounded-lg shadow-lg bg-white max-w-2xl hover:scale-110 transition duration-300 ease-in-out">
        <img className="max-h-96 mx-auto  my-10 rounded-xl" src={Img} alt="" />
        <div className="text-gray-700 text-base my-10">{Title}</div>
        <div className="text-gray-900 text-xl leading-tight font-medium mb-2 my-10">
          {Para}
        </div>

        <ul className="flex-auto justify-center  ">
          {TechList.map((item) => (
            <li key="{item}" >{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
