import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";

import "./globals.css";

const font = IBM_Plex_Sans_Thai({
  weight: ["400", "600"],
  subsets: ["thai", "latin"],
});

export const metadata: Metadata = {
  title: "REPLACE_WITH_YOUR_APP_NAME",
  description: "Powered by buildingwatsize/next-tailwind-ts",
};

export const viewport: Viewport = {
  themeColor: "#FFBE98",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-12">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
