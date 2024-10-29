export interface Type {
	text: string
	color: string
}

export const types: Record<string, Type> = {
	normal: {
		text: 'Normal',
		color: '#9fa19f'
	},
	fighting: {
		text: 'Fighting',
		color: '#ff8000'
	},
	flying: {
		text: 'Flying',
		color: '#81b9ef'
	},
	poison: {
		text: 'Poison',
		color: '#9141cb'
	},
	ground: {
		text: 'Ground',
		color: '#915121'
	},
	rock: {
		text: 'Rock',
		color: '#afa981'
	},
	bug: {
		text: 'Bug',
		color: '#91a119'
	},
	ghost: {
		text: 'Ghost',
		color: '#704170'
	},
	steel: {
		text: 'Steel',
		color: '#60a1b8'
	},
	fire: {
		text: 'Fire',
		color: '#e62829'
	},
	water: {
		text: 'Water',
		color: '#2980ef'
	},
	grass: {
		text: 'Grass',
		color: '#3fa129'
	},
	electric: {
		text: 'Electric',
		color: '#fac000'
	},
	psychic: {
		text: 'Psychic',
		color: '#ef4179'
	},
	ice: {
		text: 'Ice',
		color: '#3dcef3'
	},
	dragon: {
		text: 'Dragon',
		color: '#5060e1'
	},
	dark: {
		text: 'Dark',
		color: '#624d4e'
	},
	fairy: {
		text: 'Fairy',
		color: '#ef70ef'
	},
	stellar: {
		text: 'Stellar',
		color: '#40b5a5'
	},
	unknown: {
		text: 'Unknown',
		color: '#68a090'
	}
}
