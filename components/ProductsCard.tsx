import React, { FC } from "react";
import { FaSignal } from "react-icons/fa";

interface IProductsProps {
  name: string;
  click: () => void;
}

const ProductsCard: FC<IProductsProps> = (props) => {
  const { name, click } = props;
  return (
    <div
      onClick={click}
      className="bg-blue-200 flex justify-between px-3 py-2 items-center rounded-md"
    >
      <div className="flex items-center">
        <div className="mr-2">
          <div className="flex items-center justify-center h-8 w-8 bg-blue-400 p-2 rounded-full">
            <FaSignal />
          </div>
        </div>
        <div>{name}</div>
      </div>
      <div className="text-3xl -mt-1">&#8250;</div>
    </div>
  );
};

export default ProductsCard;
