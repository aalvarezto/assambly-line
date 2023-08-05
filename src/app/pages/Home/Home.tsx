"use client"

const comment = {
	id: 1,
	content:
		"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
	createdAt: "1 month ago",
	score: 12,
	user: {
		image: {
			png: "./images/avatars/image-amyrobson.png",
			webp: "./images/avatars/image-amyrobson.webp",
		},
		username: "amyrobson",
	},
	replies: [],
}

import { BoxComment, ContainerHome } from "./Home.styled"
import { Avatar, ColumnButtons } from "./components"

const HomePage = () => {
	return (
		<ContainerHome>
			<BoxComment>
				<ColumnButtons />

				<div>
					<Avatar
						name={comment.user.username}
						createdAt={comment.createdAt}
					/>

					{comment.content}
				</div>
			</BoxComment>
		</ContainerHome>
	)
}

export default HomePage
