const svgDictionary = {
	delete: (isDisabled = false) => "/icon-delete.svg",
	edit: (isDisabled = false) => "/icon-edit.svg",
	minus: (isDisabled = false) =>
		`/icon-minus${isDisabled ? "-disabled" : ""}.svg`,
	plus: (isDisabled = false) =>
		`/icon-plus${isDisabled ? "-disabled" : ""}.svg`,
	reply: (isDisabled = false) => "/icon-reply.svg",
} as const

export default svgDictionary
