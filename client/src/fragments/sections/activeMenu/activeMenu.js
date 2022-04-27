import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {HtmlTooltip, LazyLoad, SlicedText, Tabs, ToolTipScreen} from "@eachbase/components";
import {Container} from "./style";
import {Icons} from "@eachbase/theme";
import {useScrollPosition} from 'react-use-scroll-position';
import {SwipeUp} from "../../../components/swipe";
import {Modal} from "./modal";


export const ActiveMenuSection = ({}) => {
    const [active, setActive] = useState('')

    const {menus} = useSelector(({menus}) => ({menus}));
    const [activeTab, setActiveTab] = useState("food");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 500);
    }, []);

    const path = typeof window !== 'undefined' && window.location
    const scrollPos = useScrollPosition();

    const [open, setOpen] = useState(false)
    const [modalInfo, setModalInfo] = useState('')
    const [modalType, setModalType] = useState('')

    // const itemPrice = item && item.item && item.item.price.toString().search("\\.")
    // let pricePoint = itemPrice.search("\\.");
    const handleOpenSwipe = (info, type) => {
        setModalType(type)
        setOpen(!open)
        setModalInfo(info ? info : '')
    }

    return (

        <LazyLoad loaded={loaded} smallIcon={true}>
            <Container>
                <Tabs.Wrapper
                    activeTab={activeTab}
                    onRequestToChange={(newActiveTab) => setActiveTab(newActiveTab)}
                >
                    <Tabs.TabContent contentOf="food">
                        <div className="slidable">
                            <div className='scrolled-tab'>
                                <div className='image'
                                     style={scrollPos.y > 0 ? {display: 'none'} : {backgroundImage: `url(${menus?.image?.url})`}}>
                                    <p className='name'>{menus.name}</p>
                                </div>
                                <Tabs.TabHeader square>
                                    <Tabs.TabTitle tabName="food">Food</Tabs.TabTitle>
                                    <Tabs.TabTitle tabName="drink">Drinks</Tabs.TabTitle>
                                </Tabs.TabHeader>
                                <div style={{width: '100%'}}>
                                    <div className='menu-category'>{
                                        menus.food ? menus.food.length ? menus.food.map((item, key) => (item.items.length > 0 &&
                                            <div>
                                                <a key={key}
                                                   onClick={() => setActive(item.name)}
                                                   className={active === item.name ? 'active-category' : 'passive-category'}
                                                   href={`#${item.name}`}>
                                                    {item.name}
                                                </a>
                                            </div>
                                        )) : '' : ''
                                    }</div>
                                </div>
                            </div>

                            <div className='category-border'/>
                            <div className={scrollPos.y === 0 ? 'menu-body' : ''}>
                                {menus.food && menus.food.length && menus.food.map((item, key) => (item.items.length > 0 &&
                                    <div>
                                        <div id={`${item.name}`} style={{height: '100px'}}/>
                                        <div className='category' key={key}>
                                            <p className='category-title'>{item.name}</p>

                                            <div> {
                                                item.items.length && item.items.map((item, key) => (
                                                    <div key={key} className='category-card'
                                                         onClick={() => handleOpenSwipe(item.item, 'food')}>
                                                        <div>
                                                            {item.item.images && item.item.images.length ?
                                                                <img src={item.item.images[item.item.mainImage].url}
                                                                     alt="icon"/>
                                                                :
                                                                <div className='no-image'><Icons.FoodIcon/></div>
                                                            }
                                                        </div>
                                                        <div className='card-info'>
                                                            <div className='title'>
                                                                <SlicedText type={'nameQr'} size={10}
                                                                            data={item.item.name}/>
                                                                {/*<p>{item.item.name}</p>*/}
                                                                <p>{`$${item.item.price.toString().search("\\.") === -1 ?
                                                                    `${item.item.price}.00`
                                                                    : item.item.price
                                                                }`}</p>
                                                            </div>
                                                            <p className='desc' color="text">
                                                                {item?.item?.description?.length > 40 ? `${item.item.description.slice(0, 40)}...` : item?.item?.description}
                                                            </p>
                                                            <p className='optional'>{item?.item?.option}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>))}
                            </div>
                        </div>
                    </Tabs.TabContent>


                    <Tabs.TabContent contentOf="drink">
                        <div className="slidable">
                            <div className='scrolled-tab'>
                                <div className='image'
                                     style={scrollPos.y > 0 ? {display: 'none'} : {backgroundImage: `url(${menus?.image?.url})`}}>
                                    <p className='name'>{menus.name}</p>
                                </div>
                                <Tabs.TabHeader square>
                                    <Tabs.TabTitle tabName="food">Food</Tabs.TabTitle>
                                    <Tabs.TabTitle tabName="drink">Drinks</Tabs.TabTitle>
                                </Tabs.TabHeader>
                                <div style={{width: '100%'}}>
                                    <div className='menu-category'>{
                                        menus.drinks ? menus.drinks.length ? menus.drinks.map((item, key) => (item.items.length > 0 &&
                                            <a key={key}
                                               onClick={() => setActive(item.name)}
                                               className={active === item.name ? 'active-category' : 'passive-category'}
                                               href={`#${item.name}`}>
                                                {item.name}
                                            </a>
                                        )) : '' : ''
                                    }</div>
                                </div>
                            </div>

                            <div className='category-border'/>
                            <div className={scrollPos.y === 0 ? 'menu-body' : ''}>
                                {menus.drinks && menus.drinks.length && menus.drinks.map((item, key) => (item.items.length > 0 &&
                                    <div>
                                        <div id={`${item.name}`} style={{height: '100px'}}/>
                                        <div className='category' key={key}>
                                            <p className='category-title'>{item.name}</p>

                                            <div> {
                                                item.items.length && item.items.map((item, key) => (
                                                    <div key={key} className='category-card'
                                                         onClick={() => handleOpenSwipe(item.item, 'drink')}>
                                                        <div>
                                                            {item.item.images && item.item.images.length ?
                                                                <img src={item.item.images[item.item.mainImage].url}
                                                                     alt="icon"/>
                                                                :
                                                                <div className='no-image'><Icons.DrinkIcon/></div>
                                                            }
                                                        </div>
                                                        <div className='card-info'>

                                                            <div className='title'>
                                                                <SlicedText type={'nameQr'} size={10}
                                                                            data={item.item.name}/>
                                                                {/*<p>{item.item.name}</p>*/}
                                                                <p>{`$${item.item.price.toString().search("\\.") === -1 ?
                                                                    `${item.item.price}.00`
                                                                    : item.item.price
                                                                }`}</p>
                                                            </div>

                                                            <p className='desc' color="text">
                                                                {item?.item?.description?.length > 20 ? `${item.item.description.slice(0, 20)}...` : item?.item?.description}
                                                            </p>
                                                            <p className='optional'>{item.item.option}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>))}
                            </div>
                        </div>
                    </Tabs.TabContent>
                </Tabs.Wrapper>

            </Container>

            <SwipeUp
                open={open}
                onChange={() => setOpen(!open)}
            >
                <Modal modalType={modalType} info={modalInfo}/>
            </SwipeUp>

        </LazyLoad>
    )
}