import { useParams, useRouter } from "next/navigation";
import React from "react";
import Layout from "../../../components/Layout";
import StockCard from "../../../components/StockCard";

const stocks = [
  { emiten: "XYZ", name: "XYZ tbk", price: 100000, returnPerYear: 5 },
  { emiten: "ABC", name: "ABC tbk", price: 150000, returnPerYear: 8 },
];

const AssetsRecommendation = () => {
  const router = useRouter();
  const params = useParams();
  const back = () => {
    router.back();
  };
  return (
    <Layout
      title={`Rekomendasi ${params.id === "1" ? "Saham" : "Reksadana"}`}
      back={back}
    >
      <div className="container mx-auto px-4 pt-8 relative min-h-screen">
        <div className="flex flex-col justify-center min-h-1/2 text-sm">
          <div className="flex justify-between mb-4">
            <div className="flex-1 font-bold">Emiten</div>
            <div className="flex-1 text-center font-bold">Harga</div>
            <div className="flex-1 text-right font-bold">Return 1 Tahun</div>
          </div>
          {stocks.map((stock, index) => (
            <StockCard key={index} {...stock} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AssetsRecommendation;
