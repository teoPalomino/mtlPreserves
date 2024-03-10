import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Button from "react-bootstrap/esm/Button";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

//components
import Navbar from "./components/Navbar";
import Link from "next/link";

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
  const wip = false;
  const underConst = () =>{
    if (!wip){
      return <Navbar/>
    }
  };
  return (
    <html lang="en">
      <body className={inter.className}>
      {wip?(
        <div>
          <div>
            {underConst()}
          </div>
          <div className="centRoid2 max-w-screen">
            <div>
              {children}
          </div>
        </div>

        </div>
        ):(
          <div className=" max-w-[100%]">
            <div>
              {underConst()}
            </div>
            <div className="centRoid2 max-w-screen">
              <div
                className="shadow-xl shadow-gray-700 rounded-xl"
                style={{background: 'url("https://c4.wallpaperflare.com/wallpaper/37/549/93/wood-high-resolution-wallpaper-preview.jpg")'}}>
                {children}
              </div>
            </div>
          </div>
        )}
      
        {/* To keep the div in place use 'fixed' in the one below to put the footer back.. */}
        <div className="bottom-0 left-0 flex h-35 w-full items-end justify-center bg-[#67b2bb] lg:static lg:h-auto lg:w-auto lg:bg-none text-white">
            <div className="flex flex-col">
              <div>
                <p>
                  Stay connected / Rester connecté:
                </p>
              </div>
              <div className="centRoid bottom-10">
                <Link target="_blank" href={"https://www.instagram.com/mtlpreserves?igsh=MTgwMzdmNHFncGh5NA=="}>
                    <Button>
                        <FaInstagram />
                    </Button>
                </Link>
                <Link target="_blank" href={"https://www.facebook.com/profile.php?id=100090603374739&mibextid=ZbWKwL"}>
                    <Button>
                        <FaFacebookSquare />
                    </Button>
                </Link>
              </div>
            </div>
        </div>
      </body>
    </html>
  );
}
