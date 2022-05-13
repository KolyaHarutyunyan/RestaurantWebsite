import {ActiveMenuSection} from "@eachbase/fragments/sections";
import {useScrollPosition} from "react-use-scroll-position";
import {useState} from "react";

export const ActiveMenu = () => {
    const scrollPos = useScrollPosition();
    const [open, setOpen] = useState(false)

    const handleOpenClose = () =>{
        setOpen(!open)
        if(!open === true) {
            // disableWheel.on()
            document.body.style.overflow = 'hidden';
            window.history.scrollRestoration = 'manual'
            document.getElementById("__next").style.overflowY = 'hidden' ;
        }else{
            // disableScroll.off()
            document.body.style.overflow = 'auto';
            document.getElementById("__next").style.overflowY = 'auto' ;
        }
    }

    return (
        <div>
            <div style={{transition: 'all .3s', height: !open && scrollPos.y > 0 ? 0 : '100px'}}/>
            <ActiveMenuSection handleOpenClose={handleOpenClose} setOpen={setOpen} open={open}/>
        </div>
    )
}
