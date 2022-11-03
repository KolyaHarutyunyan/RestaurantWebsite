import { Container } from "./style";
import { SlicedText, Tabs } from "@eachbase/components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Icons } from "@eachbase/theme";
import { Images } from "@eachbase/theme/images";
import { getLimitedVal } from "@eachbase/utils";

export const Categories = () => {
  const [active, setActive] = useState("");
  const [activeTab, setActiveTab] = useState("food");
  const menus = useSelector(({ menus }) => menus?.menuById || "");
  const restaurant = useSelector((state) => state.businesses);

  return (
    <Container>
      <Tabs.Wrapper
        activeTab={activeTab}
        onRequestToChange={(newActiveTab) => setActiveTab(newActiveTab)}
      >
        <div style={{ position: "fixed", width: "89.4%", marginTop: "-68px" }}>
          <div className="image-name-wrapper">
            <div className="wrapper-img">
              {restaurant?.logo?.thumbUrl ? (
                <div className="image-wrapper">
                  <img src={restaurant?.logo?.thumbUrl} alt={"icon"} />
                </div>
              ) : (
                <div style={{ marginRight: "10px" }}>
                  <Images.RestaurantProfile className="restaurant-profile" />
                </div>
              )}
              <div>
                <p className="welcome">Welcome to</p>
                <p className="rest-name">
                  {getLimitedVal(restaurant?.name, 30)}
                </p>
              </div>
            </div>
            <hr className="hr-style" />
            <p className="menu-name">{getLimitedVal(menus?.name, 30)}</p>
          </div>

          <div className="tabs-wrapper">
            <Tabs.TabHeader square>
              <Tabs.TabTitle tabName="food">Food</Tabs.TabTitle>
              <Tabs.TabTitle tabName="drink">Drinks</Tabs.TabTitle>
            </Tabs.TabHeader>
          </div>

          <div className="menu-category">
            {activeTab === "food"
              ? menus?.food?.length
                ? menus?.food.map(
                    (item, key) =>
                      item?.items?.length > 0 && (
                        <a
                          key={key}
                          onClick={() => setActive(item.name)}
                          className={
                            active === item.name
                              ? "active-category"
                              : "passive-category"
                          }
                          href={`#${item.name}`}
                        >
                          {item.name}
                        </a>
                      )
                  )
                : ""
              : menus?.drinks?.length
              ? menus?.drinks.map(
                  (item, key) =>
                    item.items.length > 0 && (
                      <a
                        key={key}
                        onClick={() => setActive(item.name)}
                        className={
                          active === item.name
                            ? "active-category"
                            : "passive-category"
                        }
                        href={`#${item.name}`}
                      >
                        {item.name}
                      </a>
                    )
                )
              : ""}
          </div>
        </div>
        <>
          <div className="category-border" />
          <Tabs.TabContent contentOf="food">
            <div className="slidable">
              <div className="category-border" />
              {menus?.food?.length &&
                menus.food.map(
                  (item, key) =>
                    item?.items?.length > 0 && (
                      <div key={key}>
                        <div id={`${item.name}`} style={{ height: "160px" }} />
                        <div className="category">
                          <p className="category-title">{item.name}</p>

                          {item?.description && (
                            <p className={"menu-description"}>
                              {item?.description}
                            </p>
                          )}
                          <div>
                            {" "}
                            {item.items.length &&
                              item.items.map((item, key) => (
                                <div key={key} className="category-card">
                                  <div>
                                    {item?.item?.images?.length &&
                                    item.item.mainImage ? (
                                      <img
                                        src={
                                          item.item.images[item.item.mainImage]
                                            .url
                                        }
                                        alt="icon"
                                      />
                                    ) : (
                                      <div className="no-image-icon">
                                        <Icons.FoodIcon />
                                      </div>
                                    )}
                                  </div>
                                  <div className="card-info">
                                    <div className="title">
                                      <SlicedText
                                        type={"nameDesc"}
                                        size={10}
                                        data={item && item.item.name}
                                      />
                                      <p className={"price"}>{`$${
                                        item.item.price
                                          .toString()
                                          .search("\\.") === -1
                                          ? `${item.item.price}.00`
                                          : item.item.price
                                      }`}</p>
                                    </div>
                                    <p
                                      style={{ width: "250px" }}
                                      className="desc"
                                      color="text"
                                    >
                                      {item.item?.description?.length > 30
                                        ? `${item.item?.description?.slice(
                                            0,
                                            30
                                          )}...`
                                        : item?.item?.description}
                                    </p>
                                    <div className="optional">
                                      {item?.item?.note?.length > 30
                                        ? `${item?.item?.note.slice(0, 30)}...`
                                        : item?.item?.note}
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    )
                )}
            </div>
          </Tabs.TabContent>
        </>

        <>
          <div className="category-border" />
          <Tabs.TabContent contentOf="drink">
            <div className="slidable">
              <div className="category-border" />
              {menus?.drinks?.length &&
                menus.drinks.map(
                  (item, key) =>
                    item.items.length > 0 && (
                      <div key={key}>
                        <div id={`${item.name}`} style={{ height: "160px" }} />
                        <div className="category">
                          <p className="category-title">{item.name}</p>

                          <div>
                            {" "}
                            {item.items.length &&
                              item.items.map((it, key) => (
                                <div key={key} className="category-card">
                                  <div>
                                    {it?.item?.images?.length &&
                                    it.item.mainImage ? (
                                      <img
                                        src={
                                          it.item?.images[it.item.mainImage]
                                            ?.url
                                        }
                                        alt="icon"
                                      />
                                    ) : (
                                      <div className="no-image-icon">
                                        <Icons.FoodIcon />
                                      </div>
                                    )}
                                  </div>
                                  <div className="card-info">
                                    <div className="title">
                                      <SlicedText
                                        type={"nameDesc"}
                                        size={10}
                                        data={it && it.item.name}
                                      />
                                      <p className={"price"}>{`$${
                                        it.item.price
                                          .toString()
                                          .search("\\.") === -1
                                          ? `${it.item.price}.00`
                                          : it.item.price
                                      }`}</p>
                                    </div>
                                    <p
                                      style={{ width: "250px" }}
                                      className="desc"
                                      color="text"
                                    >
                                      {it.item?.description?.length > 40
                                        ? `${it.item?.description.slice(
                                            0,
                                            40
                                          )}...`
                                        : it.item?.description}
                                    </p>
                                    <div className="optional">
                                      {item?.item?.note?.length > 30
                                        ? `${item?.item?.note.slice(0, 30)}...`
                                        : item?.item?.note}
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    )
                )}
            </div>
          </Tabs.TabContent>
        </>
      </Tabs.Wrapper>
    </Container>
  );
};
