import Link from "next/link";
import Logo from "./logo.svg"
import Image from "next/image";

export default function Navbar(){
    return(
        <nav>
            <Image
                src={Logo}
                alt="MTL Preserves Logo"
                width={180}
                quality={200}
                placeholder="empty"
            />
          <Link href="/homePage">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/aboutUs">About Us</Link>
          <Link href="/contactUs">Contact Information</Link>
        </nav>
    )
}