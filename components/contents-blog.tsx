import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogContentProps {
  title: string;

  image: string;
  href: string;
}

const BlogContent = (props: BlogContentProps) => {
  return (
    <div className="flex flex-row">
      <Image
        src={props.image}
        width={200}
        height={200}
        className="rounded-lg w-[80px] h-[80px]"
        alt="Blog Image"
      />
      <div className="ml-[32px] flex flex-col justify-between">
        <Link href="/" className="text-lg font-bold hover:text-zinc-600">
          {props.title}
        </Link>
        <div className="inline-flex gap-[32px] text-sm">
          <span>{props.href}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
