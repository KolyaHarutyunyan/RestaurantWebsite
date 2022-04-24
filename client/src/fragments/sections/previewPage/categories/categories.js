import {Container} from "./style";
import {HtmlTooltip, SlicedText, Tabs, ToolTipScreen} from "@eachbase/components";
import {useState} from "react";
import {useSelector} from "react-redux";
import {Icons} from "@eachbase/theme";

export const Categories = () => {
    const [active, setActive] = useState('')
    const {menus} = useSelector(({menus}) => ({menus}));
    const [activeTab, setActiveTab] = useState("food");

    return (
        <Container>
            <Tabs.Wrapper
                activeTab={activeTab}
                onRequestToChange={(newActiveTab) => setActiveTab(newActiveTab)}
            >
                <div style={{position: 'fixed', width: '89.4%', marginTop: '-68px'}}>
                    <div className='image' style={{backgroundImage: `url(${menus?.image?.url})`}}>
                        <p className='name'>{menus?.name}</p>
                    </div>
                    <Tabs.TabHeader square>
                        <Tabs.TabTitle tabName="food">Food</Tabs.TabTitle>
                        <Tabs.TabTitle tabName="drink">Drinks</Tabs.TabTitle>
                    </Tabs.TabHeader>

                    <div className='menu-category'>{
                        activeTab === 'food' ?
                            menus.food ? menus.food.length ? menus.food.map((item, key) => (item.items.length > 0 &&
                                <a key={key}
                                   onClick={() => setActive(item.name)}
                                   className={active === item.name ? 'active-category' : 'passive-category'}
                                   href={`#${item.name}`}>
                                    {item.name}
                                </a>
                            )) : '' : ''
                            :
                            menus.drinks ? menus.drinks.length ? menus.drinks.map((item, key) => (item.items.length > 0 &&
                                <a key={key}
                                   onClick={() => setActive(item.name)}
                                   className={active === item.name ? 'active-category' : 'passive-category'}
                                   href={`#${item.name}`}>
                                    {item.name}
                                </a>
                            )) : '' : ''
                    }
                    </div>
                </div>
                <>
                    <div className='category-border'/>
                    <Tabs.TabContent contentOf="food">
                        <div className="slidable">
                            <div className='category-border'/>
                            {menus.food && menus.food.length && menus.food.map((item, key) => (item.items.length > 0 &&
                                <div>
                                    <div id={`${item.name}`} style={{height: '160px'}}/>
                                    <div className='category' key={key}>
                                        <p className='category-title'>{item.name}</p>
                                        <div> {
                                            item.items.length && item.items.map((item, key) => (
                                                <div key={key} className='category-card'>
                                                    <div>
                                                        {item.item.mainImage ?
                                                            <img src={item.item.mainImage.url} alt="icon"/>
                                                            :
                                                            <div className='no-image-icon'><Icons.FoodIcon/></div>
                                                        }
                                                    </div>
                                                    <div className='card-info'>
                                                        <div className='title'>
                                                            <SlicedText type={'nameDesc'} size={10}
                                                                        data={item && item.item.name}/>
                                                            <p className={'price'}>{`$${item.item.price.toString().search("\\.") === -1 ?
                                                                `${item.item.price}.00`
                                                                : item.item.price
                                                            }`}</p>
                                                        </div>
                                                        <HtmlTooltip title={item.item?.description.length > 40 ?
                                                            <ToolTipScreen
                                                                name={item.item.name}
                                                                desc={item.item?.description}
                                                                sub={item.item?.option}
                                                            />
                                                            : ''} placement="top-end">
                                                            <p style={{width: '250px'}} className='desc' color="text">
                                                                {item.item?.description.length > 40 ? `${item.item?.description.slice(0, 40)}...` : item.item?.description}
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
                </>

                <>
                    <div className='category-border'/>
                    <Tabs.TabContent contentOf="drink">
                        <div className="slidable">
                            <div className='category-border'/>
                            {menus.drinks && menus.drinks.length && menus.drinks.map((item, key) => (item.items.length > 0 &&
                                <div>
                                    <div id={`${item.name}`} style={{height: '160px'}}/>
                                    <div className='category' key={key}>
                                        <p className='category-title'>{item.name}</p>

                                        <div> {
                                            item.items.length && item.items.map((item, key) => (
                                                <div key={key} className='category-card'>
                                                    <div>
                                                        {item.item.mainImage ?
                                                            <img src={item.item.mainImage.url} alt="icon"/>
                                                            :
                                                            <div className='no-image-icon'><Icons.FoodIcon/></div>
                                                        }
                                                    </div>
                                                    <div className='card-info'>
                                                        <div className='title'>
                                                            <SlicedText type={'nameDesc'} size={10}
                                                                        data={item && item.item.name}/>
                                                            <p className={'price'}>{`$${item.item.price.toString().search("\\.") === -1 ?
                                                                `${item.item.price}.00`
                                                                : item.item.price
                                                            }`}</p>
                                                        </div>
                                                        <HtmlTooltip title={item.item?.description?.length > 40 ?
                                                            <ToolTipScreen
                                                                name={item.item.name}
                                                                desc={item.item?.description}
                                                                sub={item.item?.option}
                                                            />
                                                            : ''} placement="top-end">
                                                            <p style={{width: '250px'}} className='desc' color="text">
                                                                {item.item?.description?.length > 40 ? `${item.item?.description.slice(0, 40)}...` : item.item?.description}
                                                            </p>
                                                        </HtmlTooltip>
                                                        <div className='optional'>
                                                            <SlicedText type={'option'} size={10}
                                                                        data={item && item?.item?.option}/>
                                                        </div>

                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>))}
                        </div>
                    </Tabs.TabContent>
                </>
            </Tabs.Wrapper>
        </Container>
    );
};
