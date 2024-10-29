export interface Stat {
	text: string
	colorClass: string
}

export const stats: Record<string, Stat> = {
	'hp': {
		text: 'HP',
		colorClass: 'bg-rose-500'
	},
	'attack': {
		text: 'Attack',
		colorClass: 'bg-orange-500'
	},
	'defense': {
		text: 'Defense',
		colorClass: 'bg-yellow-500'
	},
	'special-attack': {
		text: 'Sp. Atk',
		colorClass: 'bg-green-500'
	},
	'special-defense': {
		text: 'Sp. Def',
		colorClass: 'bg-blue-500'
	},
	'speed': {
		text: 'Speed',
		colorClass: 'bg-pink-500'
	}
}
