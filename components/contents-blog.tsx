import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowIcon } from "./icons";

interface BlogContentProps {
  title: string;
  desc: string;
  image: string;
  href: string;
}

const BlogContent = (props: BlogContentProps) => {
  return (
    <>
      <div className="flex w-full  border border-neutral-800 rounded-lg p-3 no-underline items-center  hover:bg-neutral-900 hover:text-white  hover:dark:bg-neutral-900  hover:dark:text-white  transition-all">
        <div className="flex flex-row">
          <Image
            src={props.image}
            width={80}
            height={80}
            className="rounded-lg w-[80px] h-[80px]"
            alt="Blog Image"
          />
          <div className="ml-[20px] flex flex-col gap-2">
            <Link href="/" className="text-lg font-bold hover:text-zinc-600">
              {props.title}
            </Link>
            <p className="text-sm text-neutral-500">{props.desc}</p>
            <div className="inline-flex gap-[20px] text-sm">
              <Link href={props.href} className=" hover:text-zinc-600">
                {props.href}
              </Link>
            </div>
          </div>
        </div>{" "}
        <div className="flex ml-auto">
          {" "}
          <ArrowIcon />
        </div>
      </div>
    </>
  );
};

export default BlogContent;
