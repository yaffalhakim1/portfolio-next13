import Image from "next/image";
import React from "react";
import { getGithubUserData } from "@/lib/metrics";
import {
  GitHubIcon,
  IconProject,
  IconSourceRepository,
  IconStar,
} from "@/components/icons";

interface ItemProps {
  icon?: any;
  value?: string;
  label?: string;
}
const Item = ({ icon, value = "value", label = "label" }: ItemProps) => (
  <div className="inline-flex gap-[8px] text-sm">
    {icon} <span className="font-bold">{value}</span>
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
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://github.com/yaffalhakim1"
    >
      <div className="inline-flex gap-[27px] justify-center items-center rounded-lg border border-zinc-500 w-[312px] h-[134px]">
        <GitHubIcon width="60px" height="60px" />
        <div className="flex flex-col gap-2">
          <Item
            icon={<IconSourceRepository width="20px" height="20px" />}
            value={repos?.public_repos}
            label="Repo"
          />
          <Item
            icon={<IconStar width="20px" height="20px" />}
            value={repos?.starred.length}
            label="Stars on Github"
          />
          <Item
            icon={<IconProject width="20px" height="20px" />}
            value="2"
            label="Pull Requests"
          />
        </div>
      </div>
    </a>
  );
}
