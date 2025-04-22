/**
 * Defines a simple Navbar for the project.
 */
export const Navbar = () => {
  return (
<nav className="bg-navColor">
  <section className="flex justify-between">
    <h2 className="my-1 ml-5 mr-1 hidden sm:inline text-sm sm:text-base">Muhammad Saleem</h2>
    <h2 className="my-1 ml-5 mr-1 inline sm:hidden text-sm sm:text-base">Muhammad S.</h2>

    <div className="flex">
      <a href="https://docs.google.com/document/d/1cVBxrRLRlX5FeGFEbAOp-Ej0hupqdD_ib-JRN2A9RgE/edit?tab=t.0" target="_blank">
        <button className="bg-customColor hover:bg-black text-black hover:text-white font-bold py-1 px-2 my-1 border border-black rounded text-xs sm:text-sm">
          Resume
        </button>
      </a>
      
      <a href="mailto:t_sal@hotmail.com">
        <button className="bg-customColor hover:bg-black text-black hover:text-white font-bold py-1 px-2 my-1 border border-black rounded text-xs sm:text-sm">
          Email
        </button>
      </a>

      <a href="https://github.com/Tsaleem123/" target="_blank">
        <button className="bg-customColor hover:bg-black text-black hover:text-white font-bold py-1 px-2 my-1 border border-black rounded text-xs sm:text-sm">
          Github
        </button>
      </a>
    </div>
  </section>
</nav>
  );
};