import { Styled } from "./core";
import { useSelector } from "react-redux";
import { Item } from "./core";
import { useState } from "react";

let newItemData = {
  id: "",
  backgroundImage: "",
};

export const Menus = () => {
  const menus = useSelector(({ restaurant }) => {
    if (restaurant) {
      return restaurant.menus || [];
    } else {
      return [];
    }
  });

  return (
    <Styled.Content>
      <Item key={"0"} item={newItemData} newItem />
      {menus.map((menu) => (
        <Item key={menu.id} item={menu} />
      ))}
    </Styled.Content>
  );
};
