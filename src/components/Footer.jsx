import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col items-center space-y-4">
      <p className="text-sm text-muted-foreground text-center">
        &copy; {new Date().getFullYear()} Ny Hanjara Randriakoto. {t("footer.rights")}
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
