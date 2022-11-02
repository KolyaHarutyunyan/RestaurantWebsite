import { useEffect } from "react";
import { useRouter } from "next/router";
import { RestaurantSettings } from "@eachbase/pages";

const Settings = ({ }) => {
  const router = useRouter();
  const token = typeof window !== "undefined" && localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  }, []);

  return <RestaurantSettings />;
};

export default Settings;
