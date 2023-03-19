import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-bold text-[48px]">About Me</h1>
      <p>
        I'm Yafi, a{" "}
        <span className="font-bold">
          Final Year Computer Eng Student from Diponegoro University, Indonesia
        </span>
      </p>
      <div className="border my-4" />
      <p>
        Hello and welcome to my website! My name is Muhammad Yafi Alhakim, and
        I'm a Front end Developer based in Semarang, Indonesia. I'm passionate
        about good design and build things, and I love building for the web.
      </p>

      <p>
        I believe that software engineering is not just about do the code but
        also understand what users need, and I strive to live my life in
        accordance with those values. On this website, you'll find some writings
        and things i have been build. I'm excited to share Next/ReactJS
        knowledge with you.
      </p>

      <p>
        I'm always learning and growing, and I'm excited to see what the future
        holds. Thank you for visiting my website. If you have any questions or
        comments, please don't hesitate to contact me.
      </p>
      <div className="flex flex-col gap-2 md:flex-row md:gap-2">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/pengenradiant"
          className="flex w-full border  border-neutral-800 rounded-lg p-4 no-underline items-center text-black hover:dark:bg-neutral-900 hover:text-white hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <TwitterIcon />
            <div className="ml-3">Twitter</div>
          </div>
          <ArrowIcon />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/yaffalhakim1"
          className="flex w-full border  border-neutral-800 rounded-lg p-4 no-underline items-center text-black hover:dark:bg-neutral-900 hover:text-white hover:bg-neutral-100 transition-all justify-between"
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
          href=""
          className="flex w-full border  border-neutral-800 rounded-lg p-4 no-underline items-center text-black hover:dark:bg-neutral-900 hover:text-white hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <YoutubeIcon />
            <div className="ml-3">YouTube</div>
          </div>
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
};

export default page;
