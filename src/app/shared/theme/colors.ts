const colors = {
	moderateBlue: "hsl(238, 40%, 52%)",
	softRed: "hsl(358, 79%, 66%)",
	lightGrayishBlue: "hsl(239, 57%, 85%)",
	paleRed: "hsl(357, 100%, 86%)",
	darkBlue: "hsl(212, 24%, 26%)",
	grayishBlue: "hsl(211, 10%, 45%)",
	lightGray: "hsl(223, 19%, 93%)",
	veryLightGray: "hsl(228, 33%, 97%)",
	white: "hsl(0, 0%, 100%)",
} as const

const primary = { color: colors.white, bgColor: colors.moderateBlue } as const

const secondary = {
	color: colors.moderateBlue,
	bgColor: colors.lightGray,
} as const

const terciary = { color: colors.moderateBlue, bgColor: colors.white } as const

const warning = { color: colors.softRed, bgColor: colors.white } as const

const themes = { primary, secondary, terciary, warning } as const

export { themes }
export default colors
