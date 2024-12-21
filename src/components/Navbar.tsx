import Image from "next/image"

const Navbar = () => {
  return (
    <div className="items-center justify-between flex p-4">
      {/* SEARCH BAR  */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src={"/search.png"} alt="searchIcon" width={15} height={15}/>
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none"/>
      </div>

      {/* ICONS AND USER  */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 md:w-5 md:h-5 sm:h-5 sm:w-5 flex items-center  justify-between cursor-pointer">
          <Image src={"/message.png"} alt="userIcon" width={20} height={20}/>
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center  relative justify-between cursor-pointer">
          <Image src={"/announcement.png"} alt="announcementIcon" width={20} height={20}/>
          <div className="absolute -top-3 -right-3 h-5 w-5 items-center justify-center bg-red-700 rounded-full text-xs text-white cursor-pointer">1</div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">ngollo</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image src={"/avatar.png"} alt="userIcon" width={36} height={36} className="rounded-full  cursor-pointer"/>
      </div>
    </div>
  )
}

export default Navbar