import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";

import { cn } from "@/lib/utils";
import "./globals.css";

const font = IBM_Plex_Sans_Thai({
  weight: ["400", "600"],
  subsets: ["thai", "latin"],
});

export const metadata: Metadata = {
  title: "next-tailwind-ts",
  description: "Powered by owlsome-official/next-tailwind-ts",
};
export const viewport: Viewport = {
  themeColor: "oklch(70% 0.1 155)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(font.className, "antialiased")}>
        <main className="from-primary to-accent flex min-h-screen flex-col items-center justify-center bg-linear-to-tr p-8 sm:p-12">
          {children}
        </main>
      </body>
    </html>
  );
}
