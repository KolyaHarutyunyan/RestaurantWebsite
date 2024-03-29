// import  from ;
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import {Modal} from "../../fragments/sections/activeMenu/modal";
const SwipeableBottomSheet = dynamic(() => import('react-swipeable-bottom-sheet'), { ssr: false });
export const SwipeUp = ({ overlayBool,open, overlayStyle, onTransitionEnd, onChange, children, className, onclick, style = {} }) => {
    return (

        <SwipeableBottomSheet
            overlayStyle={overlayStyle}
            onTransitionEnd={onTransitionEnd}
            bodyStyle={{ borderRadius:'20px 20px 0 0',  margin:'0 auto', maxWidth:'768px'}}
            open={open}
            onChange={onChange}
            defaultOpen={false}
            overlay={true}
            // overlay={overlayBool === 'noConnect' ? false : true}
            topShadow={false}>

            <div className={className} style={{ maxWidth:'768px', borderRadius:'20px 20px 0 0', margin:'0 auto', boxShadow: '0 0 6px #0000002a' }}>
                {children}
            </div>
        </SwipeableBottomSheet>

    );
};
