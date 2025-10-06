import { Briefcase, Code, Database, Server, User } from "lucide-react";
import { useTranslation } from "react-i18next";

export const AboutSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("about.title.part1")}{" "}
          <span className="text-primary">{t("about.title.part2")}</span>
        </h2>

        <div className="flex justify-center mb-16">
          <img
            src="/profilpic.jpg"
            className="w-75 h-90 rounded-full object-cover shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {t("about.subtitle")}
            </h3>

            <p className="text-muted-foreground">{t("about.paragraphs.p1")}</p>
            <p className="text-muted-foreground">{t("about.paragraphs.p2")}</p>
            <p className="text-muted-foreground">{t("about.paragraphs.p3")}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {t("about.buttons.contact")}
              </a>

              <a
                href={i18n.language === "FR" ? "/CV FR.pdf" : "/CV ENG.pdf"}
                download={
                  i18n.language === "FR"
                    ? "CV Ny Hanjara Randriakoto (FR).pdf"
                    : "CV Ny Hanjara Randriakoto (ENG).pdf"
                }
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {t("about.buttons.download")}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Skill Card 1 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {t("about.skills.fullstack.title")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.skills.fullstack.description")}
                  </p>
                </div>
              </div>
            </div>

            {/* Skill Card 2 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {t("about.skills.database.title")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.skills.database.description")}
                  </p>
                </div>
              </div>
            </div>

            {/* Skill Card 3 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {t("about.skills.support.title")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.skills.support.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
