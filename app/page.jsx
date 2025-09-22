"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Mail, MapIcon, Phone, XIcon } from "lucide-react";
import { Spotlight } from "../components/motion-primitives/spotlight";
import { Magnetic } from "../components/motion-primitives/magnetic";

import {
  PROJECTS,
  WORK_EXPERIENCE,
  EMAIL,
  SOCIAL_LINKS,
  NUM,
  MAP1,
} from "../components/data/constants";
import MinimalPortfolio from "../components/projects";
import AboutMe from "../components/aboutme";
import { InfiniteMovingCardsDemo } from "@/components/testimonials";
import { AnimatedTooltipPreview } from "@/components/avatars";
import ColorPalette from "@/components/color";
import TypographyGuide from "@/components/type";
import Image from "next/image";
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogTrigger,
} from "@/components/motion-primitives/morphing-dialog";
import BlogSection from "@/components/blog";


const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const TRANSITION_SECTION = { duration: 0.3 };

function ProjectVideo({ src }) {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          controls
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            controls
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>

        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}

function MagneticSocialLink({ children, link }) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
      </a>
    </Magnetic>
  );
}

export default function Personal() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-smooth">
      {/* Main Content */}
      <motion.main
        id="home"
        className="space-y-24 py-12"
        variants={VARIANTS_CONTAINER}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/images/office.jpg"
          alt="travel"
          width={1300}
          height={400}
          priority
          className="object-cover rounded-xl"
        />
        {/* Projects Section */}
        <motion.section
          id="projects"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="my-10"
        >
          <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <div key={project.id} className="space-y-2">
                <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <ProjectVideo src={project.video} />
                </div>
                <div className="px-1">
                  <a
                    className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                    href={project.link}
                    target="_blank"
                  >
                    {project.name}
                    <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                  </a>
                  <p className="text-base text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
        <br />
        {/* Avatars */}
        <AnimatedTooltipPreview />

        {/* Portfolio */}
        <motion.section
          id="projects"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <MinimalPortfolio />
        </motion.section>

        <motion.section
          id="themes"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <ColorPalette />
          <TypographyGuide />
        </motion.section>

        {/* Work Experience */}
        <motion.section
          id="work"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
          <div className="flex flex-col gap-4">
            {WORK_EXPERIENCE.map((job) => (
              <a
                key={job.id}
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              >
                <Spotlight className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50" />
                <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-semibold dark:text-zinc-100">
                        {job.title}
                      </h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {job.company}
                      </p>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {job.start} - {job.end}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.section>

        {/* About Me */}
        <motion.section
          id="about"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <AboutMe />
        </motion.section>

        <motion.section
          id="blog"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <BlogSection />
        </motion.section>

 

        {/* Testimonials */}
        <motion.section
          id="connect"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h3 className="mb-5 text-lg font-medium">What Our Clients Say</h3>
          <InfiniteMovingCardsDemo />
        </motion.section>

        {/* Connect */}
        <motion.section
          id="connect"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h3 className="mb-5 text-lg font-medium">Connect</h3>
          <p className="mb-3 text-zinc-600 dark:text-zinc-400">
            Feel free to contact me at
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
              <Link href={`mailto:${EMAIL}`} className="dark:text-zinc-300">
                {EMAIL}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
              <Link
                href={`https://wa.me/918374200125`}
                target="_blank"
                className="dark:text-zinc-300"
              >
                {NUM}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <MapIcon className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
              <Link
                href={`https://maps.app.goo.gl/DdSNwn3oYpbFUPz56`}
                target="_blank"
                className="dark:text-zinc-300"
              >
                {MAP1}
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap mt-5 gap-3">
            {SOCIAL_LINKS.map((link) => (
              <MagneticSocialLink key={link.label} link={link.link}>
                {link.label}
              </MagneticSocialLink>
            ))}
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
}
