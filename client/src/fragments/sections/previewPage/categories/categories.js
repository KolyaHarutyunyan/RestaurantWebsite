import { useState } from "react";
import { useSelector } from "react-redux";
import { SlicedText, Tabs } from "@eachbase/components";
import { Icons } from "@eachbase/theme";
import { Images } from "@eachbase/theme/images";
import { getLimitedVal } from "@eachbase/utils";
import { Container } from "./style";

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
              <Tabs.TabTitle tabName="drinks">Drinks</Tabs.TabTitle>
            </Tabs.TabHeader>
          </div>

          <div style={{ width: "100%" }}>
            <div className="menu-category">
              {menus?.[activeTab]?.length ?
                menus?.[activeTab].map((item, key) => item.items.length > 0 && item?.active && (
                    <div
                      key={key}
                      className="active-category-wrapper"
                    >
                      <a
                        key={key}
                        onClick={() => setActive(item.name)}
                        className={active === item.name ? "active-category" : "passive-category"}
                        href={`#${item.name}`}
                      >
                        {getLimitedVal(item.name, 20)}
                      </a>
                    </div>
                  ))
                : ""
              }
            </div>
          </div>

        </div>
        <>
          <div className="category-border" />
          <Tabs.TabContent contentOf={activeTab}>
            <div className="slidable">
              <div className="category-border" />
              {menus[activeTab]?.length && menus[activeTab]?.map((item, key) =>
                item?.items?.length > 0 && item?.active &&
                (<div key={key}>
                    <div id={`${item.name}`} style={{ height: "160px" }} />
                    <div style={{ marginTop: "50px" }} className="category">
                      <p className="category-title">{item.name}</p>
                      {item?.description && (
                        <p className={"menu-description"}>
                          {item?.description}
                        </p>
                      )}
                      <div>
                        {" "}
                        {item?.items?.length && item?.items.map((item, key) => item?.item?.active &&
                          (<div key={key} className="category-card">
                              <div>
                                {item?.item?.images?.length ? (
                                  <img src={item?.item?.images[item?.item?.mainImage].url} alt="icon" />
                                ) : (
                                  <div className="no-image">
                                    {activeTab === "food" ?
                                      <Icons.FoodIcon />
                                      :
                                      <Icons.DrinkIcon />
                                    }
                                  </div>
                                )}
                              </div>

                              <div className="card-info">
                                <div className="title">
                                  <SlicedText
                                    type={"nameDesc"}
                                    size={10}
                                    data={item && item?.item?.name}
                                  />
                                  <p style={{fontSize:'14px'}} className={"price"}>
                                    {`$${item?.item?.price.toString().search("\\.") === -1 ? `${item?.item?.price}.00` : item?.item?.price}`}
                                  </p>
                                </div>
                                <p
                                  style={{ width: "250px" }}
                                  className="desc"
                                  color="text"
                                >
                                  {item.item?.description?.length > 30 ? `${item.item?.description?.slice(0, 30)}...` : item?.item?.description}
                                </p>
                                <div className="optional">
                                  {item?.item?.note?.length > 30 ? `${item?.item?.note.slice(0, 30)}...` : item?.item?.note}
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
