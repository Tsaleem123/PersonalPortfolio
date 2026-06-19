/**
 * Skills section — grouped tech chips (Languages, Frameworks, Tools).
 */
const skillGroups = [
  {
    label: "Languages",
    items: ["C#", "Java", "JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS"],
  },
  {
    label: "Frameworks & Libraries",
    items: [".NET", "Node.js", "Express", "React", "Angular", "Material UI", "MS Test", "Jest"],
  },
  {
    label: "Development Tools",
    items: ["Git", "GitHub", "Android Studio", "Docker"],
  },
];

export const Skills = () => {
  return (
    <section className="Skills">
      <div className="SkillGroups">
        {skillGroups.map((group) => (
          <div className="SkillGroup" key={group.label}>
            <h3>{group.label}</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="bg-[#374151] text-[#D1D5DB] px-3 py-1 rounded-full text-sm font-medium border border-[#4B5563]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
