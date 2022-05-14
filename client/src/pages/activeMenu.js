import {ActiveMenuSection} from "@eachbase/fragments/sections";
import {useScrollPosition} from "react-use-scroll-position";
import {useEffect, useState} from "react";
import {RemoveScroll} from "react-remove-scroll";
import {SwipeUp} from "../components/swipe";
import {Modal} from "../fragments/sections/activeMenu/modal";
import {LazyLoad} from "../components";


export const ActiveMenu = () => {
    const scrollPos = useScrollPosition();
    const [open, setOpen] = useState(false)
    const [modalInfo, setModalInfo] = useState('')
    const [modalType, setModalType] = useState('')
    const handleOpenClose = () =>{
        setOpen(!open)
        if(!open === true) {
            // disableScroll.on({disableScroll:false})
            // document.body.style.overflow = 'hidden';
            // window.history.scrollRestoration = 'manual'
            // document.getElementById("__next").style.overflowY = 'hidden' ;
        }else{
            // disableScroll.off()
            // document.body.style.overflow = 'auto';
            // document.getElementById("__next").style.overflowY = 'auto' ;
        }
    }
    const [loaded, setLoaded] = useState(false);
    // const [modalInfo, setModalInfo] = useState('')
    // const [modalType, setModalType] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 500);
    }, []);

    return (
        <LazyLoad loaded={loaded} smallIcon={true}>
            <div style={{transition: 'all .3s', height: !open && scrollPos.y > 0 ? 0 : '100px'}}/>
            {open ?
                <RemoveScroll>

                <ActiveMenuSection handleOpenClose={handleOpenClose} setOpen={setOpen} open={open}
                                   setModalInfo={setModalInfo} setModalType={setModalType}/>
                </RemoveScroll>

                :
                <ActiveMenuSection handleOpenClose={handleOpenClose} setOpen={setOpen} open={open}
                                   setModalInfo={setModalInfo} setModalType={setModalType}/>
            }

            <SwipeUp
                open={open}
                onChange={ handleOpenClose }
            >
                <RemoveScroll className="scroll">

                <Modal modalType={modalType} info={modalInfo}/>
                </RemoveScroll>
            </SwipeUp>
        </LazyLoad>
    )
}
