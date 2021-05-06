import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Categories, MenuInfos } from "@eachbase/fragments";
import { Styled } from "./style";

let newMenu = {
  id: "",
  title: "",
  tag: "",
  description: "",
  status: false,
  backgroundImage: "",
  categories: [],
};
let getMenu = (tag, menus) => menus.find((menu) => menu.tag === tag);

export const MenuPage = ({ tag }) => {
  const menus = useSelector(({ restaurant }) =>
    restaurant ? restaurant.menus : []
  );
  const [menu, setMenu] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (tag === "newMenu") {
    } else {
      let res = getMenu(tag, menus);
      if (res) {
        setMenu(res);
      } else {
        router.push("/", "/", {});
      }
    }
  }, [tag]);

  return (
    <Styled.Content>
      <MenuInfos {...menu} />
      <Categories categories={menu.categories} />
    </Styled.Content>
  );
};
