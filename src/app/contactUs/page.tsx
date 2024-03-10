import Link from "next/link";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import Button from "react-bootstrap/esm/Button";

export default function ContactUs() {
    return (
  
      <main className="flex justify-center">
        <div  className="centCoid2 font-black">
          {/* <h2> Contact Information </h2> */}
          <br/>
          We&lsquo;re happy to answer any questions you might have! You can reach us at <a href="" className="text-blue-700 underline decoration-solid">mtlpreserves@protonmail.com</a> or via social media!
          <br/><br/>
          <div>
            <div className="flex flex-direction-row justify-center">
                <Link target="_blank" href={"https://www.instagram.com/mtlpreserves?igsh=MTgwMzdmNHFncGh5NA=="}>
                    <Button className="bg-gradient-to-t from-[#f5c84f] via-[#e90011] to-[#4a5dc6] rounded-full">
                        <FaInstagram style={{color: 'white'}}/>
                    </Button>
                </Link>
                &nbsp;
                <Link target="_blank" href={"https://www.facebook.com/profile.php?id=100090603374739&mibextid=ZbWKwL"}>
                    <Button className="bg-[#0866ff] rounded-full">
                        <FaFacebookSquare />
                    </Button>
                </Link>
            </div>
          </div>
          <br/>
          Nous nous ferons un plaisir de répondre à vos questions! Vous pouvez nous contacter à l&lsquo;adresse mtlpreserves@protonmail.com ou via les médias sociaux!
          {/* <div className="foota">
              <div>
                  <p>
                      Stay connected / Rester connecté:
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
          </div> */}
        </div>
      </main>
    )
}