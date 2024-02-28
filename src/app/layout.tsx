import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//components
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MTL Preserves",
  description: "Local MTL Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const wip = true;
  const underConst = () =>{
    if (!wip){
      return <Navbar/>
    }
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
        {underConst()}
        {children}
        </div>
      </body>
    </html>
  );
}
