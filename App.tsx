import React, { useState, useEffect } from "react";
import {
  Github,
  Mail,
  ArrowUpRight,
  ChevronRight,
  MessageCircle,
  Phone,
  MapPin,
  Calendar,
  Award,
  Database,
} from "lucide-react";
import {
  USER_DATA,
  PROJECTS,
  SKILLS,
  EDUCATION,
  EXPERIENCE,
} from "./constants";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? "py-4 glass border-b border-white/10" : "py-8 bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter text-white">
          RAVIN<span className="text-indigo-500">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <button
            onClick={() => scrollTo("work")}
            className="hover:text-white transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("stack")}
            className="hover:text-white transition-colors"
          >
            Stack
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2 rounded-full bg-white text-black hover:bg-zinc-200 transition-all font-bold"
          >
            Contact
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => scrollTo("contact")}
            className="p-2 rounded-full bg-white text-black"
          >
            <Mail className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="pt-48 pb-24 px-6 relative">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="order-2 lg:order-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs text-indigo-400 mb-8 font-bold">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
          IT Professional & Database Specialist
        </div>
        <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
          {USER_DATA.name.split(" ")[0]} <br />
          <span className="text-zinc-700">{USER_DATA.name.split(" ")[1]}</span>
        </h1>
        <p className="text-xl text-zinc-400 leading-relaxed max-w-lg mb-12">
          {USER_DATA.headline}
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <button
            onClick={() =>
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-white text-black rounded-2xl font-black hover:scale-105 transition-transform"
          >
            View Projects
          </button>
          <div className="flex gap-4">
            <a
              href={USER_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-2xl hover:bg-white/10 transition-colors text-white border border-white/10"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${USER_DATA.email}`}
              className="p-4 glass rounded-2xl hover:bg-white/10 transition-colors text-white border border-white/10"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2 relative">
        <div className="relative z-10 w-full aspect-square max-w-[450px] mx-auto">
          <div className="absolute inset-0 border-2 border-indigo-500/30 rounded-[4rem] rotate-6"></div>
          <div className="absolute inset-0 border-2 border-white/10 rounded-[4rem] -rotate-3"></div>
          <div className="relative h-full w-full rounded-[4rem] overflow-hidden border-4 border-white/10 bg-zinc-900 shadow-2xl transition-transform hover:scale-[1.02] duration-500">
            {/* Using a path that assumes your photo is named profile.jpg in the same directory */}
            <img
              src="./profile.jpg"
              alt="Ravin Muhammed"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if local image is not found during initial render
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
              }}
            />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/10 blur-[120px] rounded-full -z-0"></div>
      </div>
    </div>
  </section>
);

const SectionTitle: React.FC<{
  children: React.ReactNode;
  subtitle?: string;
}> = ({ children, subtitle }) => (
  <div className="mb-16">
    <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">
      {children}
    </h2>
    {subtitle && <p className="text-zinc-500 mt-2 font-medium">{subtitle}</p>}
  </div>
);

