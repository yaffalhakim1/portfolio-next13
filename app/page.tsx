import Projects from "@/components/projects-card";
import {
  ArrowIcon,
  EmailIcon,
  IconDocuments,
  IconNextjs,
  IconSupabase,
  IconTailwind,
} from "@/components/icons";
import Writing from "@/components/contents-writing";
import Badge from "@/components/Badge";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <h1 className="font-bold text-[36px]">Yafi Alhakim</h1>

        <p className="md:w-10/12 leading-relaxed">
          Hi there! I&apos;m a final year student with a passion for web
          development. I currently work as a freelance web developer and
          I&apos;m looking for a full-time job.
        </p>
        <div className="flex space-x-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1WaL3pUhv4lYsMMv27xWFZ_2hoSh3jLR4/view?usp=sharing"
            className="flex w-full md:w-3/12 border border-neutral-800 rounded-lg p-4 no-underline items-center  hover:bg-neutral-900 hover:text-white hover:dark:bg-neutral-900  hover:dark:text-white  transition-all justify-between"
          >
            <div className="flex items-center">
              <IconDocuments />
              <div className="ml-3">CV</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:yafialhakim64@email.com"
            className="flex w-full md:w-3/12 border border-neutral-800 rounded-lg p-4 no-underline items-center  hover:bg-neutral-900 hover:text-white hover:dark:bg-neutral-900  hover:dark:text-white  transition-all justify-between"
          >
            <div className="flex items-center">
              <EmailIcon />
              <div className="ml-3">Email</div>
            </div>
            <ArrowIcon />
          </a>
        </div>

        <h2 className="mt-10">
          <span className="font-bold text-2xl">Latest Project</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-2">
          <Projects
            title={"Anonymous Message"}
            desc={"Send anonymous message to you."}
            image={"/img/anonym.png"}
            href="https://anonymous-website-message.vercel.app/"
            stack={
              <Badge
                // techstack="NextJS"
                logo1={
                  <IconNextjs width="16px" height="16px" className="mr-1" />
                }
                logo2={
                  <IconSupabase width="16px" height="16px" className="mr-1" />
                }
              />
            }
          />
          <Projects
            title={"Movies"}
            desc={"Simple movies web using NextJS"}
            image={"/img/movies.png"}
            href="https://movies-13.vercel.app/"
            stack={
              <Badge
                // techstack="NextJS"
                logo1={
                  <IconNextjs width="16px" height="16px" className="mr-1" />
                }
              />
            }
          />
          <Projects
            title={"Simple E-commerce"}
            desc={"Simple e-commerce using NextJS appDir"}
            image={"/img/ecommerce.png"}
            href="https://simple-ecommerce-appdir.vercel.app/"
            stack={
              <Badge
                // techstack="NextJS"
                logo1={
                  <IconNextjs width="16px" height="16px" className="mr-1" />
                }
              />
            }
          />
        </div>

        <h2 className="mt-5">
          <span className="font-bold text-2xl">Recent Post</span>
        </h2>
        <div className="flex flex-col gap-4">
          <Writing
            title={
              "My First Open-Source Contribution: Translating ReactJS Pages to Indonesian Language"
            }
            href="https://yafialhakimblog.vercel.app/story/pr"
            desc="Contributing to open source is a great way to improve your skills and learn new things."
          />
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
        </div>
      </div>
    </>
  );
}
