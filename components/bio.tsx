import Image from "next/image";
import React from "react";
import { getGithubUserData } from "@/lib/metrics";

interface ItemProps {
  icon?: string;
  value?: string;
  label?: string;
}
const Item = ({ icon = "", value = "value", label = "label" }: ItemProps) => (
  <div className="inline-flex gap-[8px] text-sm">
    <Image alt="icon" src={icon} width={20} height={20} className="" />
    <span className="font-bold">{value}</span>
    <span>{label}</span>
  </div>
);

export default async function Bio() {
  let repos;

  try {
    repos = await getGithubUserData();
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="inline-flex gap-[27px] justify-center items-center rounded-lg border border-zinc-500 w-[312px] h-[134px]">
      <Image
        alt="my-photo"
        src={"/img/photo.jpg"}
        width={80}
        height={80}
        className="rounded-full"
      />
      <div className="flex flex-col gap-2">
        <Item
          icon="/img/project.png"
          value={repos?.public_repos}
          label="Repo"
        />
        <Item
          icon="/img/github.png"
          value={repos?.starred.length}
          label="Stars on Github"
        />
        <Item icon="/img/deal.png" value="2" label="Client" />
      </div>
    </div>
  );
}
