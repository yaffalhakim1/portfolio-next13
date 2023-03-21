import Writing from "@/components/contents-writing";
import BlogContent from "@/components/contents-writing";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="font-bold text-[36px]">Writings</h1>
      <p>
        Here are some of my writings. I&apos;m currently working on a few
        writings that I hope you can enjoy. All of my writings are available on
        my{" "}
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
        {/* {[0, 1, 2, 3, 4, 5].map((item) => (
          <BlogContent key={item} />
        ))} */}
        <Writing
          title={"Toast with Sonner"}
          href="https://yafialhakimblog.vercel.app/sonner"
        />
        <Writing
          title={"Implementing PWA in NextJS"}
          href="https://yafialhakimblog.vercel.app/pwa"
        />
      </div>
    </div>
  );
};

export default page;
