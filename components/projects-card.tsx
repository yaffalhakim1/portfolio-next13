/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowIcon } from "./icons";

interface ProjectProps {
  title: string;
  desc: string;
  image: string;
  href: string;
}

const Projects = (props: ProjectProps) => {
  return (
    <>
      <a href={props.href}>
        <div className="flex w-full border border-neutral-800 rounded-lg  no-underline items-center  hover:bg-neutral-900 hover:text-white  hover:dark:bg-neutral-900  hover:dark:text-white transition-all">
          <div className="">
            <img
              src={props.image}
              width={200}
              height={200}
              className="rounded-t-lg w-full"
              alt="Project Image"
            />
            <div className="mt-5 ml-[10px] mb-[10px] flex flex-col gap-2">
              <div className="text-lg font-bold hover:text-zinc-600">
                {props.title}
              </div>

              <p className="text-sm text-neutral-500">{props.desc}</p>
            </div>
          </div>{" "}
        </div>
      </a>
    </>
  );
};

export default Projects;
