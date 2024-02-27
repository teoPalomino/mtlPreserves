import Button from "react-bootstrap/esm/Button";
import Logo from "../components/logo.svg"
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdRoundedCorner } from "react-icons/md";
import Link from "next/link";



export default function WorkInProgress() {
    return (
        <div className="centCoid">
            <div>
                <Image
                    src={Logo}
                    alt="MTL Preserves Logo"
                    quality={500}
                    width={500}
                    placeholder="empty"
                    className="roundedCor"
                />
                <br/>
            </div>
            <div className="centCoid">
                <h1>
                    MTLPreserves website is currenly under construction...
                </h1>
                <br/>
                <p className="centCoid">
                    Please come back in March to see our new website!<br/>
                    In the meantime, feel free to check us out on our
                    social media accounts below!
                </p>
            </div>
            <div className="foota">
                <div>
                    <p>
                        Stay connected:
                    </p>
                </div>
                <div className="centRoid">
                    <Link href={"https://www.instagram.com/mtlpreserves?igsh=MTgwMzdmNHFncGh5NA=="}>
                        <Button>
                            <FaInstagram />
                        </Button>
                    </Link>
                    <Link href={"https://www.facebook.com/profile.php?id=100090603374739&mibextid=ZbWKwL"}>
                        <Button>
                            <FaFacebookSquare />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}