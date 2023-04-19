import BlogContent from "@/components/projects-card";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="font-bold text-[36px]">Projects</h1>
      <p className="mt-3">
        Here are some of my projects. I&apos;m currently working on a few
        projects that I can&apos;t wait to share with you.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-5">
        {/* {[0, 1, 2, 3, 4, 5].map((item) => (
          <BlogContent key={item} />
        ))} */}
        <BlogContent
          title={"Todo List"}
          desc={"This is a todo list that I made using Supabase."}
          href="https://todo-supabasev2.vercel.app/"
          image={"/img/todos.png"}
        />
        <BlogContent
          title={"Moviez"}
          desc={"An example of generateStaticParams (nextjs)."}
          href="https://next-movies-ruby.vercel.app/"
          image={"/img/movies.png"}
        />
        <BlogContent
          title={"Blog Design"}
          desc={"Practicing slicing a design using Tailwind CSS."}
          href="https://slicing-next1.vercel.app/"
          image={"/img/slicing1.png"}
        />
        <BlogContent
          title={"CodeDesign"}
          desc={"Slicing from design to web from codedesign.dev."}
          href="https://slicing-all.vercel.app/"
          image={"/img/codesign.png"}
        />
      </div>
    </div>
  );
};

export default page;
