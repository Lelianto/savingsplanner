import React from "react";
import { LuTimerReset } from "react-icons/lu";
import { HiCurrencyDollar } from "react-icons/hi2";
import ProductsCard from "../../../components/ProductsCard";
import { useRouter } from "next/navigation";
import Layout from "../../../components/Layout";

export const formatThousands = (number: number): string => {
  try {
    // Convert the number to a string and then use regex to add commas as thousand separators
    const formattedNumber = number
      .toFixed(0)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formattedNumber;
  } catch (error) {
    // Handle the case where the input is not a valid number
    return "Invalid input";
  }
};

const SummaryPage = () => {
  const router = useRouter();
  const goToSaham = () => {
    router.push("/goal-settings/assets-recommendation/1");
  };
  const goToMutualFund = () => {
    router.push("/goal-settings/assets-recommendation/2");
  };
  const back = () => {
    router.back();
  };
  let localData = null;
  if (typeof window !== "undefined") {
    localData = localStorage.getItem("item");
  }
  const finData = JSON.parse(localData ?? "");
  return (
    <Layout title="Rekomendasi Investasi" back={back}>
      <div className="container mx-auto px-4 pt-8 relative min-h-screen">
        <div className="flex justify-center relative">
          <LuTimerReset className="text-200 text-green-400" />
          <HiCurrencyDollar className="text-75 absolute bottom-0 right-20 bg-green-400 rounded-full text-white" />
        </div>
        <div className="text-center my-4">
          Rutin nabung Rp{formatThousands(finData.pmt)} tiap bulan <br />
          untuk mencapai goal kamu dalam {finData.month} bulan di salah satu
          produk yang memiliki <br />
          rata-rata return 5.2% setahun
        </div>
        <div className="font-semibold mb-4">Rekomendasi Portofolio Kamu</div>
        <div className="mb-4">Jenis Produk</div>
        <div>
          <ProductsCard name="Saham" click={goToSaham} />
        </div>
        <div className="mt-4">
          <ProductsCard name="Reksadana" click={goToMutualFund} />
        </div>
      </div>
    </Layout>
  );
};

export default SummaryPage;
