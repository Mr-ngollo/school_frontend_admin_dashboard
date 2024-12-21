import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT SIDEBAR */}
      <div className="bg-gray-100 w-[16%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 h-screen text-black">
        <Link className="flex items-center justify-center gap-2 lg:justify-start" href={"/"}>
          <Image className="rounded-full" src={"/ngollo.png"} alt="logo" width={32} height={32}/>
          <span className="hidden lg:block font-extrabold">NgolloSchools</span>
        </Link>
        <Menu/>
      </div>
      {/* RIHT SIDEBAR */}
      <div className="bg-[#F7F8FA] overflow-scroll w-[84%] md:w-[92%] lg:w-[84%] xl:w-[86%] p-4 h-screen text-black">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}
