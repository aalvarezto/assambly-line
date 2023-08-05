import React, { ButtonHTMLAttributes } from "react"
import Image from "next/image"
import { styled } from "styled-components"
import { svgDictionary, themes } from "../theme"

const ImgReply = styled(Image)`
	height: fit-content;
`

interface IStyledButtonProps {
	readonly variant: keyof typeof themes
}

const ButtonComponent = styled.button<IStyledButtonProps>`
	display: flex;
	padding: 0 0.5rem;
	border-radius: 0.5rem;
	height: fit-content;
	font-weight: bold;
	align-items: center;
	justify-content: center;
	color: ${props => themes[props.variant].color};
	background-color: ${props => themes[props.variant].bgColor};
`

interface IButtonProps extends React.ComponentProps<typeof ButtonComponent> {
	readonly iconType?: keyof typeof svgDictionary
}

const Button = ({
	variant,
	iconType,
	children,
	...props
}: React.PropsWithChildren<IButtonProps>) => (
	<ButtonComponent variant={variant} {...props}>
		{iconType && (
			<ImgReply
				alt={iconType}
				src={svgDictionary[iconType]}
				width={12}
				height={12}
			/>
		)}

		{children}
	</ButtonComponent>
)

export default Button
