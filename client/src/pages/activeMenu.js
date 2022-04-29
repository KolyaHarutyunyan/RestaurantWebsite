import {ActiveMenuSection} from "@eachbase/fragments/sections";
import {useScrollPosition} from "react-use-scroll-position";

export const ActiveMenu = () => {
    const scrollPos = useScrollPosition();

    return (
        <div>
            <div style={{transition: 'all .3s', height: scrollPos.y > 0 ? 0 : '100px'}}/>
            <ActiveMenuSection/>
        </div>
    )
}
