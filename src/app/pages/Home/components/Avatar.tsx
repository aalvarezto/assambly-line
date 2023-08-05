import React from "react"
import { styled } from "styled-components"
import { colors, Button } from "../../../shared"

const BoxAvatar = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`

const ImgAvatar = styled.div`
	background-color: ${colors.grayishBlue};
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
`

const Name = styled.h3`
	margin: 0 1rem;
	font-weight: bold;
	color: ${colors.darkBlue};
`

const CreatedAt = styled.p`
	color: ${colors.darkBlue};
`

const BoxRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 1rem;
`

const BoxButtons = styled.div`
	display: flex;
	gap: 2rem;
	flex-direction: row;
`

interface IVatarProps {
	src?: string
	name: string
	createdAt: string
}

const Avatar = ({ name, createdAt }: React.PropsWithChildren<IVatarProps>) => {
	return (
		<BoxRow>
			<BoxAvatar>
				<ImgAvatar />

				<Name>{name}</Name>

				<CreatedAt>{createdAt}</CreatedAt>
			</BoxAvatar>

			<BoxButtons>
				<Button variant="warning" iconType="delete">
					&nbsp; Delete
				</Button>

				<Button variant="terciary" iconType="reply">
					&nbsp; Reply
				</Button>

				<Button variant="terciary" iconType="edit">
					&nbsp; Edit
				</Button>
			</BoxButtons>
		</BoxRow>
	)
}

export default Avatar
