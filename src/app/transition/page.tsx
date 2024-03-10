import Logo from "../components/logo.svg"
import Image from "next/image";

export default function TestDemo() {
    return (
        <div>
            <div className="flex flex-col items-center">
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
            <div className="centCoidWIP text-white">
                <h1>
                    MTLPreserves website is currenly under construction...
                </h1>
                <br/>
                <p className="centCoidWIP">
                    Please come back in March to see our new website!<br/>
                    In the meantime, feel free to check us out on our
                    social media accounts below!
                </p>
            </div>
        </div>
    )
}