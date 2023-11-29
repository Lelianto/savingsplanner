import React, { FC } from "react";
import { useRouter } from "next/router";
import { IoChevronBackCircle } from "react-icons/io5";

interface IHeader {
  title?: string;
  back?: () => void;
}

const Header: FC<IHeader> = ({ title, back }) => {
  const router = useRouter();

  const handleGoBack = () => {
    if (back) {
      back();
    } else {
      router.back();
    }
  };

  return (
    <div className="bg-gray-800 sticky top-0 z-50 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="relative w-full">
          <button
            className="text-white font-bold text-lg absolute left-0"
            onClick={handleGoBack}
          >
            <IoChevronBackCircle className="text-2xl" />
          </button>
          {title ? (
            <div className="text-center">{title}</div>
          ) : (
            <div className="text-center text-gray-800">page</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
