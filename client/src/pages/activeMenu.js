import {ActiveMenuSection} from "@eachbase/fragments/sections";
import {useScrollPosition} from "react-use-scroll-position";
import {useEffect, useState} from "react";
import {SwipeUp} from "../components/swipe";
import {Modal} from "../fragments/sections/activeMenu/modal";
import {LazyLoad} from "../components";
import {RemoveScrollBar} from "react-remove-scroll-bar";

export const ActiveMenu = () => {
    const scrollPos = useScrollPosition();
    const [open, setOpen] = useState(false)
    const [modalInfo, setModalInfo] = useState('')
    const [modalType, setModalType] = useState('')
    const handleOpenClose = () => {
        setOpen(!open)
    }
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 500);
    }, []);

    return (
        <LazyLoad loaded={loaded} smallIcon={true}>
            <div style={{transition: 'all .3s', height: !open && scrollPos.y > 0 ? 0 : '100px'}}/>
            {open ?
                <div>
                    <RemoveScrollBar/>
                    <ActiveMenuSection
                        handleOpenClose={handleOpenClose}
                        setOpen={setOpen}
                        open={open}
                        setModalInfo={setModalInfo}
                        setModalType={setModalType}
                    />
                </div>

                :
                <ActiveMenuSection
                    handleOpenClose={handleOpenClose}
                    setOpen={setOpen}
                    open={open}
                    setModalInfo={setModalInfo}
                    setModalType={setModalType}
                />
            }

            <SwipeUp
                open={open}
                onChange={handleOpenClose}
            >
                <Modal modalType={modalType} info={modalInfo}/>
            </SwipeUp>
        </LazyLoad>
    )
}
