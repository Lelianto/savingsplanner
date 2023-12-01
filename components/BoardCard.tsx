import React, { FC } from "react";
import { FaTrophy } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

interface IBoardCard {
  rank?: number;
}

const BoardCard: FC<IBoardCard> = ({ rank }) => {
  return (
    <div
      className={`border rounded-md flex items-center justify-between px-3 py-3 ${
        rank === 3 ? "bg-c-blue bg-opacity-10" : ""
      }`}
    >
      <div className="flex items-center">
        <div className="mr-2">{rank}</div>
        <div className="w-8 h-8 rounded-full bg-c-violet bg-opacity-30 border flex justify-center items-center">
          <FaUser className="w-4 h-4 text-c-violet" />
        </div>
        <div className="ml-2 text-sm">Nama Pengguna</div>
      </div>
      <FaTrophy className="w-6 h-6 text-yellow-400" />
    </div>
  );
};

export default BoardCard;
