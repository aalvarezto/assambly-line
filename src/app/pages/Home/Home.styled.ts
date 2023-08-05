import { styled } from "styled-components"
import { colors } from "../../shared"

const ContainerHome = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 1rem;
	gap: 1rem;
	height: 100vh;
	background-color: ${colors.lightGray};
`

const BoxComment = styled.div`
	background-color: ${colors.white};
	border-radius: 0.5rem;
	max-width: 50rem;
	padding: 1.5rem;
	display: flex;
`

export { ContainerHome, BoxComment }
