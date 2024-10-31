import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/containers";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kanban board",
  description: "Created by Mykola Maik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
