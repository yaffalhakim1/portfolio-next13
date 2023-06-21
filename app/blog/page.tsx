import Writing from "@/components/contents-writing";
import BlogContent from "@/components/contents-writing";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="font-bold text-[36px]">Writings</h1>
      <p>
        Here are some of my writings. All of my writings are available on my{" "}
        <span>
          <a
            href="https://yafialhakimblog.vercel.app/"
            className="text-blue-500"
          >
            blog
          </a>
        </span>
        .
      </p>
      <div className="flex flex-col gap-4 mt-8">
        <Writing
          title={
            "My First Open-Source Contribution: Translating ReactJS Pages to Indonesian Language"
          }
          href="https://yafialhakimblog.vercel.app/story/pr"
          desc="PWA is a web application that can be installed on the user's device."
        />
        <Writing
          title={"Toast with Sonner"}
          href="https://yafialhakimblog.vercel.app/library/sonner"
          desc="Sonner is a simple toast library for NextJS"
        />
        <Writing
          title={"Implementing PWA in NextJS"}
          href="https://yafialhakimblog.vercel.app/library/pwa"
          desc="PWA is a web application that can be installed on the user's device."
        />
      </div>
    </div>
  );
};

export default page;
