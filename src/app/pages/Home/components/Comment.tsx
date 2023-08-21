import React from "react"
import { styled } from "styled-components"
import { colors } from "../../../shared"
import { Avatar, ColumnButtons } from "./index"

const BoxComment = styled.div`
	background-color: ${colors.white};
	border-radius: 0.5rem;
	width: 100%;
	padding: 1.5rem;
	display: flex;
`

const Paragraph = styled.p``

interface IComment {
	id: number
	content: string
	createdAt: string
	score: number
	replyingTo?: string
	user: {
		image: {
			png: string
			webp: string
		}
		username: string
	}
	replies?: IComment[]
}

const Comment = ({
	comment,
	mainUser,
}: React.PropsWithChildren<{ comment: IComment; mainUser: string }>) => (
	<BoxComment>
		<ColumnButtons score={comment.score} />

		<div>
			<Avatar
				createdAt={comment.createdAt}
				isMainUser={comment.user.username === mainUser}
				name={comment.user.username}
				src={comment.user.image.png}
			/>
			<Paragraph>{comment.content}</Paragraph>
		</div>
	</BoxComment>
)

export default Comment
