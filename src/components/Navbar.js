/**
 * Defines a simple Navbar for the project with dark theme styling.
 * Uses color theory for visual hierarchy and contrast.
 */
export const Navbar = () => {
  return (
<nav className="bg-[#1F1F23] border-b border-[#2A2D3A] shadow-lg">
  <section className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 px-3 sm:px-0">
    <div className="flex justify-center sm:justify-start mb-2 sm:mb-0">
      <h2 className="ml-0 sm:ml-5 hidden sm:inline text-sm sm:text-base text-[#F9FAFB] font-medium">Talha Saleem</h2>
      <h2 className="inline sm:hidden text-sm text-[#F9FAFB] font-medium">Talha S.</h2>
    </div>

    <div className="flex gap-2 justify-center sm:justify-end sm:mr-5">
      <a href="https://docs.google.com/document/d/10wZtw66yET-sdO3I9PtcoTsS8rDbIelfZCxo2NqBjfc/edit?tab=t.0" target="_blank" rel="noreferrer">
        <button className="bg-[#1F1F23] hover:bg-[#9D8DF1] text-[#F9FAFB] hover:text-[#1F1F23] font-bold py-2 px-2 sm:px-3 border border-[#4B5563] hover:border-[#9D8DF1] rounded text-xs sm:text-sm transition-all duration-300 hover:shadow-md">
          Resume
        </button>
      </a>
      
      <a href="mailto:t_sal@hotmail.com">
        <button className="bg-[#1F1F23] hover:bg-[#9D8DF1] text-[#F9FAFB] hover:text-[#1F1F23] font-bold py-2 px-2 sm:px-3 border border-[#4B5563] hover:border-[#9D8DF1] rounded text-xs sm:text-sm transition-all duration-300 hover:shadow-md">
          Email
        </button>
      </a>

      <a href="https://github.com/Tsaleem123/" target="_blank" rel="noreferrer">
        <button className="bg-[#1F1F23] hover:bg-[#9D8DF1] text-[#F9FAFB] hover:text-[#1F1F23] font-bold py-2 px-2 sm:px-3 border border-[#4B5563] hover:border-[#9D8DF1] rounded text-xs sm:text-sm transition-all duration-300 hover:shadow-md">
          Github
        </button>
      </a>
    </div>
  </section>
</nav>
  );
};