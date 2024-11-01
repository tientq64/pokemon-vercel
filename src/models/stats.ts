export interface Stat {
	name: string
	text: string
	bgClass: string
}

export const stats: Record<string, Stat> = {
	'hp': {
		name: 'hp',
		text: 'HP',
		bgClass: 'bg-lime-500'
	},
	'attack': {
		name: 'attack',
		text: 'Attack',
		bgClass: 'bg-yellow-500'
	},
	'defense': {
		name: 'defense',
		text: 'Defense',
		bgClass: 'bg-orange-500'
	},
	'special-attack': {
		name: 'special-attack',
		text: 'Sp. Atk',
		bgClass: 'bg-sky-500'
	},
	'special-defense': {
		name: 'special-defense',
		text: 'Sp. Def',
		bgClass: 'bg-blue-500'
	},
	'speed': {
		name: 'speed',
		text: 'Speed',
		bgClass: 'bg-pink-500'
	}
}
