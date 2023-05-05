"use client";

import Sidebar from "@/components/sidebar";
import "./globals.css";
import clsx from "clsx";
import { Providers } from "./providers";
import { useEffect, useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

// export const metadata = {
//   title: "Muhammad Yafi Alhakim",
//   description:
//     "Hi there! I&apos;m a final year student with a passion for web development",
// };

const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

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
              {showPage ? (
                <div
                  className={`flex flex-col items-center justify-center w-full h-full fixed top-0 left-0 z-50 ${
                    showPage
                      ? "opacity-100 transition-opacity duration-1000"
                      : "opacity-0"
                  }`}
                >
                  <div className="flex flex-col items-center justify-center">
                    <p
                      className={`text-2xl font-bold ${
                        showPage
                          ? "opacity-100 transition-opacity duration-1000"
                          : "opacity-0"
                      }`}
                    >
                      Hire him he is so good with react things!
                    </p>
                    <p
                      className={`text-md mt-4 ${
                        showPage
                          ? "opacity-100 transition-opacity duration-1000"
                          : "opacity-0"
                      }`}
                    >
                      - some friends
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <Sidebar />
                  <main className="flex flex-grow w-full">{children}</main>
                </>
              )}
            </div>
          </Providers>
        </body>
      </html>
    </>
  );
}
