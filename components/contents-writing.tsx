import React from "react";
import { ArrowIcon } from "./icons";

interface ItemProps {
  href?: string;
  title?: string;
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
        <div className="flex items-center">
          <div className="ml-3">{props.title}</div>
        </div>
        <ArrowIcon />
      </a>
    </div>
  );
}
