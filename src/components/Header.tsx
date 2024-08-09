import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-blue-800 text-white text-center py-4 px-6 shadow-md border-b border-gray-400">
      <h1 className="text-3xl font-semibold">{title}</h1>
    </header>
  );
};

export default Header;
