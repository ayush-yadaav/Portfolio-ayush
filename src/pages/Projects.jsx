import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const projects = [
  {
    title: "News Summarizer",
    description:
      "AI-powered tool to summarize news, save summaries, and stay updated with the latest headlines.",
    tags: ["React", "Express", "MongoDB", "Gemini API"],
    gradient: "from-secondary to-accent",
    github: "https://github.com/ayush-yadaav/News-Summarizer-Frontend.git",
    demo: "https://news-summarizer-frontend-sigma.vercel.app",
  },
  {
    title: "Mail Mint",
    description:
      "MailMint is a smart web app that instantly generates professional, personalized emails using AI.",
    tags: ["React", "Tailwind CSS", "Gemini"],
    gradient: "from-primary to-secondary",
    github: "https://github.com/ayush-yadaav/Mailmint.git",
    demo: "https://mailmint-nu.vercel.app/contact",
  },
  {
    title: "Staff Management",
    description:
      "A responsive web app to manage employee data with CRUD operations and role-based views.",
    tags: ["React", "Tailwind CSS", "CRUD"],
    gradient: "from-primary via-accent to-secondary",
    github: "https://github.com/ayush-yadaav/Staff-Manegment.git",
    demo: "https://yourstore.com",
  },
  {
    title: "Recipe Finder",
    description:
      "A responsive app to find recipes instantly using the Spoonacular API with modals and clean UI.",
    tags: ["React", "Tailwind CSS", "API"],
    gradient: "from-secondary to-primary",
    github: "https://github.com/ayush-yadaav/Recipe-Finder.git",
    demo: "https://recipe-finder-ten-kohl.vercel.app/",
  },
  {
    title: "Game Mania",
    description:
      "A responsive web app featuring multiple mini-games with smooth gameplay and a clean UI.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    gradient: "from-accent to-primary",
    github: "https://github.com/ayush-yadaav/Game-Mania.git",
    demo: "https://games-mania.netlify.app/",
  },
  {
    title: "Note Nest",
    description:
      "A simple and responsive note-taking app for storing quick thoughts and important text.",
    tags: ["React", "Tailwind CSS", "LocalStorage"],
    gradient: "from-primary to-secondary",
    github: "https://github.com/ayush-yadaav/NoteNest.git",
    demo: "https://note-nest-ak.vercel.app",
  },
  {
    title: "Tic Tac Toe",
    description:
      "A classic two-player Tic Tac Toe game built with React and Tailwind CSS featuring win/draw logic.",
    tags: ["React", "Tailwind CSS"],
    gradient: "from-secondary to-accent",
    github: "https://github.com/ayush-yadaav/Tic-Tac-Toe.git",
    demo: "https://tic-tac-toe-ten-hazel.vercel.app/",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: true,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const onSelect = () => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  };

  if (emblaApi) {
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and passion
            for development
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <div className="flex justify-end gap-3 mb-6">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="p-2 rounded-md border border-primary/50 hover:border-primary hover:bg-primary/10 disabled:opacity-30 backdrop-blur-sm transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="p-2 rounded-md border border-primary/50 hover:border-primary hover:bg-primary/10 disabled:opacity-30 backdrop-blur-sm transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                >
                  {/* Project Card */}
                  <motion.div
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    className="group relative h-full p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-primary/10"
                  >
                    {/* Subtle Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}
                    />

                    {/* Animated Accent Glow */}
                    <motion.div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 blur-2xl`}
                      animate={{
                        scale: [1, 1.15, 1],
                        rotate: [0, 45, 0],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Card Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold mb-3 text-foreground transition-colors group-hover:text-primary/90">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 min-h-[3rem] leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                              delay: tagIndex * 0.05,
                            }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 text-sm rounded-full bg-muted border border-border text-foreground hover:border-primary/50 transition-all duration-300 cursor-default"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-4 mt-auto">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center flex-1 border border-primary/40 text-foreground hover:border-primary hover:bg-primary/10 py-2 rounded-md transition-all duration-300"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center flex-1 bg-gradient-to-r from-primary to-secondary text-white py-2 rounded-md hover:scale-[1.03] hover:shadow-md hover:shadow-primary/30 transition-all duration-300"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
