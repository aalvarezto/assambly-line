"use client"

import mock from "../../../../mock/data.json"
import { ContainerHome } from "./Home.styled"
import { Comment } from "./components"

const HomePage = () => (
	<ContainerHome>
		{mock.comments.map(comment => (
			<>
				<Comment
					comment={comment}
					mainUser={mock.currentUser.username}
					key={`comment-box-${comment.id}-${comment.user}`}
				></Comment>

				{comment.replies.map(reply => (
					<Comment
						comment={reply}
						mainUser={mock.currentUser.username}
						key={`reply-box-${reply.id}-${reply.user}`}
					></Comment>
				))}
			</>
		))}
	</ContainerHome>
)

export default HomePage
