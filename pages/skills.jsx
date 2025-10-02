import { Laptop, Palette, Cog, MonitorCogIcon } from "lucide-react";

export default function Skills() {
  const services = [
    {
      icon: <Laptop className="w-8 h-8 text-primary" />,
      title: "Front-End Development",
      description:
        "HTML5, CSS3, JavaScript (ES6+) React.js, Next.js, Expo (React Native) Tailwind CSS, Shadcn UI, Radix UI, Framer Motion",
    },
    {
      icon: <MonitorCogIcon className="w-8 h-8 text-primary" />,
      title: "UI Testing & Quality Assurance",
      description:
        "Playwright + Cucumber (BDD) Serenity/JS with Playwright Automated UI Testing (Screenshots, Video Capture, Reporting) Cross-browser & responsive testing",
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Design Tools & Workflow",
      description:
        "Figma, Adobe XD Responsive Web Design (Mobile-first) Accessibility (WCAG) compliance",
    },
    {
      icon: <Cog className="w-8 h-8 text-primary" />,
      title: "Other Tools",
      description:
        "Git/GitHub Agile & Scrum workflows Storybook for UI components",
    },
  ];

  return (
    <section id="skills" className="w-full py-16 px-6">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Expertise
        </h2>
        <div className="relative inline-block mt-6">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 px-3 py-1 rounded-full shadow text-sm font-medium text-gray-600 dark:text-gray-400">
            Skills
          </span>
          <div className="h-px w-40 bg-gray-300 dark:bg-gray-700 mx-auto"></div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-2xl border border-gray-200 dark:border-gray-800 
                       bg-white/70 dark:bg-gray-900/60 backdrop-blur-lg shadow-sm 
                       hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default"
          >
            {/* Icon container */}
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 mx-auto">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 text-center">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
              {service.description}
            </p>

            {/* Decorative hover gradient */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
