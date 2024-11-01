export interface Color {
	gradientClass: string
	nameClass: string
}

export const colors: Record<string, Color> = {
	black: {
		gradientClass: 'from-gray-950 to-[8rem]',
		nameClass: 'text-gray-100'
	},
	blue: {
		gradientClass: 'from-blue-300 to-[8rem]',
		nameClass: 'text-blue-900'
	},
	brown: {
		gradientClass: 'from-orange-300 to-[8rem]',
		nameClass: 'text-orange-900'
	},
	gray: {
		gradientClass: 'from-gray-400 to-[8rem]',
		nameClass: 'text-gray-800'
	},
	green: {
		gradientClass: 'from-green-300 to-[8rem]',
		nameClass: 'text-green-900'
	},
	pink: {
		gradientClass: 'from-pink-300 to-[8rem]',
		nameClass: 'text-pink-900'
	},
	purple: {
		gradientClass: 'from-purple-300 to-[8rem]',
		nameClass: 'text-purple-900'
	},
	red: {
		gradientClass: 'from-red-300 to-[8rem]',
		nameClass: 'text-red-900'
	},
	white: {
		gradientClass: 'from-neutral-300 to-[8rem]',
		nameClass: 'text-neutral-700'
	},
	yellow: {
		gradientClass: 'from-yellow-300 to-[8rem]',
		nameClass: 'text-yellow-900'
	}
}
