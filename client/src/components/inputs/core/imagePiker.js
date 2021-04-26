import { InputBlock,Styled } from "."
import { useState } from "react";
import { ItemImage } from "../../itemImage";

export const ImagePiker = ({ count, brd,value, className, type,icon }) => {
	console.log(value)
	let [item,setItem] = useState(value)
	if (!item) return null
	console.log("item is : ",item)
	return (
		<InputBlock
			brd={brd}
			className={className + " file"}
		>
			<Styled.ImagePiker>
				{
					typeof item === "object"
						? <div className="items">
							<div className="row">
								<ItemImage type={type || "menu"} url={item[0]}/>
								
							</div>
						</div>
					: <div className="items">
							 
								<ItemImage type={type || "restaurant"}  url={item}  />
							
						 
						</div>
				}
				{count}
			</Styled.ImagePiker>
		</InputBlock>
	)
}