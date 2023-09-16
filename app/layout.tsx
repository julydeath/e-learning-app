import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import DarkTheme from "@/utils/DarkTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manoj Learning",
  description: "First E-learning app using next-13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DarkTheme>
          <Header />
          {children}
        </DarkTheme>
      </body>
    </html>
  );
}
