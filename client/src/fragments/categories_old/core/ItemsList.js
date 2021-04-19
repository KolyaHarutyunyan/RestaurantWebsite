import { useSelector } from "react-redux";

export const ItemsList = ({ items }) => {
	let menuItems = useSelector(state => state.menuItems)
	return (
		<>
			{/*{*/}
			{/*	items.map(item => {*/}
			{/*		let _item = menuItems.find(menuItem => menuItem.id === item)*/}
			{/*		return _item ? <li>{_item.title}</li> : null*/}
			{/*	})*/}
			{/*}*/}
		</>
	)
}