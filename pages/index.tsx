import { Avatar } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FiPhone } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";

const Profile = () => {
  const router = useRouter();
  const moveToForm = () => {
    router.push("/goal-settings/form");
  };
  const moveToJourney = () => {
    router.push("/savings/journey");
  };
  return (
    <div className="container mx-auto px-4 pt-8 relative min-h-screen">
      <div className="flex">
        <div>
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="w-20 h-20 text-large"
          />
        </div>
        <div className="ml-2 flex flex-col justify-between">
          <h2 className="font-bold">Bambang Prasetyo</h2>
          <div className="flex items-center space-x-2 text-gray-500">
            <FiPhone /> <span className="text-sm">+62 815 2423 5787</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <span>bambang.prasetyo@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div onClick={moveToForm} className="bg-white p-4 rounded-lg border-1">
          <h2 className="font-semibold">
            <span className="text-c-blue">savings</span>
            <span className="text-c-violet">planner</span>
          </h2>
        </div>
      </div>
      <div className="mt-8">
        <div
          onClick={moveToJourney}
          className="bg-white p-4 rounded-lg border-1"
        >
          <h2 className="font-semibold">
            <span className="text-c-blue">savings</span>
            <span className="text-c-violet">planner</span>{" "}
            <span className="text-gray-300">after registration</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
