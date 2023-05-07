"use client";

import Sidebar from "@/components/sidebar";
import { motion } from "framer-motion";
import "./globals.css";
import clsx from "clsx";
import { Providers } from "./providers";
import { useEffect, useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

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
            <motion.div
              initial={{ opacity: showPage ? 0 : 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center justify-center w-full h-full fixed top-0 left-0 z-50"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center"
              >
                {showPage && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                    transition={{ duration: 1 }}
                    className="text-2xl font-bold"
                  >
                    Hire Yafi he is good with frontend things!
                  </motion.p>
                )}
                {showPage && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                    transition={{ duration: 1 }}
                    className="text-md mt-3"
                  >
                    - some friends
                  </motion.p>
                )}
              </motion.div>
            </motion.div>
            <div
              style={{ display: showPage ? "none" : "flex" }}
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
