import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "~/components/Sidebar";
import { Header } from "~/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Recommendations",
  description: "AI-powered movie recommendations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative min-h-screen bg-zinc-950">
          <Header />
          <div className="flex relative">
            <Sidebar />
            <main className="flex-1 w-0 ml-[240px]">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
