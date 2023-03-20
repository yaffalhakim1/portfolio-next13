import BlogContent from "@/components/contents-blog";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="font-bold text-[36px]">Projects</h1>
      <p>
        Here are some of my projects. I'm currently working on a few projects
        that I can't wait to share with you.
      </p>
      <div className="flex flex-col gap-8 mt-8">
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
      </div>
    </div>
  );
};

export default page;
