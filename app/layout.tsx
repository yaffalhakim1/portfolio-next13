"use client";

import Sidebar from "@/components/sidebar";
import { motion } from "framer-motion";
import "./globals.css";
import clsx from "clsx";
import { Providers } from "./providers";
import { useEffect, useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Metadata } from "next";

const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Yafi Alhakim",
  description: "Muhammad Yafi's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showPage, setShowPage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body>
          <Providers>
            <div
              className={clsx(
                "flex flex-col md:flex-row lg:w-[1000px] mx-4 lg:mx-auto lg:mt-[100px] mt-8 antialiased max-w-4xl mb-40",
                jakarta.className
              )}
            >
              <Sidebar className="z-50" />
              <main>{children}</main>
            </div>
          </Providers>
        </body>
      </html>
    </>
  );
}
