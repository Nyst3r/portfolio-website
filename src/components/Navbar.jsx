import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Update navbar on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "ENG" ? "FR" : "ENG";
    i18n.changeLanguage(newLang);
  };

  const nextLanguage = i18n.language === "ENG" ? "FR" : "ENG";

  const navItems = [
    { name: t("navbar.home"), href: "#hero" },
    { name: t("navbar.about"), href: "#about" },
    { name: t("navbar.projects"), href: "#projects" },
    { name: t("navbar.skills"), href: "#skills" },
    { name: t("navbar.contact"), href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between relative">
        {/* Logo */}
        <a className="text-xl font-bold flex items-center" href="#hero">
          Ny Hanjara Randriakoto
        </a>

        {/* Desktop language toggle */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 text-sm border rounded-full border-primary text-primary hover:bg-primary hover:text-background transition"
          >
            {nextLanguage}
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground z-50"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed top-0 left-0 w-full h-screen z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-full"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* Mobile language toggle */}
            <button
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="px-4 py-2 text-sm border rounded-full border-primary text-primary hover:bg-primary hover:text-background mt-4"
            >
              {nextLanguage}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};