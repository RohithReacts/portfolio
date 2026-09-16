

export default function CTA() {
  return (
    <section className="py-20 px-4 md:px-6 w-full max-w-5xl mx-auto text-center">
      <div className="p-8 md:p-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 pointer-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Let's Build Something Great</h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Have a website idea, software project, testing requirement, or an existing application that needs improvement? Let's discuss your project and find the right solution.
          </p>
          
        </div>
      </div>
    </section>
  );
}
