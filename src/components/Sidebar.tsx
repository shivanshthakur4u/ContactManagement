import React from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineDashboard } from "react-icons/md";
import { useLocation } from "react-router-dom";

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const Menus = [
    {
      id: 1,
      name: "Contact",
      link: "/",
      icon: RiContactsLine,
    },
    {
      id: 2,
      name: "Charts and Maps",
      link: "/charts-and-maps",
      icon: MdOutlineDashboard,
    },
  ];

  let location = useLocation();

  return (
    <section className="flex gap-6">
      {/* disabled open functionality in mobile view for better responsiveness */}
      <div
        className={`${
          open ? "lg:w-72 max-sm:w-16" : "w-16"
        } duration-500 bg-blue-800 fixed min-h-screen text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {Menus?.map((menu) => (
            <Link
              to={menu?.link}
              key={menu?.id}
              className={`flex group items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-300/20
                 ${
                   location.pathname === menu?.link && "bg-gray-300/20"
                 } rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              {/* disabled open functionality in mobile view for better responsiveness */}
              <h2
                className={`whitespace-pre duration-500 max-sm:opacity-0 max-sm:overflow-hidden ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
                style={{
                  transitionDelay: `${menu?.id + 3}00ms`,
                }}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre
                   text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden 
                   group-hover:px-2 group-hover::py-1 group-hover:left-14
                    group-hover:duration-300 group-hover:w-fit`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
