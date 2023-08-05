import React from "react"
import { styled } from "styled-components"
import { colors, Button } from "../../../shared"
import Image from "next/image"

const BoxAvatar = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`

const ImgAvatar = styled(Image)`
	background-color: ${colors.grayishBlue};
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
`

const MainUserChip = styled.p`
	margin-right: 1rem;
	background-color: ${colors.moderateBlue};
	font-weight: bold;
	color: ${colors.white};
	font-size: small;
	padding: 0.1rem 0.5rem;
	border-radius: 10%;
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
	readonly createdAt: string
	readonly isMainUser?: boolean
	readonly name: string
	readonly src?: string
}

const Avatar = ({
	createdAt,
	isMainUser = false,
	name,
	src = "",
}: React.PropsWithChildren<IVatarProps>) => {
	return (
		<BoxRow>
			<BoxAvatar>
				<ImgAvatar
					alt={"avatar-img"}
					src={src}
					width={12}
					height={12}
				/>

				<Name>{name}</Name>

				{isMainUser && <MainUserChip>you</MainUserChip>}

				<CreatedAt>{createdAt}</CreatedAt>
			</BoxAvatar>

			<BoxButtons>
				{isMainUser ? (
					<>
						<Button variant="warning" iconType="delete">
							&nbsp; Delete
						</Button>

						<Button variant="terciary" iconType="edit">
							&nbsp; Edit
						</Button>
					</>
				) : (
					<Button variant="terciary" iconType="reply">
						&nbsp; Reply
					</Button>
				)}
			</BoxButtons>
		</BoxRow>
	)
}

export default Avatar
