import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("contact.title.main")}{" "}
          <span className="text-primary">{t("contact.title.highlight")}</span>
        </h2>

        {/* Description */}
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("contact.description")}
        </p>

        {/* Grille deux colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Colonne gauche : Contact Information */}
          <div className="flex flex-col justify-start space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {t("contact.contactInfoTitle")}
            </h3>

            {/* Email */}
            <div className="flex flex-col justify-start items-center space-y-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <a
                  href={`mailto:${t("contact.email")}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("contact.email")}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col justify-start items-center space-y-6">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <span className="text-muted-foreground">
                  {t("contact.location")}
                </span>
              </div>
            </div>
          </div>

          {/* Colonne droite : Connect with me */}
          <div className="flex flex-col justify-start items-center space-y-6">
            <h3 className="text-2xl font-semibold mb-6">
              {t("contact.connectTitle")}
            </h3>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://www.linkedin.com/in/ny-hanjara-randriakoto/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/Nyst3r"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
