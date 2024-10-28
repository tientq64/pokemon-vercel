interface Stat {
	colorClass: string
}

export const stats: Record<string, Stat> = {
	'hp': {
		colorClass: 'bg-rose-500'
	},
	'attack': {
		colorClass: 'bg-orange-500'
	},
	'defense': {
		colorClass: 'bg-yellow-500'
	},
	'special-attack': {
		colorClass: 'bg-green-500'
	},
	'special-defense': {
		colorClass: 'bg-blue-500'
	},
	'speed': {
		colorClass: 'bg-pink-500'
	}
}
