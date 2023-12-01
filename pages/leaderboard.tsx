import { useRouter } from "next/navigation";
import React from "react";
import Layout from "../components/Layout";
import BoardCard from "../components/BoardCard";

const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Leaderboard = () => {
  const router = useRouter();
  const back = () => {
    router.back();
  };
  return (
    <Layout title="Leaderboard" back={back}>
      <div className="container mx-auto px-4 pt-8 relative min-h-screen">
        {ranks.map((rank, index) => (
          <div key={"data-" + index} className="mb-2">
            <BoardCard rank={rank} />
          </div>
        ))}
        <BoardCard />
      </div>
    </Layout>
  );
};

export default Leaderboard;
