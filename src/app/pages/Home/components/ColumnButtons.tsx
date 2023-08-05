import { useState } from "react"
import { styled } from "styled-components"
import { Button } from "../../../shared"

const BoxButtons = styled.div`
	margin-right: 1.5rem;
	width: 4rem;
`

const ButtonSmall = styled(Button)`
	display: flex;
	flex-direction: column;
	border-top: none !important;
	font-weight: bold;
	font-size: small;

	& {
		height: 2rem;
		width: 100%;
	}

	&:first-child {
		border-top-left-radius: 0.4rem !important;
		border-top-right-radius: 0.4rem !important;
	}

	&:last-child {
		border-bottom-left-radius: 0.4rem !important;
		border-bottom-right-radius: 0.4rem !important;
	}
`

const ColumnButtons = () => {
	const [likes, setLikes] = useState(0)

	return (
		<BoxButtons>
			<ButtonSmall
				variant="secondary"
				onClick={() => setLikes(likes + 1)}
				iconType="plus"
			/>

			<ButtonSmall variant="secondary">{likes}</ButtonSmall>

			<ButtonSmall
				variant="secondary"
				onClick={() => setLikes(likes - 1)}
				iconType="minus"
			/>
		</BoxButtons>
	)
}

export default ColumnButtons
