import Image from "next/image";
import logo from "./assets/logo.png"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center gap-16 container mx-auto h-[100vh]">
        <div className="flex self-center flex-col gap-1">
          <Image src={logo} alt="logo" />
          <h2 className="text-[#364C6F] text-lg self-center"> Get On Funded </h2>
        </div>
        <Link href="/login">
          <button className="bg-[#D2E892] p-4 text-[#364C6F] text-xl max-w-[194px] self-center rounded-lg">Let&apos;s Get Started</button>
        </Link>
      </div>
    </>
  );
}