const ProjectCard: React.FC<{ project: (typeof PROJECTS)[0] }> = ({
  project,
}) => (
  <div
    className={`group relative rounded-[2.5rem] p-10 transition-all duration-500 glass hover:bg-white/5 border border-white/5 flex flex-col justify-between overflow-hidden ${project.featured ? "md:col-span-2" : ""}`}
  >
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-8">
        <div className="p-4 rounded-3xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          <Database className="w-7 h-7" />
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-white transition-colors"
        >
          <ArrowUpRight className="w-7 h-7" />
        </a>
      </div>
      <h3 className="text-3xl font-black text-white mb-4 tracking-tight uppercase italic">
        {project.title}
      </h3>
      <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-md">
        {project.description}
      </p>
    </div>
    <div className="relative z-10 flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="text-[11px] uppercase tracking-widest font-black px-4 py-2 rounded-full bg-white/5 border border-white/5 text-zinc-500 group-hover:text-white transition-colors"
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-600/5 blur-[80px] group-hover:bg-indigo-600/15 transition-all duration-500"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <Hero />

      <main className="max-w-6xl mx-auto px-6">
        {/* About Section */}
        <section
          id="about"
          className="mb-40 grid md:grid-cols-3 gap-10 scroll-mt-32"
        >
          <div className="md:col-span-2 p-10 glass rounded-[3rem] border border-white/10 relative overflow-hidden">
            <h3 className="text-2xl font-black text-white mb-6 uppercase italic">
              The Professional Profile
            </h3>
            <p className="text-zinc-400 leading-relaxed text-xl mb-10 font-medium">
              {USER_DATA.bio}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-black text-white uppercase italic">
                    Rank 5th
                  </div>
                  <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest">
                    Class Standing
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-black text-white uppercase italic">
                    2021-2025
                  </div>
                  <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest">
                    Database Degree
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-black text-white uppercase italic">
                    Iraq
                  </div>
                  <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest">
                    Sulaymaniyah
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full"></div>
          </div>
          <div className="p-10 bg-white text-black rounded-[3rem] flex flex-col justify-center text-center shadow-2xl relative group overflow-hidden">
            <div className="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="text-8xl font-black tracking-tighter leading-none mb-2 italic">
                {USER_DATA.age}
              </div>
              <div className="text-xs uppercase tracking-[0.4em] font-black text-zinc-400 mb-8">
                Years Old
              </div>
              <div className="h-[2px] w-16 bg-black mx-auto mb-8 opacity-10"></div>
              <p className="text-base font-bold leading-tight uppercase italic px-4">
                "Specializing in data integrity & high-performance backend
                systems."
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="work" className="mb-40 scroll-mt-32">
          <SectionTitle subtitle="Core database and backend engineering achievements">
            Selected Work
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </section>

        {/* Stack Section */}
        <section id="stack" className="mb-40 scroll-mt-32">
          <SectionTitle subtitle="Engineered with industry-standard technologies">
            Technical Stack
          </SectionTitle>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, i) => (
              <div
                key={i}
                className="group p-8 glass rounded-[2rem] border border-white/5 hover:border-indigo-500/40 transition-all flex items-center gap-5"
              >
                <div className="p-4 rounded-2xl bg-zinc-900 text-zinc-500 group-hover:text-indigo-400 group-hover:scale-110 transition-all border border-white/5">
                  {skill.icon}
                </div>
                <div>
                  <div className="text-base font-black text-white uppercase italic leading-none mb-1">
                    {skill.name}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">
                    {skill.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-40 grid lg:grid-cols-2 gap-16">
          <div>
            <SectionTitle>Education</SectionTitle>
            <div className="space-y-8">
              {EDUCATION.map((edu, i) => (
                <div
                  key={i}
                  className="p-10 glass rounded-[2.5rem] border border-white/5 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-indigo-400 text-xs font-black px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 uppercase tracking-widest">
                      {edu.period}
                    </span>
                    <span className="text-zinc-500 text-xs font-black uppercase tracking-widest">
                      {edu.rank}
                    </span>
                  </div>
                  <h4 className="text-2xl font-black text-white mb-2 uppercase italic leading-none">
                    {edu.degree}
                  </h4>
                  <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle>Experience</SectionTitle>
            <div className="space-y-8">
              {EXPERIENCE.map((exp, i) => (
                <div
                  key={i}
                  className="p-10 glass rounded-[2.5rem] border border-white/5 hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-zinc-400 text-xs font-black px-4 py-2 rounded-full bg-white/5 border border-white/10 uppercase tracking-widest">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-2xl font-black text-white mb-2 uppercase italic leading-none group-hover:text-indigo-400 transition-colors">
                    {exp.role}
                  </h4>
                  <p className="text-zinc-600 text-xs font-black mb-6 uppercase tracking-widest">
                    {exp.company}
                  </p>
                  <p className="text-zinc-400 text-base leading-relaxed font-medium">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-40 scroll-mt-32">
          <div className="relative p-12 lg:p-24 rounded-[4rem] overflow-hidden bg-zinc-900 border border-white/10">
            <div className="absolute inset-0 bg-indigo-600 opacity-5"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none">
                  Let's solve <br />
                  together.
                </h2>
                <p className="text-zinc-400 text-lg max-w-sm mb-12 font-medium">
                  Available for database consultancy, backend architecture, and
                  professional IT support.
                </p>

                <div className="space-y-8">
                  <a
                    href={`mailto:${USER_DATA.email}`}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em] mb-1">
                        Email Me
                      </div>
                      <span className="text-xl font-black text-white uppercase italic">
                        {USER_DATA.email}
                      </span>
                    </div>
                  </a>
                  <a href="#" className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em] mb-1">
                        Call Me
                      </div>
                      <span className="text-xl font-black text-white uppercase italic">
                        {USER_DATA.phone}
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="glass border-white/10 p-12 rounded-[3rem] space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-zinc-500 uppercase tracking-widest ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-zinc-700 focus:outline-none focus:border-indigo-500 transition-colors font-bold"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-zinc-500 uppercase tracking-widest ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-zinc-700 focus:outline-none focus:border-indigo-500 transition-colors font-bold"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-zinc-500 uppercase tracking-widest ml-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can I help you?"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-zinc-700 focus:outline-none focus:border-indigo-500 transition-colors resize-none font-bold"
                  ></textarea>
                </div>
                <button className="w-full bg-white text-black font-black py-5 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 uppercase italic text-lg tracking-tight">
                  Send Message <MessageCircle className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-2xl font-black text-white tracking-tighter uppercase italic">
            RAVIN<span className="text-indigo-500">.</span>MUHAMMED
          </div>
          <div className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.3em]">
            © 2024 Ravin Muhammed • Engineered for excellence
          </div>
          <div className="flex gap-8">
            <a
              href={USER_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${USER_DATA.email}`}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
