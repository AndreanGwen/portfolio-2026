import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./component/SmoothScroll/page";
import { cn } from "@/lib/utils";
import TargetCursor from "@/components/TargetCursor";
import CursorProvider from "./component/CursorProvider/page";
import { StateContextProvider } from "@/context/StateContext";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AndreanGwen",
  description:
    "Junior Full Stack Web Developer skilled in JavaScript and TypeScript, passionate about building modern web applications and exploring IoT development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn(
        "h-full",
        "antialiased",
        inter.variable,
        jetBrainsMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <StateContextProvider>
          <CursorProvider />
          <div className="min-h-full flex flex-col">{children}</div>
        </StateContextProvider>
      </body>
    </html>
  );
}
