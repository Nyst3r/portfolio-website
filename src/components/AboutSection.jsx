import { Briefcase, Code, Database, Server, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Software Engineer & Problem Solver
            </h3>

            <p className="text-muted-foreground">
              I'm a software engineering graduate from École de technologie supérieure (ÉTS) with experience in
              backend and full-stack development. I've contributed to multiple
              projects using C#, .NET, React Native, Javascript, Java and other modern
              technologies, focusing on creating scalable and efficient
              applications.
            </p>

            <p className="text-muted-foreground">
              During my internships at Desjardins, Schneider Electric, and Owens
              Corning, I gained hands-on experience migrating applications,
              improving existing features, writing unit tests, and supporting
              internal tools. I enjoy solving complex technical challenges and
              constantly learning new technologies to deliver robust solutions.
            </p>

            <p className="text-muted-foreground">
              Outside of development, I love traveling and exploring new
              cultures. I’ve visited more than 15 countries, which inspires me
              to bring creativity and perspective to my work. During my free time, 
              I enjoy playing video games, cooking, going for coffee runs, and discovering 
              new experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/CV ENG.pdf" download="CV Ny Hanjara Randriakoto.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                     Building scalable backend systems and responsive front-end interfaces using C#, 
                     .NET, React, and modern web technologies.
        
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Database & API Integration</h4>
                  <p className="text-muted-foreground">
                    Designing and integrating databases, REST APIs, and internal tools to streamline 
                    workflows and improve functionality.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">IT Support</h4>
                  <p className="text-muted-foreground">
                    Providing technical support, maintaining internal applications, and 
                    ensuring smooth operations across multiple teams.
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