import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {LazyLoad, SlicedText, Tabs} from "@eachbase/components";
import {Container} from "./style";
import {Icons} from "@eachbase/theme";
import {useScrollPosition} from 'react-use-scroll-position';
import {SwipeUp} from "../../../components/swipe";
import {Modal} from "./modal";

export const ActiveMenuSection = ({handleOpenClose, setOpen, open, setModalType, setModalInfo}) => {
    const scrollPos = useScrollPosition();
    const [active, setActive] = useState('')
    const {menus} = useSelector(({menus}) => ({menus}));
    const business = useSelector(({businesses}) => businesses);
    const [activeTab, setActiveTab] = useState("food");


    const handleOpenSwipe = (info, type) => {
        setModalType(type)
        handleOpenClose()
        setModalInfo(info ? info : '')
    }

    return (
        <div>
        {/*<LazyLoad loaded={loaded} smallIcon={true}>*/}
            <Container>
                <Tabs.Wrapper
                    activeTab={activeTab}
                    onRequestToChange={(newActiveTab) => setActiveTab(newActiveTab)}
                >
                    <Tabs.TabContent contentOf="food">
                        <div className="slidable">
                            <div className='scrolled-tab'>
                                    <div style={{
                                        height:scrollPos.y > 0  ? '0' : '115px',
                                        opacity: scrollPos.y > 0  ? "0" : "1",
                                        visibility:scrollPos.y > 0  ? "hidden" : "visible",  }}
                                         className={'icon-title-wrapper'}
                                    >
                                        <div>
                                            {business?.logo ?
                                                <img className='business-icon' src={business?.logo?.thumbUrl}
                                                     alt={'icon'}/>
                                                :
                                                <div className='building-icon'>
                                                    <Icons.BuildingIcon/>
                                                </div>
                                            }
                                        </div>
                                        <p className='name'>{business?.name}</p>
                                    </div>
                                <Tabs.TabHeader square>
                                    <Tabs.TabTitle tabName="food">Food</Tabs.TabTitle>
                                    <Tabs.TabTitle tabName="drink">Drinks</Tabs.TabTitle>
                                </Tabs.TabHeader>
                                <div style={{width: '100%'}}>
                                    <div className='menu-category'>{
                                        menus.food ? menus.food.length ? menus.food.map((item, key) => (item.items.length > 0 &&
                                            <div  className='active-category-wrapper'>
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
                            <div >
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
                                                            <p className='optional'>
                                                                {item?.item?.option?.length > 40 ? `${item.item.option.slice(0, 40)}...` : item.item.option}
                                                            </p>
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
                                    <div style={{
                                        height:scrollPos.y > 0  ? '0' : '115px',
                                        opacity:scrollPos.y > 0  ? "0" : "1",
                                        visibility:scrollPos.y > 0  ? "hidden" : "visible",  }}
                                         className={'icon-title-wrapper'}
                                    >
                                        <div>
                                            { business?.logo ?
                                                <img className='business-icon' src={business?.logo?.thumbUrl} alt={'icon'}/>
                                                :
                                                <div className='building-icon'>
                                                     <Icons.BuildingIcon/>
                                                </div>
                                             }
                                         </div>
                                         <p className='name'>{business?.name}</p>
                                     </div>
                                <Tabs.TabHeader square>
                                    <Tabs.TabTitle tabName="food">Food</Tabs.TabTitle>
                                    <Tabs.TabTitle tabName="drink">Drinks</Tabs.TabTitle>
                                </Tabs.TabHeader>
                                <div style={{width: '100%'}}>
                                    <div className='menu-category'>{
                                        menus.drinks ? menus.drinks.length ? menus.drinks.map((item, key) => (item.items.length > 0 &&
                                            <div  className='active-category-wrapper' >
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
                            <div className={!open && scrollPos.y === 0 ? 'menu-body' : ''}>
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
                                                            <p className='optional'>
                                                                    {item?.item?.option?.length > 40 ? `${item.item.option.slice(0, 40)}...` : item.item.option}
                                                                </p>
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

            {/*<SwipeUp*/}
            {/*    open={open}*/}
            {/*    onChange={ handleOpenClose }*/}
            {/*>*/}
            {/*    <Modal modalType={modalType} info={modalInfo}/>*/}
            {/*</SwipeUp>*/}

        </div>
    )
}