import React from "react";
import { ArrowIcon } from "./icons";

interface ItemProps {
  href?: string;
  title?: string;
  desc?: string;
}

export default function Writing(props: ItemProps) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-2">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={props.href}
        className="flex w-full border border-neutral-800 rounded-lg p-4 no-underline items-center  hover:bg-neutral-900 hover:text-white hover:dark:bg-neutral-900  hover:dark:text-white  transition-all justify-between"
      >
        <div className=" items-center">
          <div className="ml-3 text-lg font-bold">{props.title}</div>
          <div className="ml-3 text-sm mt-2 font-extralight">{props.desc}</div>
        </div>
      </a>
    </div>
  );
}
