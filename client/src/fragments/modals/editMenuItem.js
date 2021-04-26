import { BaseModal, NameInput } from "@eachbase/components"
import { Styled } from "./core"
import { useEffect, useState } from "react";
import { Button, Input } from "@eachbase/components";
import { Change, Check, InputTypes } from "@eachbase/utils";
import { TextInput } from "../../components/inputs/core";


let initState = {
	id: -1,
	title: "",
	description: "",
	options: "",
	imageUrl: [],
	type: "",
	parents: [],
	price: "",
}
let k = 0

export const EditMenuItem =
	({ status, close, data, title }) => {
		console.log("EditMenuItem rendered ", k++)
		let [ item, setItem ] = useState(initState)
		
		useEffect(() => {
			if (data)
				setItem({
					...data,
					title: {
						...InputTypes.text,
						placeholder: "title",
						dataType: "title",
						important: true,
						value: data.title || ""
					},
					description: {
						...InputTypes.text,
						important: true,
						dataType: "description",
						value: data.description || "",
						maxLength: 500,
						placeholder: "title"
					},
					options: { ...InputTypes.text, dataType: "options", value: data.options || "", maxLength: 100 },
					price: {
						...InputTypes.text,
						important: true,
						value: data.price || "",
						dataType: "price",
						
						maxLength: 5,
						minLength: 1
					},
					imageUrl: data.imageUrl
				})
			return () => setItem(initState)
		}, [ status ])
		
		if (item.id === -1) return null
		console.log(item.title)
		
		const handlerSave = () => {
			let editedItem = {
				id: item.id || -1,
				title: item.title.value || "",
				description: item.description.value || "",
				options: item.options.value || "",
				imageUrl: item.imageUrl.value || [],
				type: item.type.value || "food",
				parents: item.parents.value || [],
				price: item.price.value || "",
			}
			
			console.log(editedItem)
			
		}
		
		
		return (
			<BaseModal close={close} status={status}>
				<Styled.Edit>
					<Styled.Title>{title} </Styled.Title>
					<Styled.Row mt={40} mtT={32} mtM={32}>
						<Input.Name {...item.title} setState={setItem}/>
						<Input.Prise {...item.price} setState={setItem}/>
					</Styled.Row>
					<Styled.Row>
						<Input.Description className={"description"} {...item.description} setState={setItem}/>
					</Styled.Row>
					<Styled.Row>
						<Input.Options {...item.options} setState={setItem}/>
					</Styled.Row>
					<Styled.Row mt={40} mtT={32} mtM={24}>
						<Input.Image type={item.type} values={item.imageUrl}
												 onChange={imageUrl => setItem(current => ({ ...current, imageUrl }))} setState={setItem}
												 count={6}/>
					</Styled.Row>
					<Button.Accept onClick={handlerSave} className={"save"}>Save</Button.Accept>
				</Styled.Edit>
			</BaseModal>
		)
	}