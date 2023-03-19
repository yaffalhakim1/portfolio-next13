import Sidebar from "@/components/sidebar";
import "./globals.css";
import { Source_Sans_Pro } from "next/font/google";
import clsx from "clsx";
import { Providers } from "./providers";

export const metadata = {
  title: "Muhammad Yafi Alhakim",
  description:
    "Hi there! I&apos;m a final year student with a passion for web development. I have experience working with React JS and Next JS, and I'm always looking to learn more. I'm dedicated to creating clean, functional, and responsive web applications that provide an excellent user experience. When I'm not coding, I enjoy staying up-to-date with the latest trends in technology and spending time with my friends and family",
};

const source_Sans_Pro = Source_Sans_Pro({
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div
            className={clsx(
              "flex flex-col md:flex-row lg:w-[1000px] mx-4 lg:mx-auto lg:mt-[151px] mt-8 antialiased max-w-4xl mb-40 ",
              source_Sans_Pro.className
            )}
          >
            <Sidebar />
            <main className="flex flex-grow w-full">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
