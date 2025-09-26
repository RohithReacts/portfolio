
import Link from "next/link";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import * as Separator from "@radix-ui/react-separator";
import { Box } from "@radix-ui/themes";

const blogs = [
  {
    title: "Getting Started with Next.js",
    description: "A beginner’s guide to building apps with Next.js and React.",
    date: "Sep 19, 2025",
    slug: "getting-started-nextjs",
  },
  {
    title: "Tailwind CSS Tips & Tricks",
    description: "Improve your workflow with these Tailwind CSS patterns.",
    date: "Sep 15, 2025",
    slug: "tailwind-css-tips",
  },
  {
    title: "Automation Testing with Playwright",
    description: "How I test modern web apps with Playwright and Cucumber.",
    date: "Sep 10, 2025",
    slug: "playwright-testing",
  },
];

export default function Blog() {
  return (
    <Box
      id="blog"
     
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
          Blog
        </h2>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          Thoughts, tutorials, and things I’m learning along the way.
        </p>

        {/* Responsive Grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
            >
              <Link
                href={`/blog/${blog.slug}`}
                className="group block rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                {/* Radix AspectRatio */}
                <AspectRatio.Root ratio={16 / 3}>
                  <div className="flex items-center justify-center rounded-lg bg-zinc-100 text-zinc-500 dark:bg-zinc-800">
                    <span className="text-sm">Blog</span>
                  </div>
                </AspectRatio.Root>

                <div className="mt-4">
                  <time className="text-xs uppercase tracking-wide text-zinc-500">
                    {blog.date}
                  </time>
                  <h3 className="mt-2 text-lg font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100">
                    {blog.title}
                  </h3>

                  <Separator.Root className="my-2 h-px w-full bg-zinc-200 dark:bg-zinc-700" />

                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {blog.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
}
