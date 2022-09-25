import { RestaurantMenus } from "@eachbase/pages";
import { Layout } from "@eachbase/fragments";

const Menu = () => {
  return (
    <Layout>
      <RestaurantMenus />
    </Layout>
  );
};

export default Menu;

// import { businessesActions, menusActions } from "@eachbase/store";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { Loader } from "../src/components";
// import { FindLoad } from "../src/utils";

// const Menu = () => {
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const loader = FindLoad("GET_ACTIVE_MENUS");

//   useEffect(() => {
//     if (router.query.accessid) {
//       dispatch(menusActions.getActiveMenu(router.query.accessid));
//       dispatch(businessesActions.getBusinessesById(router.query.accessid));
//     }
//   }, [router.query.accessid]);

//   return loader.length ? (
//     <div
//       style={{
//         width: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <Loader />
//     </div>
//   ) : (
//     <ActiveMenu/>
//   );
// };
