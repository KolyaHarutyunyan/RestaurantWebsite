import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link"

let newMenu = {
	id: "",
	title: "",
	tag: "",
	description: "",
	status: false,
	backgroundImage: "",
	categories: []
}
let getMenu = (tag, menus) => menus.find(menu => menu.tag === tag)


export const MenuPage = ({ tag }) => {
	let menus = useSelector(state => state.restaurant.menus || [])
	let [ menu, setMenu ] = useState({})
	let router = useRouter()
	
	useEffect(() => {
		if (tag === "newMenu") {
		} else {
			let res = getMenu(tag, menus)
			if (res) {
				setMenu(res)
			} else {
				router.push("/","/",{})
			}
			
		}
	}, [ tag ])
	
	return (
		<>
			<div>
				<Link href={"/restaurant"}>
					<a >restaurant</a>
				</Link>
			</div>
			<h1>{menu.title || "new Menu"}</h1>
	
	</>
	)
}