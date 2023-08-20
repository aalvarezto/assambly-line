import { useState } from "react"
import { styled } from "styled-components"
import { Button } from "../../../shared"

const BoxButtons = styled.div`
	margin-right: 1.5rem;
	width: 5rem;
`

const ButtonSmall = styled(Button)`
	display: flex;
	flex-direction: column;
	font-weight: bold;
	min-width: 2.5rem;

	& {
		border: none;
		height: 2rem;
		width: 100%;
	}

	&:first-child {
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
	}

	&:last-child {
		border-bottom-left-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
	}
`

interface IColumnButtonsProps {
	readonly score: number
}

const ColumnButtons = ({
	score,
}: React.PropsWithChildren<IColumnButtonsProps>) => {
	const [likes, setLikes] = useState(score || 0)

	return (
		<BoxButtons>
			<ButtonSmall
				iconType="plus"
				isNotRounded
				disabled={score < likes}
				onClick={() => setLikes(likes + 1)}
				variant="secondary"
			/>

			<ButtonSmall isNotRounded variant="secondary">
				{likes}
			</ButtonSmall>

			<ButtonSmall
				iconType="minus"
				isNotRounded
				disabled={score > likes}
				onClick={() => setLikes(likes - 1)}
				variant="secondary"
			/>
		</BoxButtons>
	)
}

export default ColumnButtons
