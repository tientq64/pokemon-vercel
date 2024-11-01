export const rollingDomainSpeciesNames: (string | JSX.Element)[] = [
	'<pokemon-name>',
	'palkia',
	'ho-oh',
	'mr-mime',
	<s className="text-pink-900">pikachu</s>,
	<s className="text-pink-900">mewtwo</s>,
	'farfetchd',
	'nidoran-f',
	'porygon2',
	'flabebe',
	'type-null',
	'tapu-koko',
	'chien-pao',
	'castform'
]

export const rollingPathSpeciesNames: (string | JSX.Element)[] = rollingDomainSpeciesNames
	.with(
		0,
		<span>
			{'<'}
			pokemon-name
			<wbr />
			-or-
			<wbr />
			pokedex-number
			{'>'}
		</span>
	)
	.with(3, '122')
	.with(4, 'pikachu')
	.with(5, '150')
