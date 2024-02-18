import Image from "next/image";
import Logo from "./assets/wood.svg";


export default function HomePage() {
  
  const wip = true;
  return (
    <main>
      <div className="bg-[url('./assets/wood.svg')]">
      {/* <Image
        src={Logo}
        alt="MTL Preserves Logo"
        className="w-full"
        quality={100}
        fill
        placeholder="empty"/> */}
        <h2> HomePage </h2>
      </div>
    </main>
  );
}
