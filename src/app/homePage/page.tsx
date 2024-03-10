import Image from "next/image";
import prodAll from "../assets/IMG_20240305_122230_241.svg";
import prod1 from "../assets/IMG_20240305_122230_603.svg";
import prod2 from "../assets/IMG_20240305_122230_477.svg";
import prod3 from "../assets/IMG_20240305_122230_721.svg";
import prod4 from "../assets/IMG_20240305_122230_914.svg";
// import { Carousel } from "@material-tailwind/react";
import { Carousel, Navbar } from 'flowbite-react';

export default function HomePage() {

  return (
    <main className="max-w-[90%] mt-0 pt-0">
      <div className="centCoidHome">
        <div className="h-60 sm:h-64 xl:h-80 2xl:h-96 w-[100%] overflow-visible">
          <Carousel slideInterval={5000} className="position:fixed">
            <Image src={prodAll} alt="Pall" width={80} height={80} quality={200}/>
            <Image src={prod1} alt="P1" width={100} height={100} quality={200}/>
            <Image src={prod2} alt="P2" width={100} height={100} quality={200}/>
            <Image src={prod3} alt="P3" width={100} height={100} quality={200}/>
            <Image src={prod4} alt="P4" width={100} height={100} quality={200}/>
          </Carousel>
            <div className="flex justify-end text-[10px] mt-0 pt-0 pr-1">
                Pictures by Sofia Nikolakakis for Radish Co-op
            </div>
        </div>
        <br/>
        <br/>
        MTL Preserves is a new small business with the goal of creating and providing traditionally made preserved foods that can be enjoyed by everyone! Our products range from jams to pickled goods, from sweet to spicy and sometimes both at the same time! We strive to keep our foods as natural as possible, part of which is avoiding the use of artificial preservatives, colorants or flavoring.
        <br/><br/>
        MTL Preserves est une nouvelle petite entreprise dont l&lsquo;objectif est de créer et de fournir des conserves traditionnelles qui peuvent être appréciées par tout le monde! Nos produits consistent en des confitures, des produits marinés, des produits sucrés ou épicés, et parfois les deux à la fois! Nous nous efforçons de garder nos aliments aussi naturels que possible, notamment en évitant l&lsquo;utilisation de conservateurs, de colorants ou d&lsquo;arômes artificiels.
      </div>
    </main>
  );
}