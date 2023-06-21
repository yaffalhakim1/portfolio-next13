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
import Bio from "@/components/bio";
import BioLeet from "@/components/leet";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-[20px] grow ">
        <h1 className="font-bold text-5xl text-center mt-3 md:mt-0">
          Yafi Alhakim
        </h1>
        <h3 className="font-bold text-3xl text-center">
          A student who is also a developer that loves to learn new things
        </h3>

        <p className="text-center leading-relaxed">
          In my spare time, I train using LeetCode exercises and sharpening my
          Git skills by contributing to open-source projects. I also love to
          learn new things and try to implement them in my projects.
        </p>

        <div className="md:flex-row flex justify-center items-center md:space-x-2 mt-5  flex-col">
          {/* @ts-expect-error Server Component */}
          <Bio />
          <div className="mt-3"></div>
          {/* @ts-expect-error Server Component */}
          <BioLeet />
        </div>

        <div className="flex justify-center items-center space-x-2 mt-5">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1WaL3pUhv4lYsMMv27xWFZ_2hoSh3jLR4/view?usp=sharing"
            className="flex w-full md:w-3/12 border border-neutral-800 rounded-lg p-4 no-underline items-center hover:bg-neutral-900 hover:text-white hover:dark:bg-neutral-900 hover:dark:text-white transition-all justify-between"
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
            className="flex w-full md:w-3/12 border border-neutral-800 rounded-lg p-4 no-underline items-center hover:bg-neutral-900 hover:text-white hover:dark:bg-neutral-900 hover:dark:text-white transition-all justify-between"
          >
            <div className="flex items-center">
              <EmailIcon />
              <div className="ml-3">Email</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
      {/* 
      <footer className="mt-10 inset-x-0 bottom-0 z-50">
        <p className="flex justify-center items-center">
          created with nextjs reactjs app dir
        </p>
      </footer> */}
    </div>
  );
}
