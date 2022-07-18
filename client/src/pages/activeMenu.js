import {ActiveMenuSection} from "@eachbase/fragments/sections";
import {useEffect, useState} from "react";
import {Modal} from "../fragments/sections/activeMenu/modal";
import {LazyLoad} from "../components";
import {useScrollPosition} from "react-use-scroll-position";
import {AppBar, Dialog, Slide, Toolbar} from "@material-ui/core";
import React from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const ActiveMenu = () => {
    const [open, setOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState("");
    const [modalType, setModalType] = useState("");
    const [activeTab, setActiveTab] = useState("food");
    const [loaded, setLoaded] = useState(false);
    const scrollPos = useScrollPosition();

    const handleOpenClose = () => {
        setOpen(!open);
    };

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 500);
    }, []);

    return (
        <LazyLoad loaded={loaded} smallIcon={true}>
            <div style={{height: scrollPos.y > 0 || open ? "0" : "100px"}}/>
            <Dialog
                fullScreen
                open={open}
                onClose={handleOpenClose}
                style={{maxWidth: '768px', margin: '0 auto'}}
                TransitionComponent={Transition}
            >
                <div>
                    <Modal modalType={modalType} info={modalInfo} handleOpenClose={handleOpenClose}/>
                </div>
            </Dialog>

            <ActiveMenuSection
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                handleOpenClose={handleOpenClose}
                setOpen={setOpen}
                open={open}
                setModalInfo={setModalInfo}
                setModalType={setModalType}
            />
        </LazyLoad>
    );
}
