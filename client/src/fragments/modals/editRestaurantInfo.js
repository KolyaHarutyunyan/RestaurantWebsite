import { BaseModal } from "@eachbase/components"
import { Styled } from "./core"
import { memo, useEffect, useState } from "react";
import { Button } from "@eachbase/components";


export const EditRestaurantInfo =
	({ status, close, title }) => {
		console.log(status, close, title)
		
		
		return (
			<BaseModal close={close} status={status}>
				<Styled.Edit>
					
					<Styled.Title>{title} </Styled.Title>
					
					
					<Styled.Row>
						<Styled.InputBox>title</Styled.InputBox>
					</Styled.Row>
					
					<Styled.Row>
						<Styled.InputBox>description</Styled.InputBox>
					</Styled.Row>
					
					<Styled.Row>
						<Styled.InputBox>avatar</Styled.InputBox>
					</Styled.Row>
					<Button.Accept className={"save"}>Save</Button.Accept>
				</Styled.Edit>
			</BaseModal>
		)
	}