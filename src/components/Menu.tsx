import Image from "next/image";
import Link from "next/link";
import { title } from "process"

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/teacher",
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/student",
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/parent",
      },
      {
        icon: "/class.png",
        label: "Class",
        href: "/classes",
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/lessons",
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/exams",
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/assignments",
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/results",
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/attendance",
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/events",
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/messages",
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/announcements",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className='mt-4 text-sm'>
      {menuItems.map(i => [
        <div className="" key={i.title}>
          <span className="hidden lg:block text-black font-bold my-4">{i.title}</span>
          {i.items.map(item => [
            <Link className="flex items-center gap-2 my-2 lg:justify-start justify-center" href={item.href} key={item.label}>
              <Image src={item.icon} alt="image" width={23} height={23} className="w-5 h-5 object-contain"/>
              <span className="hidden lg:block text-black font-[70px]">{item.label}</span>
            </Link>
          ])}
        </div>
      ])}
    </div>
  )
}

export default Menu