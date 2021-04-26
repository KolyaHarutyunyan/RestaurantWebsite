import { InputBlock, Styled } from "."
import { useRef, useState } from "react";
import { ItemImage } from "../../itemImage";
import { colors } from "../../../theme";

export const ImagePiker = ({ count, brd, values, onChange, className, type, icon }) => {
	
	
	let [ selected, setSelected ] = useState(-1)
	let inputRefs = [ ...Array(count).keys() ].map(_ => useRef())
	
	if (!values) return null
	
	console.log("item is : ", values)
	
	console.log("selected is : ", selected)
	
	let fileSelectHandler = (file, id = -1) => {
		
		let reader = new FileReader()
		reader.onload = () => {
			onChange(values.map((item, i) => i === id ? reader.result : item))
		}
		reader.readAsDataURL(file[0])
		
		
	}
	
	
	let dragHandlerStart = (e, id) => {
		
		setSelected(id)
		console.log("dragHandlerStart", id)
	}
	let dragHandlerEnd = (e) => {
		
		e.target.style.boxShadow = "none"
	}
	let dragHandlerOver = (e) => {
		e.preventDefault()
		e.target.style.boxShadow = "0 0 10px " + colors.shadow
	}
	let dragHandler = (e, id) => {
		e.preventDefault()
		let list = values
		if (selected !== -1) {
			let t = list[id]
			console.log(id, selected)
			list[id] = list[selected]
			list[selected] = t
			setSelected(-1)
			onChange(list)
			
		} else {
		 
			
			let addImg = (files) => {
				let reader = new FileReader()
				let id = -1
				for (let i = 0; i < count; i++) if (!list[i]) {
					id = i;
					break
				}
				
				if (id === -1 || !files.length) {
					onChange(list);
					console.log(id,files.length)
					return;
				}
				
				
				reader.onload = () => {
					list = list.map((item, i) => i === id ? reader.result : item)
					console.log(list)
					addImg(files.splice(1, files.length - 1))
					
				}
				reader.readAsDataURL(files[0])
			}
			addImg([ ...e.dataTransfer.files ])
			
			
			
		}
		
	}
	let removeItem = id => onChange(values.map((item, i) => id === i ? "" : item))
	
	return (
		<InputBlock
			brd={brd}
			className={className + " file"}
		>
			<Styled.ImagePiker>
				{
					typeof values === "object"
						? <div className="row">
							{
								values.map((item, id) => <div
									key={id}
									style={{ cursor:  "pointer" }}
									draggable={!!item}
									onDrop={e => dragHandler(e, id)}
									onDragStart={e => dragHandlerStart(e, id)}
									onDragLeave={e => dragHandlerEnd(e)}
									onDragEnd={e => dragHandlerEnd(e)}
									onDragOver={e => dragHandlerOver(e)}
								
								>
									<input ref={inputRefs[id]} onChange={e => fileSelectHandler(e.target.files, id)}
												 type="file" accept={"image/*"} style={{ display: "none" }}/>
									<ItemImage onClick={() => inputRefs[id].current.click()} className="item" type={type || "menu"}
														 url={item}
														 onRemove={() => removeItem(id)}/>
								</div>)
							}
						
						
						</div>
						: <div className="row">
							<ItemImage type={type || "restaurant"} url={values}/>
						</div>
				}
				<p className="title">
					Drag & Drop or <span> Upload</span> Images
				</p>
				<p className="description">
					<span>*</span>first image will be used as the main image
				</p>
			</Styled.ImagePiker>
		</InputBlock>
	)
}