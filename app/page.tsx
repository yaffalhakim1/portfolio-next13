import Bio from "@/components/bio";
import { ArrowIcon, GitHubIcon } from "@/components/icons";

export default function Home() {
  return (
    <div className="flex flex-col gap-[20px]">
      <h1 className="font-bold text-[36px]">Yafi Alhakim</h1>
      <p>
        I&apos;m Yafi, a{" "}
        <span className="font-bold">
          Computer Engineering Student at Diponegoro University
        </span>
      </p>
      {/* @ts-expect-error Server Component */}
      <Bio />
      <p className="md:w-10/12">
        Hi there! I&apos;m a final year student with a passion for web
        development. I have experience working with React JS, NextJS, Flutter
        and I am always looking to learn more. I&apos;m dedicated to creating
        clean, functional, and responsive web applications that provide an
        excellent user experience. When I&apos;m not coding, I enjoy staying
        up-to-date with the latest trends in technology and spending time with
        my friends and family.
      </p>
      <div className="flex flex-col gap-2 md:flex-row md:gap-2">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://drive.google.com/file/d/1JQ1ds8HQoCOlxcirSr3jZknvESDXuc_S/view"
          className="flex w-full md:w-3/12 border border-neutral-800 rounded-lg p-4 no-underline items-center  hover:bg-neutral-900 hover:text-white hover:dark:bg-neutral-900  hover:dark:text-white  transition-all justify-between"
        >
          <div className="flex items-center">
            <div className="ml-3">CV</div>
          </div>
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
}
