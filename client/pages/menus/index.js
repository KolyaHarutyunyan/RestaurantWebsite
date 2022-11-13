import { useEffect } from "react";
import { useRouter } from "next/router";
import { RestaurantMenus } from "@eachbase/pages";

const Menus = ({ }) => {
  const router = useRouter();
  const token = typeof window !== "undefined" && localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  }, []);

  return <RestaurantMenus />;
};

export default Menus;