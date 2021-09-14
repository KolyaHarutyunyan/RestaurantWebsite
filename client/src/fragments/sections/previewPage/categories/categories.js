import {Container} from "./style";
import {HtmlTooltip, LazyLoad, SlicedText, Tabs, ToolTipScreen, Typography} from "@eachbase/components";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Icons} from "@eachbase/theme";
import {useScrollPosition} from "react-use-scroll-position";

export const Categories = () => {

    const [active, setActive] = useState('')

    const {menus} = useSelector(({menus}) => ({menus}));
    const [activeTab, setActiveTab] = useState("food");

    console.log(activeTab,'menus.drinkCategories ')
    const scrollPos = useScrollPosition();
    return (

        <Container>
            <Tabs.Wrapper
                activeTab={activeTab}
                onRequestToChange={(newActiveTab) => setActiveTab(newActiveTab)}
            >

                <div style={{position: 'fixed', width: '90%', marginTop: '-68px'}}>
                    <div className='image' style={{backgroundImage: `url(${menus.image})`}}>
                        <p className='name'>{menus.name}</p>
                    </div>

                    <Tabs.TabHeader square>
                        <Tabs.TabTitle tabName="food">Food</Tabs.TabTitle>
                        <Tabs.TabTitle tabName="drink">Drinks</Tabs.TabTitle>
                    </Tabs.TabHeader>

                    <div className='menu-category'>{
                        activeTab === 'food' ?
                        menus.foodCategories ? menus.foodCategories.length ? menus.foodCategories.map((item, key) => (item.items.length > 0 &&
                            <a key={key}
                               onClick={() => setActive(item.name)}
                               className={active === item.name ? 'active-category' : 'passive-category'}
                               href={`#${item.name}`}>
                                {item.name}
                            </a>
                        )):'' :''
                            :
                            menus.drinkCategories ? menus.drinkCategories.length ? menus.drinkCategories.map((item, key) => (item.items.length > 0 &&
                                <a key={key}
                                   onClick={() => setActive(item.name)}
                                   className={active === item.name ? 'active-category' : 'passive-category'}
                                   href={`#${item.name}`}>
                                    {item.name}
                                </a>
                            )):'' :''
                    }
                    </div>
                </div>
                <div className='category-border'/>

                <Tabs.TabContent contentOf="food">
                    <div className="slidable">

                        <div className='category-border'/>
                        {menus.foodCategories && menus.foodCategories.length && menus.foodCategories.map((item, key) => (item.items.length > 0 &&


                            <div>
                                <div id={`${item.name}`} style={{height: '160px'}}/>
                                <div className='category' key={key}>
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
                                                        <SlicedText type={'nameDesc'} size={10}
                                                                    data={item && item.item.name}/>
                                                        <p className={'price'}>{`$${item.item.price}`}</p>
                                                    </div>
                                                    <HtmlTooltip title={item.item.description.length > 40 ?
                                                        <ToolTipScreen
                                                            name={item.item.name}
                                                            desc={item.item.description}
                                                            sub={item.item.option}
                                                        />
                                                        : ''} placement="top-end">
                                                        <p style={{width: '250px'}} className='desc' color="text">
                                                            {item.item.description.length > 40 ? `${item.item.description.slice(0, 40)}...` : item.item.description}
                                                        </p>
                                                    </HtmlTooltip>
                                                    <div className='optional'>
                                                        <SlicedText type={'option'} size={10}
                                                                    data={item && item.item.option}/>
                                                    </div>

                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>))}
                    </div>
                </Tabs.TabContent>


                <Tabs.TabContent contentOf="drink">
                    <div className="slidable">

                        {/*<div className='menu-category'>{*/}
                        {/*    menus.drinkCategories && menus.drinkCategories.length && menus.drinkCategories.map((item, key) => (item.items.length > 0 &&*/}
                        {/*        <a key={key}*/}
                        {/*           onClick={() => setActive(item.name)}*/}
                        {/*           className={active === item.name ? 'active-category' : 'passive-category'}*/}
                        {/*           href={`#${item.name}`}>*/}
                        {/*            {item.name}*/}
                        {/*        </a>*/}
                        {/*    ))*/}
                        {/*}</div>*/}
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
                                                <div className='no-image'><Icons.DrinkIcon/></div>
                                            }
                                            <div className='card-info'>
                                                <div className='title'>
                                                    <SlicedText type={'nameDesc'} size={10}
                                                                data={item && item.item.name}/>
                                                    <p className={'price'}>{`$${item.item.price}`}</p>
                                                </div>


                                                <HtmlTooltip title={item.item.description.length > 40 ?
                                                    <ToolTipScreen
                                                        name={item.item.name}
                                                        desc={item.item.description}
                                                        sub={item.item.option}
                                                    />
                                                    : ''} placement="top-end">
                                                    <p style={{width: '250px'}} className='desc' color="text">
                                                        {item.item.description.length > 40 ? `${item.item.description.slice(0, 40)}...` : item.item.description}
                                                    </p>
                                                </HtmlTooltip>
                                                <div className='optional'>
                                                    <SlicedText type={'option'} size={10}
                                                                data={item && item.item.option}/>
                                                </div>
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
