import { styled } from "styled-components"
import { colors } from "../../shared"

const ContainerHome = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.5rem;
	gap: 1.5rem;
	height: 100vh;
	background-color: ${colors.lightGray};
`

const BoxReply = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`

export { ContainerHome, BoxReply }
