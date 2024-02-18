import Link from "next/link";
import Logo from "./mtlPreserves.svg"
import Image from "next/image";

export default function Navbar(){
    return(
        <nav>
            <Image
                src={Logo}
                alt="MTL Preserves Logo"
                width={100}
                quality={100}
                placeholder="empty"
            />
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/aboutUs">About Us</Link>
          <Link href="/contactUs">Contact Information</Link>
        </nav>
    )
}