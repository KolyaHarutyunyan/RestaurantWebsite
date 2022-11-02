import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LazyLoad, SlicedText, Tabs } from "@eachbase/components";
import { Container } from "./style";
import { Icons } from "@eachbase/theme";
import { useScrollPosition } from "react-use-scroll-position";

export const ActiveMenuSection = ({
  handleOpenClose,
  open,
  setModalType,
  setModalInfo,
  activeTab,
  setActiveTab,
}) => {
  const scrollPos = useScrollPosition();
  const [active, setActive] = useState("");
  const menus = useSelector((state) => state?.menus?.activeMenus);
  const business = useSelector(({ businesses }) => businesses);

  const handleOpenSwipe = (info, type) => {
    setModalType(type);
    handleOpenClose();
    setModalInfo(info ? info : "");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);
  console.log(business?.logo, "business?.logo");
  return (
    <LazyLoad loaded={true} smallIcon={true}>
      <Container>
        <Tabs.Wrapper
          activeTab={activeTab}
          onRequestToChange={(newActiveTab) => setActiveTab(newActiveTab)}
        >
          <Tabs.TabContent contentOf={activeTab}>
            <div className="slidable">
              <div className="scrolled-tab">
                <div
                  className="icon-title-wrapper"
                  style={{
                    height: scrollPos.y > 0 || open ? "0" : "115px",
                    opacity: scrollPos.y > 0 || open ? "0" : "1",
                    visibility: scrollPos.y > 0 || open ? "hidden" : "visible",
                  }}
                >
                  <div className="flex-able">
                    <div
                      onClick={() => handleOpenSwipe(business, "restaurant")}
                    >
                      {business?.logo ? (
                        <img
                          className="business-icon"
                          src={business?.logo?.url}
                          alt={"icon"}
                        />
                      ) : (
                        <div className="building-icon">
                          <Icons.BuildingIcon />
                        </div>
                      )}
                    </div>

                    <div className="text-wrapper">
                      <p className="welcome">Welcome to</p>
                      <p className="name">{business?.name}</p>
                    </div>
                  </div>

                  <hr className="hr-style" />

                  <div className="menu-name">
                    <p>McDonald's Menu</p>
                  </div>
                </div>

                <div
                  style={scrollPos.y > 0 ? { marginTop: "-16px" } : {}}
                  className="tab-wrapper"
                >
                  <Tabs.TabHeader square>
                    <Tabs.TabTitle tabName="food">Food</Tabs.TabTitle>
                    <Tabs.TabTitle tabName="drinks">Drinks</Tabs.TabTitle>
                  </Tabs.TabHeader>
                </div>

                <div style={{ width: "100%" }}>
                  <div className="menu-category">
                    {menus[activeTab]?.length
                      ? menus[activeTab].map(
                          (item, key) =>
                            item.items.length > 0 &&
                            item?.active && (
                              <div
                                key={key}
                                className="active-category-wrapper"
                              >
                                <a
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
                              </div>
                            )
                        )
                      : ""}
                  </div>
                </div>
              </div>

              <div className="cards-wrapper">
                {menus[activeTab]?.length &&
                  menus[activeTab]?.map(
                    (item, key) =>
                      item.items.length > 0 &&
                      item?.active && (
                        <div key={key}>
                          <div
                            id={`${item.name}`}
                            style={{ height: "100px" }}
                          />

                          <div className="category">
                            <p className="category-title">{item.name}</p>
                            {item?.description && (
                              <p className="category-description">
                                {item.description}
                              </p>
                            )}

                            <div>
                              {" "}
                              {item?.items?.length &&
                                item.items.map(
                                  (item, key) =>
                                    item?.item?.active && (
                                      <div
                                        key={key}
                                        className="category-card"
                                        onClick={() =>
                                          handleOpenSwipe(item.item, "food")
                                        }
                                      >
                                        <div>
                                          {item.item.images &&
                                          item.item.images.length ? (
                                            <img
                                              src={
                                                item.item.images[
                                                  item.item.mainImage
                                                ].url
                                              }
                                              alt="icon"
                                            />
                                          ) : (
                                            <div className="no-image">
                                              <Icons.FoodIcon />
                                            </div>
                                          )}
                                        </div>

                                        <div className="card-info">
                                          <div className="title">
                                            <SlicedText
                                              type={"nameQr"}
                                              size={10}
                                              data={item.item.name}
                                            />
                                            <p>{`$${
                                              item.item.price
                                                .toString()
                                                .search("\\.") === -1
                                                ? `${item.item.price}.00`
                                                : item.item.price
                                            }`}</p>
                                          </div>
                                          <p className="desc" color="text">
                                            {item?.item?.description?.length >
                                            40
                                              ? `${item.item.description.slice(
                                                  0,
                                                  40
                                                )}...`
                                              : item?.item?.description}
                                          </p>
                                          <p className="optional">
                                            {item?.item?.note?.length > 40
                                              ? `${item.item.note.slice(
                                                  0,
                                                  40
                                                )}...`
                                              : item.item.note}
                                          </p>
                                        </div>
                                      </div>
                                    )
                                )}
                            </div>
                          </div>
                        </div>
                      )
                  )}
              </div>
            </div>
          </Tabs.TabContent>
        </Tabs.Wrapper>
      </Container>
    </LazyLoad>
  );
};
