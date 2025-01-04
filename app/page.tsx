import Image from "next/image";
import logo from "./assets/logo.png"
import Link from "next/link";
import Payment from "./payment";
import Subscribe from "./subscribe";
import Success from "./success";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center gap-16 container mx-auto h-[100vh]">
        <div className="flex self-center flex-col gap-1">
          <Image src={logo} alt="logo" />
          <h2 className="text-[#364C6F] text-lg self-center"> Get On Funded </h2>
        </div>
        <Link href="/login" className="flex self-center">
          <button className="button">Let&apos;s Get Started</button>
        </Link>
      </div>
      <div className="flex flex-col gap-4 self-center">
        <Payment />
        <Subscribe />
        <Success />
      </div>
    </>
  );
}
