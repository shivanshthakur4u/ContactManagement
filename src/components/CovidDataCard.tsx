import React from "react";
import { IconType } from "react-icons";
import { IoIosArrowDropupCircle } from "react-icons/io";

interface CovidDataCardProps {
  title: string;
  number: number;
  icon: IconType;
  todayNumber: number;
  bgColor: string;
  iconColor: string;
}

const CovidDataCard: React.FC<CovidDataCardProps> = ({
  title,
  number,
  icon,
  todayNumber,
  bgColor,
  iconColor,
}) => {
  return (
    <div className="p-4 border rounded-md flex gap-3  shadow-md">
      <div
        style={{
          backgroundColor: bgColor,
        }}
        className={` flex items-center justify-center w-14 rounded-full`}
      >
        {React.createElement(icon, { size: "25", color: iconColor })}
      </div>
      <div className="flex flex-col">
        <p className=" font-bold">{title}</p>
        <div className="flex gap-2 items-center">
          <p className="font-extrabold text-xl">{number}</p>
          <div
            className={`${
              title === "Confirmed Recovery" ? "bg-[#DEF9C4]" : "bg-red-100"
            }  pr-2 rounded-2xl h-[18px] items-center flex p-0.5`}
          >
            <span
              className={`${
                title === "Confirmed Recovery"
                  ? "text-[#06D001]"
                  : "text-red-500"
              } text-xs flex font-semibold`}
            >
              <IoIosArrowDropupCircle size={16} />+
              {todayNumber ? todayNumber : 0}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidDataCard;
