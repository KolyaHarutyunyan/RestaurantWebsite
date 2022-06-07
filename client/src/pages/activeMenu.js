import {ActiveMenuSection} from "@eachbase/fragments/sections";
import {useEffect, useState} from "react";
import {SwipeUp} from "../components/swipe";
import {Modal} from "../fragments/sections/activeMenu/modal";
import {LazyLoad} from "../components";
import {useScrollPosition} from "react-use-scroll-position";

export const ActiveMenu = () => {
    const [open, setOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState("");
    const [modalType, setModalType] = useState("");
    const [activeTab, setActiveTab] = useState("food");
    const [loaded, setLoaded] = useState(false);
    const scrollPos = useScrollPosition();


    let body =typeof window !== "undefined" && document.body;

    let hideScroll = function (e) {
        e.preventDefault();
    };


    const handleOpenClose = () => {
        setOpen(!open);

        if (open === true) {
            body.addEventListener("touchmove", hideScroll);
            document.body.style.overflow = "auto";
            document.body.style.position = "relative";
        } else {
            body.removeEventListener("touchmove", hideScroll);
            document.body.style.overflow = "hidden";
            // document.body.style.position = "fixed";
            document.body.style.width = "100%";
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 500);
    }, []);

    return (
        <LazyLoad loaded={loaded} smallIcon={true}>
            <div style={{height: scrollPos.y > 0 || open ? "0" : "100px"}}/>

            <ActiveMenuSection
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                handleOpenClose={handleOpenClose}
                setOpen={setOpen}
                open={open}
                setModalInfo={setModalInfo}
                setModalType={setModalType}
            />


            <div style={{position: "relative"}}>
                <SwipeUp
                    open={open}
                    onChange={handleOpenClose}
                >
                    <Modal modalType={modalType} info={modalInfo}/>
                </SwipeUp>
            </div>
        </LazyLoad>
    );
}
