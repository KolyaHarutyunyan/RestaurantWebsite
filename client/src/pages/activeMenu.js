import {ActiveMenuSection} from "@eachbase/fragments/sections";
import {useScrollPosition} from "react-use-scroll-position";
import {useState} from "react";
import disableScroll from 'disable-scroll';


export const ActiveMenu = () => {
    const scrollPos = useScrollPosition();
    const [open, setOpen] = useState(false)

    const handleOpenClose = () =>{
        setOpen(!open)
        if(!open === true) {
            disableScroll.on()
            // document.body.style.overflow = 'hidden';
        }else{
            disableScroll.off()
            // document.body.style.overflow = 'auto';
        }
    }

    return (
        <div>
            <div style={{transition: 'all .3s', height: !open && scrollPos.y > 0 ? 0 : '100px'}}/>
            <ActiveMenuSection handleOpenClose={handleOpenClose} setOpen={setOpen} open={open}/>
        </div>
    )
}
