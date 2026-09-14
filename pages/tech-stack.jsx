export default function TechStack() {
  const categories = [
    { name: "Frontend", tools: "React, Next.js, JavaScript, TypeScript, Tailwind CSS" },
    { name: "Backend", tools: "Node.js, Express, REST APIs" },
    { name: "Database", tools: "PostgreSQL, MongoDB, MySQL" },
    { name: "Testing", tools: "Playwright, Cypress, Selenium, Cucumber, API Testing" },
    { name: "Tools", tools: "Git, GitHub, Docker, CI/CD" }
  ];

  return (
    <section className="py-16 px-4 md:px-6 w-full max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technologies I Work With</h2>
        <div className="h-1 w-20 bg-[#15AFC4] mx-auto rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-start hover:border-[#15AFC4]/50 dark:hover:border-[#15AFC4]/50 hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-lg bg-[#1662A6]/10 dark:bg-[#1662A6]/20 flex items-center justify-center mb-4 group-hover:bg-[#1662A6]/20 dark:group-hover:bg-[#1662A6]/30 transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#15AFC4]"></span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">{cat.name}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{cat.tools}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
