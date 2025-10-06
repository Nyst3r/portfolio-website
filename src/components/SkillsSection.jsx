import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const skills = [
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "React", level: 75, category: "frontend" },
  { name: "React Native", level: 75, category: "frontend" },
  { name: "Next.js", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },

  { name: "C#", level: 85, category: "backend" },
  { name: ".NET / .NET Core", level: 80, category: "backend" },
  { name: "Java", level: 85, category: "backend" },
  { name: "Python", level: 85, category: "backend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "REST API", level: 80, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "SQL / PostgreSQL", level: 70, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },
  
  { name: "Git / GitHub", level: 95, category: "tools" },
  { name: "Azure DevOps", level: 75, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 65, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "MS Access / MS Office", level: 95, category: "tools" },
  { name: "SolidWorks / AutoCAD", level: 70, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("skills.title.main")}{" "}
          <span className="text-primary">{t("skills.title.highlight")}</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize  cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {t(`skills.categories.${category}`)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
