import {
  ArrowIcon,
  GitHubIcon,
  LinkedinIcon,
  EmailIcon,
  IconNextjs,
  IconTailwind,
  IconSupabase,
  IconReactjs,
  IconFlutter,
  IconTypescript,
  IconDart,
} from "@/components/icons";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <h1 className="font-bold text-[36px]">About Me</h1>
      <p>
        I&apos;m Yafi, a{" "}
        <span className="font-bold">
          Computer Engineering Student at Diponegoro University
        </span>
      </p>
      <p className="md:w-9/12 text-justify">
        I already have experience building web app and now currently i focused
        on pursuit my career as a Front End Developer.
      </p>
      <div className="border my-4 md:w-9/12" />
      <p className="md:w-9/12 text-justify">
        Hello and welcome to my website! My name is Muhammad Yafi Alhakim, and
        I&apos;m a Front end Developer based in Semarang, Indonesia. I&apos;m
        passionate about good design and build things, and I love building for
        the web.
      </p>

      <p className="md:w-9/12 text-justify">
        On this website, you&apos;ll find some writings and things i have been
        build. I&apos;m excited to share Next/ReactJS knowledge with you.
      </p>

      <p className="md:w-9/12 text-justify">
        I&apos;m always learning and growing, and I&apos;m excited to see what
        the future holds. Thank you for visiting my website. If you have any
        questions or comments, please don&apos;t hesitate to contact me.
      </p>

      <h1 className="font-bold text-lg">Current Tech Stack</h1>
      <div className="flex space-x-2">
        <IconNextjs width="24px" height="24px" />
        <IconReactjs width="24px" height="24px" />
        <IconFlutter width="24px" height="24px" />
        <IconSupabase width="24px" height="24px" />

        <IconTailwind width="24px" height="24px" />
        <IconTypescript width="24px" height="24px" />
        <IconDart width="24px" height="24px" />
      </div>

      <div className="flex flex-col gap-2 md:flex-row md:gap-2">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/yafialhakim/"
          className="flex w-full md:w-3/12 border border-neutral-800 rounded-lg p-4 no-underline items-center hover:bg-neutral-900 hover:text-white hover:dark:bg-neutral-900 hover:dark:text-white transition-all justify-between"
        >
          <div className="flex items-center">
            <LinkedinIcon />
            <div className="ml-3">Linkedin</div>
          </div>
          <ArrowIcon />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/yaffalhakim1"
          className="flex w-full md:w-3/12 border border-neutral-800 rounded-lg p-4 no-underline items-center  hover:bg-neutral-900 hover:text-white  hover:dark:bg-neutral-900  hover:dark:text-white  transition-all justify-between"
        >
          <div className="flex items-center">
            <GitHubIcon />
            <div className="ml-3">GitHub</div>
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
    </div>
  );
};

export default page;
