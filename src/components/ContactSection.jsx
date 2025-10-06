import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Whether you have a project idea, need help with software development, or want to 
          connect, feel free to reach out. I’m always excited to discuss new opportunities, 
          collaborations, or potential roles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-start space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="flex flex-col justify-start items-center space-y-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <a
                    href="mailto:nyhanjara.randria@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    nyhanjara.randria@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-start items-center space-y-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Montreal, QC, Canada
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start items-center space-y-6">
              <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Connect with me
            </h3>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/ny-hanjara-randriakoto/" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://github.com/Nyst3r" target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          </div>
          </div>
    </section>
  );
};