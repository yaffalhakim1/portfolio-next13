import Bio from "@/components/bio";
import { ArrowIcon, GitHubIcon } from "@/components/icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-[36px]">
      <h1 className="font-bold text-[48px]">Muhammad Yafi Alhakim</h1>
      <p>
        I'm Yafi, a{" "}
        <span className="font-bold">
          Final Year Computer Eng Student from Diponegoro University, Indonesia
        </span>
      </p>
      {/* @ts-expect-error Server Component */}
      <Bio />

      <p className="">
        Hi there! I'm a final year student with a passion for web development. I
        have experience working with React JS, NextJS, Flutter and I'm always
        looking to learn more. I'm dedicated to creating clean, functional, and
        responsive web applications that provide an excellent user experience.
        When I'm not coding, I enjoy staying up-to-date with the latest trends
        in technology and spending time with my friends and family.
      </p>
      <div className="inline-flex gap-8 ">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/yaffalhakim1"
          className="flex w-full border border-neutral-800 rounded-lg p-4 no-underline items-center text-black hover:dark:bg-neutral-900 hover:text-white hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <div className="ml-3">GitHub</div>
          </div>
          <ArrowIcon />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://bento.me/yafialhakim"
          className="flex w-full border border-neutral-800 rounded-lg p-4 no-underline items-center text-black hover:dark:bg-neutral-900 hover:text-white hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <div className="ml-3">Bento</div>
          </div>
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
}
