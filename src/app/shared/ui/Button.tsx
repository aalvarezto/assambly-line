import React from "react"
import Image from "next/image"
import { styled } from "styled-components"
import { svgDictionary, themes } from "../theme"

const ImgReply = styled(Image)`
	width: auto;
	height: auto;
`

interface IStyledButtonProps {
	readonly $variant: keyof typeof themes
	readonly $isNotRounded?: boolean
}

const ButtonComponent = styled.button<IStyledButtonProps>`
	display: flex;
	padding: 0 0.5rem;
	border-radius: ${props => (props.$isNotRounded ? "0" : "0.5rem")};
	height: fit-content;
	font-weight: bold;
	align-items: center;
	justify-content: center;
	color: ${props => themes[props.$variant].color};
	background-color: ${props => themes[props.$variant].bgColor};
`

type FilteredButtonProps = Omit<
	React.ComponentProps<typeof ButtonComponent>,
	keyof IStyledButtonProps
>

interface IButtonProps extends FilteredButtonProps {
	readonly iconType?: keyof typeof svgDictionary
	readonly isNotRounded?: boolean
	readonly variant?: keyof typeof themes
}

const Button = ({
	variant = "primary",
	iconType,
	isNotRounded = false,
	children,
	...props
}: React.PropsWithChildren<IButtonProps>) => (
	<ButtonComponent $variant={variant} $isNotRounded={isNotRounded} {...props}>
		{iconType && (
			<ImgReply
				alt={iconType}
				src={svgDictionary[iconType](props.disabled)}
				width={20}
				height={20}
			/>
		)}

		{children}
	</ButtonComponent>
)

export default Button
