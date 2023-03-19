import Image from "next/image";
import React from "react";

interface Props {
  name?: string;
  message?: string;
  image?: string;
}

export const GuestMessage = ({
  name = "Name",
  image = "/img/default.png",
  message = "message",
}: Props) => {
  return (
    <div className="inline-flex gap-[10px] items-center">
      <Image
        alt="Guest Image"
        src={image || ""}
        width={100}
        height={100}
        className="rounded-full w-[40px] h-[40px]"
      />
      <span className="font-bold">{name} : </span>
      <span>{message}</span>
    </div>
  );
};
