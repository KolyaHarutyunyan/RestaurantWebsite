import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { CategoriesList, CategoriesTitle, ItemsList, ItemsTitle, Styled } from "./core"

let desktopSize = 1279
export const Categories = () => {
	let categories = useSelector(state => state.menu.categories)
	let [ activeType, setActiveType ] = useState("foods")
	let [ desktop, setDesktop ] = useState(false)
	let [ openRightBlock, setOpenRightBlock ] = useState(false)
	
	let [ activeCategoryId, setActiveCategoryId ] = useState(desktop ? categories[activeType][0] : false)
	let checkType = () => {
		setDesktop(desktopSize < window.innerWidth)
		if (desktopSize < window.innerWidth && !activeCategoryId)
			setActiveCategoryId(categories[activeType][0])
	}
	useEffect(() => {
		checkType()
		window.addEventListener("resize", checkType)
		return () => window.removeEventListener("resize", checkType)
	}, [])
	
	
	const closeRightBlock = () => {
		setTimeout(() => setActiveCategoryId(false), 500)
		setOpenRightBlock(false)
	}
	
	const changeTypeTo = val => {
		setActiveType(val)
		if (desktop) setActiveCategoryId(categories[val][0])
	}
	const changeCategoryTo = val => {
		setActiveCategoryId(val)
		if (!desktop) setOpenRightBlock(true)
	}
	
	console.log(activeType, activeCategoryId, desktop)
	return (
		<>
			<Styled.Content>
				<Styled.LeftBlock>
					<CategoriesTitle activeType={activeType} changeTo={changeTypeTo}/>
					 
							<CategoriesList activeType={activeType} activeCategoryId={activeCategoryId} changeTo={changeCategoryTo}/>
						 
				</Styled.LeftBlock>
				 <Styled.RightBlock open={openRightBlock}>
							<ItemsTitle activeType={activeType} activeCategory={activeCategoryId} close={closeRightBlock}/>
					 {
						
						 desktop && activeCategoryId
							
							 ?
							<ItemsList activeCategoryId={activeCategoryId}/>
							 : null
					 }	</Styled.RightBlock>
					
			
			</Styled.Content>
			{
				desktop && !activeCategoryId
					? <Styled.NotItem>No Categories & Menu Items Yet</Styled.NotItem>
					: null
			}
		</>
	)
}