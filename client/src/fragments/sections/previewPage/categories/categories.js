import { Container } from "./style";
import {LazyLoad, Tabs} from "@eachbase/components";
import {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import {Icons} from "@eachbase/theme";
import {useScrollPosition} from "react-use-scroll-position";
export const Categories = () => {

  const [active, setActive] = useState('')

  const {menus} = useSelector(({menus}) => ({ menus }));
  const [activeTab, setActiveTab] = useState("food");



  const scrollPos = useScrollPosition();
  return (

        <Container>
          <div className='image' style={{backgroundImage: `url(${menus.image})`}}>
            <p className='name'>{menus.name}</p>
          </div>
          <Tabs.Wrapper
              activeTab={activeTab}
              onRequestToChange={(newActiveTab) => setActiveTab(newActiveTab)}
          >
            <Tabs.TabHeader square>
              <Tabs.TabTitle tabName="food">Food</Tabs.TabTitle>
              <Tabs.TabTitle tabName="drink">Drinks</Tabs.TabTitle>
            </Tabs.TabHeader>
            <Tabs.TabContent contentOf="food">
              <div className="slidable">
                <div className='menu-category'>{
                  menus.foodCategories && menus.foodCategories.length && menus.foodCategories.map((item, key) => (item.items.length > 0 &&
                      <a key={key}
                         onClick={() => setActive(item.name)}
                         className={active === item.name ? 'active-category' : 'passive-category'}
                         href={`#${item.name}`}>
                        {item.name}
                      </a>
                  ))
                }
                </div>
                <div className='category-border'/>
                {menus.foodCategories && menus.foodCategories.length && menus.foodCategories.map((item, key) => (item.items.length > 0 &&
                    <div id={`${item.name}`} className='category' key={key}>
                      <p className='category-title'>{item.name}</p>

                      <div> {
                        item.items.length && item.items.map((item, key) => (
                            <div key={key} className='category-card'>
                              {item.item.mainImage ?
                                  <img src={item.item.mainImage.originalUrl} alt="icon"/>
                                  :
                                  <div className='no-image'><Icons.FoodIcon/></div>
                              }
                              <div className='card-info'>
                                <div className='title'>
                                  <p>{item.item.name}</p>
                                  <p>{`$${item.item.price}`}</p>
                                </div>
                                <p className='desc'>{item.item.description}</p>
                                <p className='optional'>{item.item.option}</p>

                              </div>
                            </div>
                        ))}
                      </div>
                    </div>))}
              </div>
            </Tabs.TabContent>


            <Tabs.TabContent contentOf="drink">
              <div className="slidable">
                <div className='menu-category'>{
                  menus.drinkCategories && menus.drinkCategories.length && menus.drinkCategories.map((item, key) => (item.items.length > 0 &&
                      <a key={key}
                         onClick={() => setActive(item.name)}
                         className={active === item.name ? 'active-category' : 'passive-category'}
                         href={`#${item.name}`}>
                        {item.name}
                      </a>
                  ))
                }</div>
                <div className='category-border'/>
                {menus.drinkCategories && menus.drinkCategories.length && menus.drinkCategories.map((item, key) => (item.items.length > 0 &&
                    <div id={`${item.name}`} className='category' key={key}>
                      <p className='category-title'>{item.name}</p>

                      <div> {
                        item.items.length && item.items.map((item, key) => (
                            <div key={key} className='category-card'>
                              {item.item.mainImage ?
                                  <img src={item.item.mainImage.originalUrl} alt="icon"/>
                                  :
                                  <div className='no-image'><Icons.FoodIcon/></div>
                              }
                              <div className='card-info'>
                                <div className='title'>
                                  <p>{item.item.name}</p>
                                  <p>{`$${item.item.price}`}</p>
                                </div>
                                <p className='desc'>{item.item.description}</p>
                                <p className='optional'>{item.item.option}</p>

                              </div>
                            </div>
                        ))}
                      </div>
                    </div>))}
              </div>
            </Tabs.TabContent>
          </Tabs.Wrapper>
        </Container>
  );
};
