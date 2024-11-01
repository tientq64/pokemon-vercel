export interface Type {
	name: string
	text: string
	color: string
}

export const types: Record<string, Type> = {
	normal: {
		name: 'normal',
		text: 'Normal',
		color: '#9fa19f'
	},
	fighting: {
		name: 'fighting',
		text: 'Fighting',
		color: '#ff8000'
	},
	flying: {
		name: 'flying',
		text: 'Flying',
		color: '#81b9ef'
	},
	poison: {
		name: 'poison',
		text: 'Poison',
		color: '#9141cb'
	},
	ground: {
		name: 'ground',
		text: 'Ground',
		color: '#915121'
	},
	rock: {
		name: 'rock',
		text: 'Rock',
		color: '#afa981'
	},
	bug: {
		name: 'bug',
		text: 'Bug',
		color: '#91a119'
	},
	ghost: {
		name: 'ghost',
		text: 'Ghost',
		color: '#704170'
	},
	steel: {
		name: 'steel',
		text: 'Steel',
		color: '#60a1b8'
	},
	fire: {
		name: 'fire',
		text: 'Fire',
		color: '#e62829'
	},
	water: {
		name: 'water',
		text: 'Water',
		color: '#2980ef'
	},
	grass: {
		name: 'grass',
		text: 'Grass',
		color: '#3fa129'
	},
	electric: {
		name: 'electric',
		text: 'Electric',
		color: '#fac000'
	},
	psychic: {
		name: 'psychic',
		text: 'Psychic',
		color: '#ef4179'
	},
	ice: {
		name: 'ice',
		text: 'Ice',
		color: '#3dcef3'
	},
	dragon: {
		name: 'dragon',
		text: 'Dragon',
		color: '#5060e1'
	},
	dark: {
		name: 'dark',
		text: 'Dark',
		color: '#624d4e'
	},
	fairy: {
		name: 'fairy',
		text: 'Fairy',
		color: '#ef70ef'
	},
	stellar: {
		name: 'stellar',
		text: 'Stellar',
		color: '#40b5a5'
	},
	unknown: {
		name: 'unknown',
		text: 'Unknown',
		color: '#68a090'
	}
}
