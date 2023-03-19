"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface Props {
  params?: any;
}

interface ItemProps {
  href?: string;
  text?: string;
}

const Items = {
  "/": {
    name: "home",
    x: 0,
    y: 0,
    w: "64px",
  },
  "/about": {
    name: "about",
    x: 64,
    y: 35,
    w: "65px",
  },
  "/projects": {
    name: "projects",
    x: 127,
    y: 69,
    w: "90px",
  },
  "/guestbook": {
    name: "guestbook",
    x: 182,
    y: 104,
    w: "100px",
  },
};

export default function Sidebar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <Image
            alt="Logo"
            width={54}
            height={54}
            className="mx-4 mb-4 rounded-full"
            src="/img/photo.jpg"
          />
        </div>
        <nav
          className="flex overflow-hidden flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
            {Items[pathname] ? (
              <>
                <div className="hidden md:block">
                  <motion.div
                    className="absolute bg-neutral-100 h-[34px] rounded-md z-[-1]"
                    layoutId="test2"
                    initial={{ opacity: 0, y: Items[pathname].y }}
                    animate={{
                      opacity: 1,
                      y: Items[pathname].y,
                      width: Items[pathname].w,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </div>
                <div className="block md:hidden">
                  <motion.div
                    className="absolute bg-neutral-100  h-[34px] rounded-md z-[-1]"
                    layoutId="test"
                    initial={{ opacity: 0, x: Items[pathname].x }}
                    animate={{
                      opacity: 1,
                      x: Items[pathname].x,
                      width: Items[pathname].w,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </div>
              </>
            ) : null}

            {Object.entries(Items).map(([path, { name }]) => {
              const isActive = path === pathname;
              return (
                <Link
                  key={path}
                  href={path}
                  className={clsx(
                    "transition-all hover:text-neutral-800  py-[5px] px-[10px]",
                    {
                      "text-neutral-500": !isActive,
                      "font-bold": isActive,
                    }
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
