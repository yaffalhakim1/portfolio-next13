import Bio from "@/components/bio";
import Projects from "@/components/projects-card";
import { ArrowIcon, GitHubIcon } from "@/components/icons";
import Writing from "@/components/contents-writing";

export default function Home() {
  return (
    <div className="flex flex-col gap-[20px]">
      <h1 className="font-bold text-[36px]">Yafi Alhakim</h1>
      {/* <p>
        I&apos;m Yafi, a{" "}
        <span className="font-bold">
          Computer Engineering Student at Diponegoro University
        </span>
      </p> */}

      <p className="md:w-10/12 leading-relaxed">
        Hi there! I&apos;m a final year student with a passion for web
        development. I currently work as a freelance web developer and I&apos;m
        looking for a full-time job.
      </p>
      <h2 className="mt-10">
        <span className="font-bold text-2xl">Featured Project</span>
      </h2>
      <div className="md:flex space-x-4">
        <Projects
          title={"Moviez"}
          desc={
            "This is a movie app that I made using NextJS and generateStaticParams."
          }
          image={"/img/movies.png"}
          href="https://next-movies-ruby.vercel.app/"
        />
        <Projects
          title={"CodeDesign"}
          desc={"Slicing from design to web using NextJS and TailwindCSS."}
          image={"/img/codesign.png"}
          href="https://slicing-all.vercel.app/"
        />
      </div>

      <h2 className="mt-5">
        <span className="font-bold text-2xl">Recent Post</span>
      </h2>
      <div className="flex flex-col gap-4">
        <Writing
          title={"Toast with Sonner"}
          href="https://yafialhakimblog.vercel.app/library/sonner"
        />
        <Writing
          title={"Implementing PWA in NextJS"}
          href="https://yafialhakimblog.vercel.app/library/pwa"
        />
      </div>
    </div>
  );
}
