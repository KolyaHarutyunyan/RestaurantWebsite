import {ActiveMenuSection} from "@eachbase/fragments/sections";
import {useEffect, useState} from "react";
import {SwipeUp} from "../components/swipe";
import {Modal} from "../fragments/sections/activeMenu/modal";
import {LazyLoad} from "../components";
import {RemoveScrollBar} from "react-remove-scroll-bar";

export const ActiveMenu = () => {
    const [open, setOpen] = useState(false)
    const [modalInfo, setModalInfo] = useState('')
    const [modalType, setModalType] = useState('')
    const [activeTab, setActiveTab] = useState("food");
    const [loaded, setLoaded] = useState(false);

    const handleOpenClose = () => {
        setOpen(!open)
        document.getElementById("__next").style.overflowY = open ? 'hidden' : 'auto'
    }

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 500);
    }, []);

    return (
        <LazyLoad loaded={loaded} smallIcon={true}>
            <div style={{ height: '100px'}}/>
            {open ?
                <div>
                    <RemoveScrollBar/>
                    <ActiveMenuSection
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        handleOpenClose={handleOpenClose}
                        setOpen={setOpen}
                        open={open}
                        setModalInfo={setModalInfo}
                        setModalType={setModalType}
                    />
                </div>

                :
                <ActiveMenuSection
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    handleOpenClose={handleOpenClose}
                    setOpen={setOpen}
                    open={open}
                    setModalInfo={setModalInfo}
                    setModalType={setModalType}
                />
            }

            <div style={{position:'relative', bottom:'-2px'}}>
            <SwipeUp
                open={open}
                onChange={handleOpenClose}
            >
                <Modal modalType={modalType} info={modalInfo}/>
            </SwipeUp>
            </div>
        </LazyLoad>
    )
}
