interface StockCardProps {
  emiten: string;
  name: string;
  price: number;
  returnPerYear: number;
}

const StockCard: React.FC<StockCardProps> = ({
  emiten,
  name,
  price,
  returnPerYear,
}) => {
  return (
    <div className="bg-white rounded overflow-hidden shadow-md my-2 flex flex-col">
      <div className="flex bg-gray-200 p-2">
        <div className="flex-1 text-left">
          <div className="font-semibold">{emiten}</div>
          <div className="text-xs">{name}</div>
        </div>
        <div className="flex-1 text-center font-bold">
          <div className="flex items-center h-full w-full justify-center">
            {price}
          </div>
        </div>
        <div className="flex-1 text-center font-bold">
          <div className="flex items-center h-full w-full justify-center">
            {returnPerYear}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
