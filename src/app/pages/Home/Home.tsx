"use client"

const comment = {
	id: 1,
	content:
		"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
	createdAt: "1 month ago",
	score: 12,
	user: {
		image: {
			png: "/avatars/image-amyrobson.png",
			webp: "/avatars/image-amyrobson.webp",
		},
		username: "amyrobson",
	},
	replies: [],
}

import { BoxComment, ContainerHome } from "./Home.styled"
import { Avatar, ColumnButtons } from "./components"

const HomePage = () => {
	const isMainUser = comment.user.username === "juliusomo"

	return (
		<ContainerHome>
			<BoxComment>
				<ColumnButtons score={comment.score} />

				<div>
					<Avatar
						createdAt={comment.createdAt}
						isMainUser={isMainUser}
						name={comment.user.username}
						src={comment.user.image.png}
					/>

					{comment.content}
				</div>
			</BoxComment>
		</ContainerHome>
	)
}

export default HomePage
