export default function Process() {
  const steps = [
    { num: "01", title: "Discuss", desc: "Tell me about your idea, application, or testing requirements." },
    { num: "02", title: "Plan", desc: "Define the features, technology, scope, and development approach." },
    { num: "03", title: "Build", desc: "Develop your application using modern full-stack technologies." },
    { num: "04", title: "Test", desc: "Test functionality, APIs, UI, performance, and user flows." },
    { num: "05", title: "Launch", desc: "Deploy your application and help you move it into production." }
  ];

  return (
    <section className="py-16 px-4 md:px-6 w-full max-w-7xl mx-auto">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">From Idea to Production</h2>
        <div className="h-1 w-20 bg-[#15AFC4] rounded mx-auto md:mx-0"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all relative overflow-hidden group hover:-translate-y-1">
            <div className="text-5xl font-black text-slate-100 dark:text-slate-800/50 absolute -right-2 -top-2 transition-transform group-hover:scale-110 select-none">
              {step.num}
            </div>
            <div className="relative z-10 mt-4">
              <h3 className="text-xl font-bold text-[#1662A6] dark:text-[#1CC2CA] mb-3 flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-400 dark:text-slate-500">{step.num} —</span>
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
