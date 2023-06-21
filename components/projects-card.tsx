/* eslint-disable @next/next/no-img-element */

import React from "react";
import Badge from "./Badge";

interface ProjectProps {
  title: string;
  desc: string;
  image: string;
  href: string;
  stack?: React.ReactNode;
}

const Projects = (props: ProjectProps) => {
  return (
    <>
      <a href={props.href}>
        <div className="flex w-full rounded-lg no-underline  transition-all">
          <div className="">
            <img
              src={props.image}
              width={170}
              height={170}
              className="rounded-lg w-full"
              alt="Project Image"
            />
            <div className="mt-3 ml-[10px] mb-1 flex flex-col gap-2">
              <div className="text-lg font-bold hover:text-zinc-600">
                {props.title}
              </div>

              <p className="text-sm text-neutral-500 flex-grow">{props.desc}</p>

              {props.stack && <div>{props.stack}</div>}
            </div>
          </div>{" "}
        </div>
      </a>
    </>
  );
};

export default Projects;
