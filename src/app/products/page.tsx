import Image from "next/image";
import prod1 from "../assets/IMG_20240305_122230_721.svg";
import prod2 from "../assets/IMG_20240305_122230_477.svg";
import prod3 from "../assets/IMG_20240305_122230_914.svg";
import prod4 from "../assets/IMG_20240305_122230_603.svg";

export default function Products() {
    return (
  
      <main>
        <div className="centRgrid m-10">
          <div className="max-w-sm bg-[#f5daab] border border-[#caa77f] rounded-lg shadow-md shadow-[#caa77f]">
            <a target="_blank" href="https://radish.coop/en/march%C3%A9/merchants/mtl-preserves/products/strawberry-jam-250-ml">
              <Image className="rounded-t-lg" src={prod1} alt="" />
            </a>
              <div className="flex justify-end text-[8px] mt-0 pt-0 pr-1">
                  Pictures by Sofia Nikolakakis for Radish Co-op
              </div>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#f40307] underline decoration-solid text-center">Strawberry Jam</h5>
              <p className="mb-3 font-normal text-gray-700 text-center">A traditional jam with a twist, incorporating a special blend of 4 different spices!</p>
            </div>
          </div>
          
          <div className="max-w-sm bg-[#f5daab] border border-[#caa77f] rounded-lg shadow-md shadow-[#caa77f]">
            <a target="_blank" href="https://radish.coop/en/march%C3%A9/merchants/mtl-preserves/products/pepper-jelly">
              <Image className="rounded-t-lg" src={prod2} alt="" />
            </a>
              <div className="flex justify-end text-[8px] mt-0 pt-0 pr-1">
                  Pictures by Sofia Nikolakakis for Radish Co-op
              </div>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#f29b43] underline decoration-solid text-center">Pepper Jelly</h5>
              <p className="mb-3 font-normal text-gray-700 text-center">A unique spread that's both sweet and spicy, and goes great with cheese!</p>
            </div>
          </div>
          
          <div className="max-w-sm bg-[#f5daab] border border-[#caa77f] rounded-lg shadow-md shadow-[#caa77f]">
            <a target="_blank" href="https://radish.coop/en/march%C3%A9/merchants/mtl-preserves/products/pickled-onions-250-ml">
              <Image className="rounded-t-lg" src={prod3} alt="" />
            </a>
              <div className="flex justify-end text-[8px] mt-0 pt-0 pr-1">
                  Pictures by Sofia Nikolakakis for Radish Co-op
              </div>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#d67bc1] underline decoration-solid text-center">Pickled Onions</h5>
              <p className="mb-3 font-normal text-gray-700 text-center">A simple yet delicious condiment made with a hint of dill, black pepper, and garlic!</p>
            </div>
          </div>
          
          <div className="max-w-sm bg-[#f5daab] border border-[#caa77f] rounded-lg shadow-md shadow-[#caa77f]">
            <a target="_blank" href="https://radish.coop/en/march%C3%A9/merchants/mtl-preserves/products/cowboy-candy-250-ml">
              <Image className="rounded-t-lg" src={prod4} alt="" />
            </a>
              <div className="flex justify-end text-[8px] mt-0 pt-0 pr-1">
                  Pictures by Sofia Nikolakakis for Radish Co-op
              </div>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#0ba61b] underline decoration-solid text-center">Cowboy Candy</h5>
              <p className="mb-3 font-normal text-gray-700 text-center">Candied Jalapenos that can be added to any dish for a sweet and spicy kick!</p>
            </div>
          </div>
        </div>
        <div className="m-10 font-black text-center">
            If you'd like to place an order,&nbsp;
            <a target="_blank" href="https://mtlpreserves.com/contactUs" className="underline decoration-solid text-center">contact us</a>&nbsp;
            or go through our friends at&nbsp;
            <a target="_blank" href="https://radish.coop/en/march%C3%A9/merchants/mtl-preserves" className="underline decoration-solid text-center">Radish Co-op</a>!
        </div>
      </main>
    )
}