import {HtmlTooltip} from "./toolTip";
import React from "react";
import {toolTipStyles} from "./styles";


export const SlicedText = ({data, size, type, className}) => {
    const globalText = toolTipStyles()

    const classType = type === 'name' ? globalText.nameEllipsis :
        // type === 'address' ? globalText.addressEllipsis :
        //     type === 'email' ? globalText.emailEllipsis :
                type === 'desc' ? globalText.descEllipsis :
                type === 'nameDesc' ? globalText.nameEllipsisDesc :
                type === 'option' ? globalText.optionEllipsis : ''
    return (
        <>
            {data && data.length > size ?
                <HtmlTooltip
                    title={<p>{data}</p>}
                    placement="top-end"
                >

                    {/*{type === 'desc' ?*/}
                    {/*    <span className={classType}>*/}
                    {/*        {data && `${data.slice(0, size)}...`}*/}
                    {/*    </span>*/}
                    {/*    :*/}
                        <p className={classType}>
                            {data }
                        </p>
                    {/*}*/}
                </HtmlTooltip>
                :
                // type === 'desc' ?
                //     <span>{data}</span>
                //     :
                    <p className={classType}>{data}</p>
            }

        </>
    )
}
