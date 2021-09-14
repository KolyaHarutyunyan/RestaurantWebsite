import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {HtmlTooltip, LazyLoad, Tabs, ToolTipScreen} from "@eachbase/components";
import {Container} from "./style";
import {Icons} from "@eachbase/theme";
import {useScrollPosition} from 'react-use-scroll-position';


export const ActiveMenuSection = ({}) => {
    const [active, setActive] = useState('')

    const {menus} = useSelector(({menus}) => ({ menus }));
    const [activeTab, setActiveTab] = useState("food");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 2000);
    }, []);

    const path =typeof window !== 'undefined' && window.location
    const scrollPos = useScrollPosition();
    console.log(scrollPos.y,'scrollPos')
    console.log(path.hash,'asdasdasdasdasdasdsad')
    return (

        <LazyLoad loaded={loaded}>
            <Container>
                <Tabs.Wrapper
                    activeTab={activeTab}
                    onRequestToChange={(newActiveTab) => setActiveTab(newActiveTab)}
                >
                    <Tabs.TabContent contentOf="food">
                        <div className="slidable">
                            <div className='scrolled-tab'>
                                <div className='image' style={scrollPos.y > 0 ? {display:'none'} : {backgroundImage: `url(${menus.image})`}}>
                                    <p className='name'>{menus.name}</p>
                                </div>
                                <Tabs.TabHeader square>
                                    <Tabs.TabTitle tabName="food">Food</Tabs.TabTitle>
                                    <Tabs.TabTitle tabName="drink">Drinks</Tabs.TabTitle>
                                </Tabs.TabHeader>
                                <div className='menu-category'>{
                                    menus.foodCategories && menus.foodCategories.length && menus.foodCategories.map((item, key) => (item.items.length > 0 &&
                                        <a key={key}
                                           onClick={() => setActive(item.name)}
                                           className={active === item.name ? 'active-category' : 'passive-category'}
                                           href={`#${item.name}`}>
                                            {item.name}
                                        </a>
                                    ))
                                }</div>
                            </div>

                            <div className='category-border'/>

                            {menus.foodCategories && menus.foodCategories.length && menus.foodCategories.map((item, key) => (item.items.length > 0 &&
                                <div>
                                    <div id={`${item.name}`} style={{height:'100px'}}/>
                                <div   className='category' key={key}>
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
                                                    <HtmlTooltip title={item.item.description.length > 40 ?
                                                        <ToolTipScreen
                                                            name={item.item.name}
                                                            desc={item.item.description}
                                                            sub={item.item.option}
                                                        />
                                                        : ''} placement="top-end">
                                                        <p className='desc'  color="text">
                                                            {item.item.description.length > 40 ? `${item.item.description.slice(0,40)}...` : item.item.description}
                                                        </p>
                                                    </HtmlTooltip>
                                                    <p className='optional'>{item.item.option}</p>

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
                            <div className='scrolled-tab'>
                                <div className='image' style={scrollPos.y > 0 ? {display:'none'} : {backgroundImage: `url(${menus.image})`}}>
                                    <p className='name'>{menus.name}</p>
                                </div>
                                <Tabs.TabHeader square>
                                    <Tabs.TabTitle tabName="food">Food</Tabs.TabTitle>
                                    <Tabs.TabTitle tabName="drink">Drinks</Tabs.TabTitle>
                                </Tabs.TabHeader>
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
                            </div>

                            <div className='category-border'/>
                            {menus.drinkCategories && menus.drinkCategories.length && menus.drinkCategories.map((item, key) => (item.items.length > 0 &&
                                <div>
                                    <div id={`${item.name}`} style={{height:'100px'}}/>
                                    <div   className='category' key={key}>
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
                                                        <p>{item.item.name}</p>
                                                        <p>{`$${item.item.price}`}</p>
                                                    </div>
                                                    <HtmlTooltip title={item.item.description.length > 20 ?
                                                        <ToolTipScreen
                                                            name={item.item.name}
                                                            desc={item.item.description}
                                                            sub={item.item.option}
                                                        />
                                                        : ''} placement="top-end">
                                                        <p className='desc'  color="text">
                                                            {item.item.description.length > 20 ? `${item.item.description.slice(0,20)}...` : item.item.description}
                                                        </p>
                                                    </HtmlTooltip>
                                                    <p className='optional'>{item.item.option}</p>

                                                </div>
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                </div>))}
                        </div>
                    </Tabs.TabContent>
                </Tabs.Wrapper>

            </Container>
        </LazyLoad>
    )
}