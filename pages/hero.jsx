import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="pt-8 pb-12 lg:pt-12 lg:pb-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Background Container */}
        <div className="relative w-full rounded-[40px] overflow-hidden bg-slate-100 dark:bg-slate-900 min-h-[700px] flex items-end">
          {/* Full Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/office.jpg"
              alt="Workspace and development"
              fill
              priority
              className="object-cover"
            />
            {/* Dark overlay for contrast if needed */}
            <div className="absolute inset-0 bg-[#09224B]/20 pointer-events-none"></div>
          </div>

          {/* Decorative blurred blobs behind the image (optional but nice) */}
          <div
            className="absolute -z-10 -bottom-10 -right-10 w-72 h-72 bg-[#1C93C0]/30 blur-[80px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-70 animate-pulse pointer-events-none"
            style={{ animationDuration: "4s" }}
          ></div>

          {/* Text Block Cutout */}
          <div className="relative z-10 bg-background w-[95%] sm:w-[85%] lg:w-[60%] xl:w-[50%] p-8 sm:p-10 lg:p-14 rounded-tr-[60px] mt-32 sm:mt-40 lg:mt-48">
            {/* Concave corner top-left */}
            <svg
              className="absolute bottom-full translate-y-[1px] left-0 w-12 h-12 text-background pointer-events-none"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M0,100 L0,0 C0,55.23 44.77,100 100,100 Z" />
            </svg>

            {/* Concave corner bottom-right */}
            <svg
              className="absolute left-full -translate-x-[1px] bottom-0 w-12 h-12 text-background pointer-events-none"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M0,100 L0,0 C0,55.23 44.77,100 100,100 Z" />
            </svg>

            {/* Content inside the card */}
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-[#1662A6] dark:text-[#1CC2CA] bg-[#1662A6]/10 dark:bg-[#103768]/80 mb-6 border border-[#1662A6]/20 dark:border-[#164285] backdrop-blur-sm">
              <span className="flex w-2 h-2 rounded-full bg-[#1662A6] dark:bg-[#1CC2CA] mr-2 animate-pulse"></span>
              Build. Test. Automate. Launch.
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.15]">
              Full-Stack Development <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1662A6] via-[#15AFC4] to-[#1CC2CA]">
                & Software Testing Services
              </span>
            </h1>

            <p className="text-md sm:text-md text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              I help businesses, startups, and individuals turn ideas into
              modern, reliable, and scalable web applications — from frontend
              development to backend systems, APIs, databases, and automated
              testing.
            </p>

            <p className="text-base font-medium text-slate-800 dark:text-slate-200 mb-8 border-l-4 border-[#15AFC4] pl-4 py-1">
              Build your product. Improve your application. Automate your
              testing.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="#projects">
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <a href="#connect">
                  Book a Meeting
                  <Calendar className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
