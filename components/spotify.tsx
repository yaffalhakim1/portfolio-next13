"use client";
import clsx from "clsx";
import * as React from "react";
import { SiSpotify } from "react-icons/si";
import useSWR from "swr";

import { SpotifyData } from "@/app/api/spotify";

export default function Spotify() {
  const fetcher = (url: any) => fetch(url).then((r) => r.json());
  const { data } = useSWR<SpotifyData>("/api/spotify", fetcher);
  return (
    <>
      <section className="bg-gray-600">
        <main className="flex items-center justify-center">
          <a
            target="_blank"
            rel="noopener noreferer"
            href={data?.isPlaying ? data.songUrl : ""}
            className="relative flex w-72 items-center space-x-4 rounded-md border p-5 transition-shadow hover:shadow-md"
          >
            <div className="w-16">
              {data?.isPlaying ? (
                <img
                  className="w-16 shadow-sm"
                  src={data?.albumImageUrl}
                  alt={data?.album}
                />
              ) : (
                <SiSpotify size={64} color={"#1ED760"} />
              )}
            </div>

            <div className="flex-1">
              <p className="component font-bold">
                {data?.isPlaying ? data.title : "Not Listening"}
              </p>
              <p className="font-dark text-xs">
                {data?.isPlaying ? data.artist : "Spotify"}
              </p>
            </div>
            <div className="absolute right-1.5 bottom-1.5">
              <SiSpotify size={20} color={"#1ED760"} />
            </div>
          </a>
        </main>
      </section>
    </>
  );
}
