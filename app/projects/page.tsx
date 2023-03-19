import BlogContent from "@/components/contents-blog";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="font-bold text-[48px]">Blog</h1>
      <div className="flex flex-col gap-8 mt-8">
        {/* {[0, 1, 2, 3, 4, 5].map((item) => (
          <BlogContent key={item} />
        ))} */}
        <BlogContent
          title={"Todo List With Supabase"}
          href="https://todo-supabasev2.vercel.app/"
          image={""}
        />
        <BlogContent
          title={"Todo List With Supabase"}
          href="https://todo-supabasev2.vercel.app/"
          image={""}
        />
        <BlogContent
          title={"Todo List With Supabase"}
          href="https://todo-supabasev2.vercel.app/"
          image={""}
        />
        <BlogContent
          title={"Todo List With Supabase"}
          href="https://todo-supabasev2.vercel.app/"
          image={""}
        />
      </div>
    </div>
  );
};

export default page;
