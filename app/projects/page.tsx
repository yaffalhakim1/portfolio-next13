import BlogContent from "@/components/contents-blog";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="font-bold text-[36px]">Projects</h1>
      <p>
        Here are some of my projects. I&apos;m currently working on a few
        projects that I can&apos;t wait to share with you.
      </p>
      <div className="flex flex-col gap-4 mt-4">
        {/* {[0, 1, 2, 3, 4, 5].map((item) => (
          <BlogContent key={item} />
        ))} */}
        <BlogContent
          title={"Todo List With Supabase"}
          desc={
            "This is a todo list that I made using Supabase. required login to access the todo list."
          }
          href="https://todo-supabasev2.vercel.app/"
          image={"/img/todos.png"}
        />
        <BlogContent
          title={"Movie App With NextJS and generateStaticParams"}
          desc={
            "This is a movie app that I made using NextJS and generateStaticParams. I use the API from themoviedb.org and this web is zero loading."
          }
          href="https://next-movies-ruby.vercel.app/"
          image={"/img/movies.png"}
        />
        <BlogContent
          title={"Slicing Design With Tailwind CSS"}
          desc={"Practicing slicing a design using Tailwind CSS."}
          href="https://slicing-next1.vercel.app/"
          image={"/img/slicing1.png"}
        />
        <BlogContent
          title={"Slicing Design With Tailwind CSS from CodeDesign.dev"}
          desc={
            "Slicing from design to web using NextJS and TailwindCSS. Not perfectly responsive and still need to manage the image."
          }
          href="https://slicing-all.vercel.app/"
          image={"/img/codesign.png"}
        />
      </div>
    </div>
  );
};

export default page;
