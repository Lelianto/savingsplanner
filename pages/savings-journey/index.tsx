import { useRouter } from "next/navigation";
import React from "react";
import { DoughnutChart } from "../../components/Doughnut";
import Layout from "../../components/Layout";
import { formatThousands } from "../goal-settings/summary";
const SavingsJourney = () => {
  const router = useRouter();
  const back = () => {
    router.push("/");
  };
  const goToLeaderboard = () => {
    router.push("/leaderboard");
  };
  let localData = null;
  if (typeof window !== "undefined") {
    localData = localStorage.getItem("item");
  }
  const finData = localData ? JSON.parse(localData) : null;
  return (
    <Layout title="Savings Journey" back={back}>
      <div className="container mx-auto px-4 pt-8 relative min-h-screen">
        <div className="text-sm mb-1">
          Goal Rp{formatThousands(finData?.pmt * finData?.month)}
        </div>
        <div className="text-sm mb-4">
          Rutin nabung Rp{formatThousands(finData?.pmt)}
        </div>
        <div className="flex justify-center w-full">
          <div className="w-2/3">
            <DoughnutChart />
          </div>
        </div>
        <div className="mt-6 text-sm">
          Yeay! Berhasil 1 bulan nabung rutin, semakin dekat dengan goal kamu!
        </div>
        <div
          onClick={goToLeaderboard}
          className="mt-4 text-sm flex justify-between items-center border rounded-md px-3 py-2"
        >
          <div className="text-sm">Kamu berada di peringkat #3</div>
          <div className="text-3xl -mt-1">&#8250;</div>
        </div>
        <div className="mt-4 text-sm">Total aset kamu</div>
        <div className="mt-1 text-sm flex justify-between items-center border rounded-md px-3 py-2">
          <div className="text-sm">Saham: Rp{formatThousands(250000)}</div>
        </div>
        <div className="mt-1 text-sm flex justify-between items-center border rounded-md px-3 py-2">
          <div className="text-sm">Reksadana: Rp{formatThousands(0)}</div>
        </div>
      </div>
    </Layout>
  );
};

export default SavingsJourney;
