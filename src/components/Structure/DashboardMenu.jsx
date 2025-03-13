import Link from "next/link";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { SiGraphite } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";

const menuLinks = [
  {
    icon: <SiGraphite size={20} />, // Example icon
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <FaRegNewspaper size={20} />, // Example icon
    label: "school news",
    link: "/dashboard/school-news",
  },
  {
    icon: <GrUserWorker size={20} />, // Example icon
    label: "school staff",
    link: "/dashboard/schoolstaff",
  },
];
const DashboardMenu = () => {
  return (
    <div className="sidebar h-screen w-64 bg-white p-6 text-black">
      <div className="title mb-6 flex items-center gap-4">
        <div className="icon rounded-lg bg-[#5D5FEF] p-2 text-white">
          <MdOutlineAdminPanelSettings size={30} />
        </div>
        <h2 className="text-3xl font-bold capitalize">admin</h2>
      </div>
      <ul className="menu-list space-y-2">
        {menuLinks.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className="flex items-center rounded-2xl px-4 py-3 hover:bg-[#5D5FEF] hover:text-white"
            >
              <span className="icon">{item.icon}</span>
              <span className="label ml-4 text-lg">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardMenu;
