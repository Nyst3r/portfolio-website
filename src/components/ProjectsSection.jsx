import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

const projectsData = [
  {
    id: 1,
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Javascript", "HTML"],
    demoUrl: "#",
    githubUrl: "https://github.com/Nyst3r/portfolio-website",
  },
];

export const ProjectsSection = () => {
  const { t } = useTranslation();
  const translatedProjects = t("projects.list", { returnObjects: true });

  const projects = projectsData.map((project, index) => ({
    ...project,
    title: translatedProjects[index].title,
    description: translatedProjects[index].description,
  }));

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("projects.title.main")}{" "}
          <span className="text-primary">{t("projects.title.highlight")}</span>
        </h2>

        {/* Description */}
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("projects.description")}
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Existing projects */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/*"coming soon" card */}
          <div className="flex flex-col justify-center items-center bg-card rounded-lg shadow-xs p-8 text-center border border-dashed border-primary/40 hover:border-primary/60 transition-colors">
            <h3 className="text-2xl font-semibold mb-2 text-primary">
              {t("projects.comingSoon.title")}
            </h3>
            <p className="text-muted-foreground">
              {t("projects.comingSoon.description")}
            </p>
          </div>
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Nyst3r"
          >
            {t("projects.checkGithub")} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
