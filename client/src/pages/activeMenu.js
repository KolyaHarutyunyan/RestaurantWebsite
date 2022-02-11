import { ActiveMenuSection } from "@eachbase/fragments/sections";
import {useScrollPosition} from "react-use-scroll-position";
import {FindLoad} from "@eachbase/utils";
import {Loader} from "../components";

export const ActiveMenu =()=>{
    const scrollPos = useScrollPosition();

    return(
    <div>
        <div style={scrollPos.y > 0 ? {} : {height:'100px'}}/>

            <ActiveMenuSection/>

    </div>
   )
}
