import Bio from "@/components/bio";
import Projects from "@/components/projects-card";
import { ArrowIcon, IconDocuments } from "@/components/icons";
import Writing from "@/components/contents-writing";

export default function Home() {
  return (
    <div className="flex flex-col gap-[20px]">
      <h1 className="font-bold text-[36px]">Yafi Alhakim</h1>

      <p className="md:w-10/12 leading-relaxed">
        Hi there! I&apos;m a final year student with a passion for web
        development. I currently work as a freelance web developer and I&apos;m
        looking for a full-time job.
      </p>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://drive.google.com/file/d/1yxzCljYO5DP__ztac2qP-QR0GpHZUUNZ/view?usp=share_link"
        className="flex w-full md:w-3/12 border border-neutral-800 rounded-lg p-4 no-underline items-center  hover:bg-neutral-900 hover:text-white hover:dark:bg-neutral-900  hover:dark:text-white  transition-all justify-between"
      >
        <div className="flex items-center">
          <IconDocuments />
          <div className="ml-3">CV</div>
        </div>
        <ArrowIcon />
      </a>
      <h2 className="mt-10">
        <span className="font-bold text-2xl">Featured Project</span>
      </h2>
      <div className="md:flex space-x-4">
        <Projects
          title={"Moviez"}
          desc={"Data fetching with generateStaticParams"}
          image={"/img/movies.png"}
          href="https://next-movies-ruby.vercel.app/"
        />
        <Projects
          title={"CodeDesign"}
          desc={"Slicing from design to web using NextJS and TailwindCSS."}
          image={"/img/codesign.png"}
          href="https://slicing-all.vercel.app/"
        />
        <Projects
          title={"Todo List"}
          desc={"Todo app using Supabase and NextJS."}
          image={"/img/todos.png"}
          href="https://todo-supabasev2.vercel.app/"
        />
      </div>

      <h2 className="mt-5">
        <span className="font-bold text-2xl">Recent Post</span>
      </h2>
      <div className="flex flex-col gap-4">
        <Writing
          title={"Toast with Sonner"}
          href="https://yafialhakimblog.vercel.app/library/sonner"
          desc="Sonner is a simple toast library for NextJS"
        />
        <Writing
          title={"Implementing PWA in NextJS"}
          href="https://yafialhakimblog.vercel.app/library/pwa"
          desc="PWA is a web application that can be installed on the user's device."
        />
        <Writing
          title={
            "My First Open-Source Contribution: Translating ReactJS Pages to Indonesian Language"
          }
          href="https://yafialhakimblog.vercel.app/story/pr"
          desc="PWA is a web application that can be installed on the user's device."
        />
      </div>
    </div>
  );
}
