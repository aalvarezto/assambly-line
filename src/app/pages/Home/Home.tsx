"use client"

import mock from "../../../../mock/data.json"
import { ContainerHome, BoxReply } from "./Home.styled"
import { Comment } from "./components"

import { styled } from "styled-components"
import React from "react"

const Box = styled.div`
	width: 5rem;
`

const BoxS = styled.div`
	width: calc(100% / 2 + 2px);
	height: 100%;
	border-right: 1px solid hsla(238, 40%, 52%, 0.2);
`

const BoxF = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`

const HomePage = () => {
	return (
		<ContainerHome>
			{mock.comments.map(comment => (
				<BoxF
					key={`comment-box-${comment.id}-${comment.user.username}`}
				>
					<Comment
						comment={comment}
						mainUser={mock.currentUser.username}
					></Comment>
					{comment.replies.map(reply => (
						<BoxReply
							key={`reply-box-${reply.id}-${reply.user.username}`}
						>
							<Box>
								<BoxS />
							</Box>

							<Comment
								comment={reply}
								mainUser={mock.currentUser.username}
							></Comment>
						</BoxReply>
					))}
				</BoxF>
			))}
		</ContainerHome>
	)
}

export default HomePage
