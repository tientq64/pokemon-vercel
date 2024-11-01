export interface SpeciesData {
	name: string
	imageNames?: Record<string, [string, string] | [string] | [undefined, string]>
	removedVarietyNames?: string[]
}

export const speciesList: SpeciesData[] = [
	{
		name: 'bulbasaur'
	},
	{
		name: 'ivysaur'
	},
	{
		name: 'venusaur'
	},
	{
		name: 'charmander'
	},
	{
		name: 'charmeleon'
	},
	{
		name: 'charizard'
	},
	{
		name: 'squirtle'
	},
	{
		name: 'wartortle'
	},
	{
		name: 'blastoise'
	},
	{
		name: 'caterpie'
	},
	{
		name: 'metapod'
	},
	{
		name: 'butterfree'
	},
	{
		name: 'weedle'
	},
	{
		name: 'kakuna'
	},
	{
		name: 'beedrill'
	},
	{
		name: 'pidgey'
	},
	{
		name: 'pidgeotto'
	},
	{
		name: 'pidgeot'
	},
	{
		name: 'rattata'
	},
	{
		name: 'raticate'
	},
	{
		name: 'spearow'
	},
	{
		name: 'fearow'
	},
	{
		name: 'ekans'
	},
	{
		name: 'arbok'
	},
	{
		name: 'pikachu',
		imageNames: {
			'pikachu-original-cap': ['pikachu-original'],
			'pikachu-hoenn-cap': ['pikachu-hoenn'],
			'pikachu-sinnoh-cap': ['pikachu-sinnoh'],
			'pikachu-unova-cap': ['pikachu-unova'],
			'pikachu-kalos-cap': ['pikachu-kalos'],
			'pikachu-alola-cap': ['pikachu-alola'],
			'pikachu-partner-cap': ['pikachu-partner'],
			'pikachu-rock-star': ['pikachu-rockstar']
		},
		removedVarietyNames: ['pikachu-world-cap']
	},
	{
		name: 'raichu'
	},
	{
		name: 'sandshrew'
	},
	{
		name: 'sandslash'
	},
	{
		name: 'nidoran-f'
	},
	{
		name: 'nidorina'
	},
	{
		name: 'nidoqueen'
	},
	{
		name: 'nidoran-m'
	},
	{
		name: 'nidorino'
	},
	{
		name: 'nidoking'
	},
	{
		name: 'clefairy'
	},
	{
		name: 'clefable'
	},
	{
		name: 'vulpix'
	},
	{
		name: 'ninetales'
	},
	{
		name: 'jigglypuff'
	},
	{
		name: 'wigglytuff'
	},
	{
		name: 'zubat'
	},
	{
		name: 'golbat'
	},
	{
		name: 'oddish'
	},
	{
		name: 'gloom'
	},
	{
		name: 'vileplume'
	},
	{
		name: 'paras'
	},
	{
		name: 'parasect'
	},
	{
		name: 'venonat'
	},
	{
		name: 'venomoth'
	},
	{
		name: 'diglett'
	},
	{
		name: 'dugtrio'
	},
	{
		name: 'meowth'
	},
	{
		name: 'persian'
	},
	{
		name: 'psyduck'
	},
	{
		name: 'golduck'
	},
	{
		name: 'mankey'
	},
	{
		name: 'primeape'
	},
	{
		name: 'growlithe'
	},
	{
		name: 'arcanine'
	},
	{
		name: 'poliwag'
	},
	{
		name: 'poliwhirl'
	},
	{
		name: 'poliwrath'
	},
	{
		name: 'abra'
	},
	{
		name: 'kadabra'
	},
	{
		name: 'alakazam'
	},
	{
		name: 'machop'
	},
	{
		name: 'machoke'
	},
	{
		name: 'machamp'
	},
	{
		name: 'bellsprout'
	},
	{
		name: 'weepinbell'
	},
	{
		name: 'victreebel'
	},
	{
		name: 'tentacool'
	},
	{
		name: 'tentacruel'
	},
	{
		name: 'geodude'
	},
	{
		name: 'graveler'
	},
	{
		name: 'golem'
	},
	{
		name: 'ponyta'
	},
	{
		name: 'rapidash'
	},
	{
		name: 'slowpoke'
	},
	{
		name: 'slowbro'
	},
	{
		name: 'magnemite'
	},
	{
		name: 'magneton'
	},
	{
		name: 'farfetchd'
	},
	{
		name: 'doduo'
	},
	{
		name: 'dodrio'
	},
	{
		name: 'seel'
	},
	{
		name: 'dewgong'
	},
	{
		name: 'grimer'
	},
	{
		name: 'muk'
	},
	{
		name: 'shellder'
	},
	{
		name: 'cloyster'
	},
	{
		name: 'gastly'
	},
	{
		name: 'haunter'
	},
	{
		name: 'gengar'
	},
	{
		name: 'onix'
	},
	{
		name: 'drowzee'
	},
	{
		name: 'hypno'
	},
	{
		name: 'krabby'
	},
	{
		name: 'kingler'
	},
	{
		name: 'voltorb'
	},
	{
		name: 'electrode'
	},
	{
		name: 'exeggcute'
	},
	{
		name: 'exeggutor'
	},
	{
		name: 'cubone'
	},
	{
		name: 'marowak'
	},
	{
		name: 'hitmonlee'
	},
	{
		name: 'hitmonchan'
	},
	{
		name: 'lickitung'
	},
	{
		name: 'koffing'
	},
	{
		name: 'weezing'
	},
	{
		name: 'rhyhorn'
	},
	{
		name: 'rhydon'
	},
	{
		name: 'chansey'
	},
	{
		name: 'tangela'
	},
	{
		name: 'kangaskhan'
	},
	{
		name: 'horsea'
	},
	{
		name: 'seadra'
	},
	{
		name: 'goldeen'
	},
	{
		name: 'seaking'
	},
	{
		name: 'staryu'
	},
	{
		name: 'starmie'
	},
	{
		name: 'mr-mime',
		imageNames: {
			'mr-mime': ['mrmime']
		}
	},
	{
		name: 'scyther'
	},
	{
		name: 'jynx'
	},
	{
		name: 'electabuzz'
	},
	{
		name: 'magmar'
	},
	{
		name: 'pinsir'
	},
	{
		name: 'tauros'
	},
	{
		name: 'magikarp'
	},
	{
		name: 'gyarados'
	},
	{
		name: 'lapras'
	},
	{
		name: 'ditto'
	},
	{
		name: 'eevee'
	},
	{
		name: 'vaporeon'
	},
	{
		name: 'jolteon'
	},
	{
		name: 'flareon'
	},
	{
		name: 'porygon'
	},
	{
		name: 'omanyte'
	},
	{
		name: 'omastar'
	},
	{
		name: 'kabuto'
	},
	{
		name: 'kabutops'
	},
	{
		name: 'aerodactyl'
	},
	{
		name: 'snorlax'
	},
	{
		name: 'articuno'
	},
	{
		name: 'zapdos'
	},
	{
		name: 'moltres'
	},
	{
		name: 'dratini'
	},
	{
		name: 'dragonair'
	},
	{
		name: 'dragonite'
	},
	{
		name: 'mewtwo'
	},
	{
		name: 'mew'
	},
	{
		name: 'chikorita'
	},
	{
		name: 'bayleef'
	},
	{
		name: 'meganium'
	},
	{
		name: 'cyndaquil'
	},
	{
		name: 'quilava'
	},
	{
		name: 'typhlosion'
	},
	{
		name: 'totodile'
	},
	{
		name: 'croconaw'
	},
	{
		name: 'feraligatr'
	},
	{
		name: 'sentret'
	},
	{
		name: 'furret'
	},
	{
		name: 'hoothoot'
	},
	{
		name: 'noctowl'
	},
	{
		name: 'ledyba'
	},
	{
		name: 'ledian'
	},
	{
		name: 'spinarak'
	},
	{
		name: 'ariados'
	},
	{
		name: 'crobat'
	},
	{
		name: 'chinchou'
	},
	{
		name: 'lanturn'
	},
	{
		name: 'pichu'
	},
	{
		name: 'cleffa'
	},
	{
		name: 'igglybuff'
	},
	{
		name: 'togepi'
	},
	{
		name: 'togetic'
	},
	{
		name: 'natu'
	},
	{
		name: 'xatu'
	},
	{
		name: 'mareep'
	},
	{
		name: 'flaaffy'
	},
	{
		name: 'ampharos'
	},
	{
		name: 'bellossom'
	},
	{
		name: 'marill'
	},
	{
		name: 'azumarill'
	},
	{
		name: 'sudowoodo'
	},
	{
		name: 'politoed'
	},
	{
		name: 'hoppip'
	},
	{
		name: 'skiploom'
	},
	{
		name: 'jumpluff'
	},
	{
		name: 'aipom'
	},
	{
		name: 'sunkern'
	},
	{
		name: 'sunflora'
	},
	{
		name: 'yanma'
	},
	{
		name: 'wooper'
	},
	{
		name: 'quagsire'
	},
	{
		name: 'espeon'
	},
	{
		name: 'umbreon'
	},
	{
		name: 'murkrow'
	},
	{
		name: 'slowking'
	},
	{
		name: 'misdreavus'
	},
	{
		name: 'unown'
	},
	{
		name: 'wobbuffet'
	},
	{
		name: 'girafarig'
	},
	{
		name: 'pineco'
	},
	{
		name: 'forretress'
	},
	{
		name: 'dunsparce'
	},
	{
		name: 'gligar'
	},
	{
		name: 'steelix'
	},
	{
		name: 'snubbull'
	},
	{
		name: 'granbull'
	},
	{
		name: 'qwilfish'
	},
	{
		name: 'scizor'
	},
	{
		name: 'shuckle'
	},
	{
		name: 'heracross'
	},
	{
		name: 'sneasel'
	},
	{
		name: 'teddiursa'
	},
	{
		name: 'ursaring'
	},
	{
		name: 'slugma'
	},
	{
		name: 'magcargo'
	},
	{
		name: 'swinub'
	},
	{
		name: 'piloswine'
	},
	{
		name: 'corsola'
	},
	{
		name: 'remoraid'
	},
	{
		name: 'octillery'
	},
	{
		name: 'delibird'
	},
	{
		name: 'mantine'
	},
	{
		name: 'skarmory'
	},
	{
		name: 'houndour'
	},
	{
		name: 'houndoom'
	},
	{
		name: 'kingdra'
	},
	{
		name: 'phanpy'
	},
	{
		name: 'donphan'
	},
	{
		name: 'porygon2'
	},
	{
		name: 'stantler'
	},
	{
		name: 'smeargle'
	},
	{
		name: 'tyrogue'
	},
	{
		name: 'hitmontop'
	},
	{
		name: 'smoochum'
	},
	{
		name: 'elekid'
	},
	{
		name: 'magby'
	},
	{
		name: 'miltank'
	},
	{
		name: 'blissey'
	},
	{
		name: 'raikou'
	},
	{
		name: 'entei'
	},
	{
		name: 'suicune'
	},
	{
		name: 'larvitar'
	},
	{
		name: 'pupitar'
	},
	{
		name: 'tyranitar'
	},
	{
		name: 'lugia'
	},
	{
		name: 'ho-oh',
		imageNames: {
			'ho-oh': ['hooh']
		}
	},
	{
		name: 'celebi'
	},
	{
		name: 'treecko'
	},
	{
		name: 'grovyle'
	},
	{
		name: 'sceptile'
	},
	{
		name: 'torchic'
	},
	{
		name: 'combusken'
	},
	{
		name: 'blaziken'
	},
	{
		name: 'mudkip'
	},
	{
		name: 'marshtomp'
	},
	{
		name: 'swampert'
	},
	{
		name: 'poochyena'
	},
	{
		name: 'mightyena'
	},
	{
		name: 'zigzagoon'
	},
	{
		name: 'linoone'
	},
	{
		name: 'wurmple'
	},
	{
		name: 'silcoon'
	},
	{
		name: 'beautifly'
	},
	{
		name: 'cascoon'
	},
	{
		name: 'dustox'
	},
	{
		name: 'lotad'
	},
	{
		name: 'lombre'
	},
	{
		name: 'ludicolo'
	},
	{
		name: 'seedot'
	},
	{
		name: 'nuzleaf'
	},
	{
		name: 'shiftry'
	},
	{
		name: 'taillow'
	},
	{
		name: 'swellow'
	},
	{
		name: 'wingull'
	},
	{
		name: 'pelipper'
	},
	{
		name: 'ralts'
	},
	{
		name: 'kirlia'
	},
	{
		name: 'gardevoir'
	},
	{
		name: 'surskit'
	},
	{
		name: 'masquerain'
	},
	{
		name: 'shroomish'
	},
	{
		name: 'breloom'
	},
	{
		name: 'slakoth'
	},
	{
		name: 'vigoroth'
	},
	{
		name: 'slaking'
	},
	{
		name: 'nincada'
	},
	{
		name: 'ninjask'
	},
	{
		name: 'shedinja'
	},
	{
		name: 'whismur'
	},
	{
		name: 'loudred'
	},
	{
		name: 'exploud'
	},
	{
		name: 'makuhita'
	},
	{
		name: 'hariyama'
	},
	{
		name: 'azurill'
	},
	{
		name: 'nosepass'
	},
	{
		name: 'skitty'
	},
	{
		name: 'delcatty'
	},
	{
		name: 'sableye'
	},
	{
		name: 'mawile'
	},
	{
		name: 'aron'
	},
	{
		name: 'lairon'
	},
	{
		name: 'aggron'
	},
	{
		name: 'meditite'
	},
	{
		name: 'medicham'
	},
	{
		name: 'electrike'
	},
	{
		name: 'manectric'
	},
	{
		name: 'plusle'
	},
	{
		name: 'minun'
	},
	{
		name: 'volbeat'
	},
	{
		name: 'illumise'
	},
	{
		name: 'roselia'
	},
	{
		name: 'gulpin'
	},
	{
		name: 'swalot'
	},
	{
		name: 'carvanha'
	},
	{
		name: 'sharpedo'
	},
	{
		name: 'wailmer'
	},
	{
		name: 'wailord'
	},
	{
		name: 'numel'
	},
	{
		name: 'camerupt'
	},
	{
		name: 'torkoal'
	},
	{
		name: 'spoink'
	},
	{
		name: 'grumpig'
	},
	{
		name: 'spinda'
	},
	{
		name: 'trapinch'
	},
	{
		name: 'vibrava'
	},
	{
		name: 'flygon'
	},
	{
		name: 'cacnea'
	},
	{
		name: 'cacturne'
	},
	{
		name: 'swablu'
	},
	{
		name: 'altaria'
	},
	{
		name: 'zangoose'
	},
	{
		name: 'seviper'
	},
	{
		name: 'lunatone'
	},
	{
		name: 'solrock'
	},
	{
		name: 'barboach'
	},
	{
		name: 'whiscash'
	},
	{
		name: 'corphish'
	},
	{
		name: 'crawdaunt'
	},
	{
		name: 'baltoy'
	},
	{
		name: 'claydol'
	},
	{
		name: 'lileep'
	},
	{
		name: 'cradily'
	},
	{
		name: 'anorith'
	},
	{
		name: 'armaldo'
	},
	{
		name: 'feebas'
	},
	{
		name: 'milotic'
	},
	{
		name: 'castform'
	},
	{
		name: 'kecleon'
	},
	{
		name: 'shuppet'
	},
	{
		name: 'banette'
	},
	{
		name: 'duskull'
	},
	{
		name: 'dusclops'
	},
	{
		name: 'tropius'
	},
	{
		name: 'chimecho'
	},
	{
		name: 'absol'
	},
	{
		name: 'wynaut'
	},
	{
		name: 'snorunt'
	},
	{
		name: 'glalie'
	},
	{
		name: 'spheal'
	},
	{
		name: 'sealeo'
	},
	{
		name: 'walrein'
	},
	{
		name: 'clamperl'
	},
	{
		name: 'huntail'
	},
	{
		name: 'gorebyss'
	},
	{
		name: 'relicanth'
	},
	{
		name: 'luvdisc'
	},
	{
		name: 'bagon'
	},
	{
		name: 'shelgon'
	},
	{
		name: 'salamence'
	},
	{
		name: 'beldum'
	},
	{
		name: 'metang'
	},
	{
		name: 'metagross'
	},
	{
		name: 'regirock'
	},
	{
		name: 'regice'
	},
	{
		name: 'registeel'
	},
	{
		name: 'latias'
	},
	{
		name: 'latios'
	},
	{
		name: 'kyogre'
	},
	{
		name: 'groudon'
	},
	{
		name: 'rayquaza'
	},
	{
		name: 'jirachi'
	},
	{
		name: 'deoxys'
	},
	{
		name: 'turtwig'
	},
	{
		name: 'grotle'
	},
	{
		name: 'torterra'
	},
	{
		name: 'chimchar'
	},
	{
		name: 'monferno'
	},
	{
		name: 'infernape'
	},
	{
		name: 'piplup'
	},
	{
		name: 'prinplup'
	},
	{
		name: 'empoleon'
	},
	{
		name: 'starly'
	},
	{
		name: 'staravia'
	},
	{
		name: 'staraptor'
	},
	{
		name: 'bidoof'
	},
	{
		name: 'bibarel'
	},
	{
		name: 'kricketot'
	},
	{
		name: 'kricketune'
	},
	{
		name: 'shinx'
	},
	{
		name: 'luxio'
	},
	{
		name: 'luxray'
	},
	{
		name: 'budew'
	},
	{
		name: 'roserade'
	},
	{
		name: 'cranidos'
	},
	{
		name: 'rampardos'
	},
	{
		name: 'shieldon'
	},
	{
		name: 'bastiodon'
	},
	{
		name: 'burmy'
	},
	{
		name: 'wormadam'
	},
	{
		name: 'mothim'
	},
	{
		name: 'combee'
	},
	{
		name: 'vespiquen'
	},
	{
		name: 'pachirisu'
	},
	{
		name: 'buizel'
	},
	{
		name: 'floatzel'
	},
	{
		name: 'cherubi'
	},
	{
		name: 'cherrim'
	},
	{
		name: 'shellos'
	},
	{
		name: 'gastrodon'
	},
	{
		name: 'ambipom'
	},
	{
		name: 'drifloon'
	},
	{
		name: 'drifblim'
	},
	{
		name: 'buneary'
	},
	{
		name: 'lopunny'
	},
	{
		name: 'mismagius'
	},
	{
		name: 'honchkrow'
	},
	{
		name: 'glameow'
	},
	{
		name: 'purugly'
	},
	{
		name: 'chingling'
	},
	{
		name: 'stunky'
	},
	{
		name: 'skuntank'
	},
	{
		name: 'bronzor'
	},
	{
		name: 'bronzong'
	},
	{
		name: 'bonsly'
	},
	{
		name: 'mime-jr',
		imageNames: {
			'mime-jr': ['mimejr']
		}
	},
	{
		name: 'happiny'
	},
	{
		name: 'chatot'
	},
	{
		name: 'spiritomb'
	},
	{
		name: 'gible'
	},
	{
		name: 'gabite'
	},
	{
		name: 'garchomp'
	},
	{
		name: 'munchlax'
	},
	{
		name: 'riolu'
	},
	{
		name: 'lucario'
	},
	{
		name: 'hippopotas'
	},
	{
		name: 'hippowdon'
	},
	{
		name: 'skorupi'
	},
	{
		name: 'drapion'
	},
	{
		name: 'croagunk'
	},
	{
		name: 'toxicroak'
	},
	{
		name: 'carnivine'
	},
	{
		name: 'finneon'
	},
	{
		name: 'lumineon'
	},
	{
		name: 'mantyke'
	},
	{
		name: 'snover'
	},
	{
		name: 'abomasnow'
	},
	{
		name: 'weavile'
	},
	{
		name: 'magnezone'
	},
	{
		name: 'lickilicky'
	},
	{
		name: 'rhyperior'
	},
	{
		name: 'tangrowth'
	},
	{
		name: 'electivire'
	},
	{
		name: 'magmortar'
	},
	{
		name: 'togekiss'
	},
	{
		name: 'yanmega'
	},
	{
		name: 'leafeon'
	},
	{
		name: 'glaceon'
	},
	{
		name: 'gliscor'
	},
	{
		name: 'mamoswine'
	},
	{
		name: 'porygon-z'
	},
	{
		name: 'gallade'
	},
	{
		name: 'probopass'
	},
	{
		name: 'dusknoir'
	},
	{
		name: 'froslass'
	},
	{
		name: 'rotom'
	},
	{
		name: 'uxie'
	},
	{
		name: 'mesprit'
	},
	{
		name: 'azelf'
	},
	{
		name: 'dialga'
	},
	{
		name: 'palkia'
	},
	{
		name: 'heatran'
	},
	{
		name: 'regigigas'
	},
	{
		name: 'giratina'
	},
	{
		name: 'cresselia'
	},
	{
		name: 'phione'
	},
	{
		name: 'manaphy'
	},
	{
		name: 'darkrai'
	},
	{
		name: 'shaymin'
	},
	{
		name: 'arceus'
	},
	{
		name: 'victini'
	},
	{
		name: 'snivy'
	},
	{
		name: 'servine'
	},
	{
		name: 'serperior'
	},
	{
		name: 'tepig'
	},
	{
		name: 'pignite'
	},
	{
		name: 'emboar'
	},
	{
		name: 'oshawott'
	},
	{
		name: 'dewott'
	},
	{
		name: 'samurott'
	},
	{
		name: 'patrat'
	},
	{
		name: 'watchog'
	},
	{
		name: 'lillipup'
	},
	{
		name: 'herdier'
	},
	{
		name: 'stoutland'
	},
	{
		name: 'purrloin'
	},
	{
		name: 'liepard'
	},
	{
		name: 'pansage'
	},
	{
		name: 'simisage'
	},
	{
		name: 'pansear'
	},
	{
		name: 'simisear'
	},
	{
		name: 'panpour'
	},
	{
		name: 'simipour'
	},
	{
		name: 'munna'
	},
	{
		name: 'musharna'
	},
	{
		name: 'pidove'
	},
	{
		name: 'tranquill'
	},
	{
		name: 'unfezant'
	},
	{
		name: 'blitzle'
	},
	{
		name: 'zebstrika'
	},
	{
		name: 'roggenrola'
	},
	{
		name: 'boldore'
	},
	{
		name: 'gigalith'
	},
	{
		name: 'woobat'
	},
	{
		name: 'swoobat'
	},
	{
		name: 'drilbur'
	},
	{
		name: 'excadrill'
	},
	{
		name: 'audino'
	},
	{
		name: 'timburr'
	},
	{
		name: 'gurdurr'
	},
	{
		name: 'conkeldurr'
	},
	{
		name: 'tympole'
	},
	{
		name: 'palpitoad'
	},
	{
		name: 'seismitoad'
	},
	{
		name: 'throh'
	},
	{
		name: 'sawk'
	},
	{
		name: 'sewaddle'
	},
	{
		name: 'swadloon'
	},
	{
		name: 'leavanny'
	},
	{
		name: 'venipede'
	},
	{
		name: 'whirlipede'
	},
	{
		name: 'scolipede'
	},
	{
		name: 'cottonee'
	},
	{
		name: 'whimsicott'
	},
	{
		name: 'petilil'
	},
	{
		name: 'lilligant'
	},
	{
		name: 'basculin'
	},
	{
		name: 'sandile'
	},
	{
		name: 'krokorok'
	},
	{
		name: 'krookodile'
	},
	{
		name: 'darumaka'
	},
	{
		name: 'darmanitan',
		imageNames: {
			'darmanitan-standard': ['darmanitan', 'darmanitan'],
			'darmanitan-galar-standard': ['darmanitan-galar', 'darmanitan-galar'],
			'darmanitan-galar-zen': ['darmanitan-galarzen']
		}
	},
	{
		name: 'maractus'
	},
	{
		name: 'dwebble'
	},
	{
		name: 'crustle'
	},
	{
		name: 'scraggy'
	},
	{
		name: 'scrafty'
	},
	{
		name: 'sigilyph'
	},
	{
		name: 'yamask'
	},
	{
		name: 'cofagrigus'
	},
	{
		name: 'tirtouga'
	},
	{
		name: 'carracosta'
	},
	{
		name: 'archen'
	},
	{
		name: 'archeops'
	},
	{
		name: 'trubbish'
	},
	{
		name: 'garbodor'
	},
	{
		name: 'zorua'
	},
	{
		name: 'zoroark'
	},
	{
		name: 'minccino'
	},
	{
		name: 'cinccino'
	},
	{
		name: 'gothita'
	},
	{
		name: 'gothorita'
	},
	{
		name: 'gothitelle'
	},
	{
		name: 'solosis'
	},
	{
		name: 'duosion'
	},
	{
		name: 'reuniclus'
	},
	{
		name: 'ducklett'
	},
	{
		name: 'swanna'
	},
	{
		name: 'vanillite'
	},
	{
		name: 'vanillish'
	},
	{
		name: 'vanilluxe'
	},
	{
		name: 'deerling'
	},
	{
		name: 'sawsbuck'
	},
	{
		name: 'emolga'
	},
	{
		name: 'karrablast'
	},
	{
		name: 'escavalier'
	},
	{
		name: 'foongus'
	},
	{
		name: 'amoonguss'
	},
	{
		name: 'frillish'
	},
	{
		name: 'jellicent'
	},
	{
		name: 'alomomola'
	},
	{
		name: 'joltik'
	},
	{
		name: 'galvantula'
	},
	{
		name: 'ferroseed'
	},
	{
		name: 'ferrothorn'
	},
	{
		name: 'klink'
	},
	{
		name: 'klang'
	},
	{
		name: 'klinklang'
	},
	{
		name: 'tynamo'
	},
	{
		name: 'eelektrik'
	},
	{
		name: 'eelektross'
	},
	{
		name: 'elgyem'
	},
	{
		name: 'beheeyem'
	},
	{
		name: 'litwick'
	},
	{
		name: 'lampent'
	},
	{
		name: 'chandelure'
	},
	{
		name: 'axew'
	},
	{
		name: 'fraxure'
	},
	{
		name: 'haxorus'
	},
	{
		name: 'cubchoo'
	},
	{
		name: 'beartic'
	},
	{
		name: 'cryogonal'
	},
	{
		name: 'shelmet'
	},
	{
		name: 'accelgor'
	},
	{
		name: 'stunfisk'
	},
	{
		name: 'mienfoo'
	},
	{
		name: 'mienshao'
	},
	{
		name: 'druddigon'
	},
	{
		name: 'golett'
	},
	{
		name: 'golurk'
	},
	{
		name: 'pawniard'
	},
	{
		name: 'bisharp'
	},
	{
		name: 'bouffalant'
	},
	{
		name: 'rufflet'
	},
	{
		name: 'braviary'
	},
	{
		name: 'vullaby'
	},
	{
		name: 'mandibuzz'
	},
	{
		name: 'heatmor'
	},
	{
		name: 'durant'
	},
	{
		name: 'deino'
	},
	{
		name: 'zweilous'
	},
	{
		name: 'hydreigon'
	},
	{
		name: 'larvesta'
	},
	{
		name: 'volcarona'
	},
	{
		name: 'cobalion'
	},
	{
		name: 'terrakion'
	},
	{
		name: 'virizion'
	},
	{
		name: 'tornadus'
	},
	{
		name: 'thundurus'
	},
	{
		name: 'reshiram'
	},
	{
		name: 'zekrom'
	},
	{
		name: 'landorus'
	},
	{
		name: 'kyurem'
	},
	{
		name: 'keldeo'
	},
	{
		name: 'meloetta'
	},
	{
		name: 'genesect'
	},
	{
		name: 'chespin'
	},
	{
		name: 'quilladin'
	},
	{
		name: 'chesnaught'
	},
	{
		name: 'fennekin'
	},
	{
		name: 'braixen'
	},
	{
		name: 'delphox'
	},
	{
		name: 'froakie'
	},
	{
		name: 'frogadier'
	},
	{
		name: 'greninja',
		removedVarietyNames: ['greninja-battle-bond']
	},
	{
		name: 'bunnelby'
	},
	{
		name: 'diggersby'
	},
	{
		name: 'fletchling'
	},
	{
		name: 'fletchinder'
	},
	{
		name: 'talonflame'
	},
	{
		name: 'scatterbug'
	},
	{
		name: 'spewpa'
	},
	{
		name: 'vivillon'
	},
	{
		name: 'litleo'
	},
	{
		name: 'pyroar'
	},
	{
		name: 'flabebe'
	},
	{
		name: 'floette'
	},
	{
		name: 'florges'
	},
	{
		name: 'skiddo'
	},
	{
		name: 'gogoat'
	},
	{
		name: 'pancham'
	},
	{
		name: 'pangoro'
	},
	{
		name: 'furfrou'
	},
	{
		name: 'espurr'
	},
	{
		name: 'meowstic'
	},
	{
		name: 'honedge'
	},
	{
		name: 'doublade'
	},
	{
		name: 'aegislash'
	},
	{
		name: 'spritzee'
	},
	{
		name: 'aromatisse'
	},
	{
		name: 'swirlix'
	},
	{
		name: 'slurpuff'
	},
	{
		name: 'inkay'
	},
	{
		name: 'malamar'
	},
	{
		name: 'binacle'
	},
	{
		name: 'barbaracle'
	},
	{
		name: 'skrelp'
	},
	{
		name: 'dragalge'
	},
	{
		name: 'clauncher'
	},
	{
		name: 'clawitzer'
	},
	{
		name: 'helioptile'
	},
	{
		name: 'heliolisk'
	},
	{
		name: 'tyrunt'
	},
	{
		name: 'tyrantrum'
	},
	{
		name: 'amaura'
	},
	{
		name: 'aurorus'
	},
	{
		name: 'sylveon'
	},
	{
		name: 'hawlucha'
	},
	{
		name: 'dedenne'
	},
	{
		name: 'carbink'
	},
	{
		name: 'goomy'
	},
	{
		name: 'sliggoo'
	},
	{
		name: 'goodra'
	},
	{
		name: 'klefki'
	},
	{
		name: 'phantump'
	},
	{
		name: 'trevenant'
	},
	{
		name: 'pumpkaboo'
	},
	{
		name: 'gourgeist'
	},
	{
		name: 'bergmite'
	},
	{
		name: 'avalugg'
	},
	{
		name: 'noibat'
	},
	{
		name: 'noivern'
	},
	{
		name: 'xerneas'
	},
	{
		name: 'yveltal'
	},
	{
		name: 'zygarde',
		removedVarietyNames: ['zygarde-10-power-construct', 'zygarde-50-power-construct']
	},
	{
		name: 'diancie'
	},
	{
		name: 'hoopa'
	},
	{
		name: 'volcanion'
	},
	{
		name: 'rowlet'
	},
	{
		name: 'dartrix'
	},
	{
		name: 'decidueye'
	},
	{
		name: 'litten'
	},
	{
		name: 'torracat'
	},
	{
		name: 'incineroar'
	},
	{
		name: 'popplio'
	},
	{
		name: 'brionne'
	},
	{
		name: 'primarina'
	},
	{
		name: 'pikipek'
	},
	{
		name: 'trumbeak'
	},
	{
		name: 'toucannon'
	},
	{
		name: 'yungoos'
	},
	{
		name: 'gumshoos'
	},
	{
		name: 'grubbin'
	},
	{
		name: 'charjabug'
	},
	{
		name: 'vikavolt'
	},
	{
		name: 'crabrawler'
	},
	{
		name: 'crabominable'
	},
	{
		name: 'oricorio'
	},
	{
		name: 'cutiefly'
	},
	{
		name: 'ribombee'
	},
	{
		name: 'rockruff'
	},
	{
		name: 'lycanroc'
	},
	{
		name: 'wishiwashi'
	},
	{
		name: 'mareanie'
	},
	{
		name: 'toxapex'
	},
	{
		name: 'mudbray'
	},
	{
		name: 'mudsdale'
	},
	{
		name: 'dewpider'
	},
	{
		name: 'araquanid'
	},
	{
		name: 'fomantis'
	},
	{
		name: 'lurantis'
	},
	{
		name: 'morelull'
	},
	{
		name: 'shiinotic'
	},
	{
		name: 'salandit'
	},
	{
		name: 'salazzle'
	},
	{
		name: 'stufful'
	},
	{
		name: 'bewear'
	},
	{
		name: 'bounsweet'
	},
	{
		name: 'steenee'
	},
	{
		name: 'tsareena'
	},
	{
		name: 'comfey'
	},
	{
		name: 'oranguru'
	},
	{
		name: 'passimian'
	},
	{
		name: 'wimpod'
	},
	{
		name: 'golisopod'
	},
	{
		name: 'sandygast'
	},
	{
		name: 'palossand'
	},
	{
		name: 'pyukumuku'
	},
	{
		name: 'type-null'
	},
	{
		name: 'silvally'
	},
	{
		name: 'minior'
	},
	{
		name: 'komala'
	},
	{
		name: 'turtonator'
	},
	{
		name: 'togedemaru'
	},
	{
		name: 'mimikyu'
	},
	{
		name: 'bruxish'
	},
	{
		name: 'drampa'
	},
	{
		name: 'dhelmise'
	},
	{
		name: 'jangmo-o',
		imageNames: {
			'jangmo-o': ['jangmoo']
		}
	},
	{
		name: 'hakamo-o',
		imageNames: {
			'hakamo-o': ['hakamoo']
		}
	},
	{
		name: 'kommo-o',
		imageNames: {
			'kommo-o': ['kommoo']
		}
	},
	{
		name: 'tapu-koko'
	},
	{
		name: 'tapu-lele'
	},
	{
		name: 'tapu-bulu'
	},
	{
		name: 'tapu-fini'
	},
	{
		name: 'cosmog'
	},
	{
		name: 'cosmoem'
	},
	{
		name: 'solgaleo'
	},
	{
		name: 'lunala'
	},
	{
		name: 'nihilego'
	},
	{
		name: 'buzzwole'
	},
	{
		name: 'pheromosa'
	},
	{
		name: 'xurkitree'
	},
	{
		name: 'celesteela'
	},
	{
		name: 'kartana'
	},
	{
		name: 'guzzlord'
	},
	{
		name: 'necrozma',
		imageNames: {
			'necrozma-dusk': ['necrozma-duskmane'],
			'necrozma-dawn': ['necrozma-dawnwings']
		}
	},
	{
		name: 'magearna'
	},
	{
		name: 'marshadow'
	},
	{
		name: 'poipole'
	},
	{
		name: 'naganadel'
	},
	{
		name: 'stakataka'
	},
	{
		name: 'blacephalon'
	},
	{
		name: 'zeraora'
	},
	{
		name: 'meltan'
	},
	{
		name: 'melmetal'
	},
	{
		name: 'grookey'
	},
	{
		name: 'thwackey'
	},
	{
		name: 'rillaboom'
	},
	{
		name: 'scorbunny'
	},
	{
		name: 'raboot'
	},
	{
		name: 'cinderace'
	},
	{
		name: 'sobble'
	},
	{
		name: 'drizzile'
	},
	{
		name: 'inteleon'
	},
	{
		name: 'skwovet'
	},
	{
		name: 'greedent'
	},
	{
		name: 'rookidee'
	},
	{
		name: 'corvisquire'
	},
	{
		name: 'corviknight'
	},
	{
		name: 'blipbug'
	},
	{
		name: 'dottler'
	},
	{
		name: 'orbeetle'
	},
	{
		name: 'nickit'
	},
	{
		name: 'thievul'
	},
	{
		name: 'gossifleur'
	},
	{
		name: 'eldegoss'
	},
	{
		name: 'wooloo'
	},
	{
		name: 'dubwool'
	},
	{
		name: 'chewtle'
	},
	{
		name: 'drednaw'
	},
	{
		name: 'yamper'
	},
	{
		name: 'boltund'
	},
	{
		name: 'rolycoly'
	},
	{
		name: 'carkol'
	},
	{
		name: 'coalossal'
	},
	{
		name: 'applin'
	},
	{
		name: 'flapple'
	},
	{
		name: 'appletun'
	},
	{
		name: 'silicobra'
	},
	{
		name: 'sandaconda'
	},
	{
		name: 'cramorant'
	},
	{
		name: 'arrokuda'
	},
	{
		name: 'barraskewda'
	},
	{
		name: 'toxel'
	},
	{
		name: 'toxtricity'
	},
	{
		name: 'sizzlipede'
	},
	{
		name: 'centiskorch'
	},
	{
		name: 'clobbopus'
	},
	{
		name: 'grapploct'
	},
	{
		name: 'sinistea'
	},
	{
		name: 'polteageist'
	},
	{
		name: 'hatenna'
	},
	{
		name: 'hattrem'
	},
	{
		name: 'hatterene'
	},
	{
		name: 'impidimp'
	},
	{
		name: 'morgrem'
	},
	{
		name: 'grimmsnarl'
	},
	{
		name: 'obstagoon'
	},
	{
		name: 'perrserker'
	},
	{
		name: 'cursola'
	},
	{
		name: 'sirfetchd'
	},
	{
		name: 'mr-rime'
	},
	{
		name: 'runerigus'
	},
	{
		name: 'milcery'
	},
	{
		name: 'alcremie'
	},
	{
		name: 'falinks'
	},
	{
		name: 'pincurchin'
	},
	{
		name: 'snom'
	},
	{
		name: 'frosmoth'
	},
	{
		name: 'stonjourner'
	},
	{
		name: 'eiscue'
	},
	{
		name: 'indeedee'
	},
	{
		name: 'morpeko'
	},
	{
		name: 'cufant'
	},
	{
		name: 'copperajah'
	},
	{
		name: 'dracozolt'
	},
	{
		name: 'arctozolt'
	},
	{
		name: 'dracovish'
	},
	{
		name: 'arctovish'
	},
	{
		name: 'duraludon'
	},
	{
		name: 'dreepy'
	},
	{
		name: 'drakloak'
	},
	{
		name: 'dragapult'
	},
	{
		name: 'zacian'
	},
	{
		name: 'zamazenta'
	},
	{
		name: 'eternatus'
	},
	{
		name: 'kubfu'
	},
	{
		name: 'urshifu'
	},
	{
		name: 'zarude'
	},
	{
		name: 'regieleki'
	},
	{
		name: 'regidrago'
	},
	{
		name: 'glastrier'
	},
	{
		name: 'spectrier'
	},
	{
		name: 'calyrex'
	},
	{
		name: 'wyrdeer'
	},
	{
		name: 'kleavor'
	},
	{
		name: 'ursaluna'
	},
	{
		name: 'basculegion'
	},
	{
		name: 'sneasler'
	},
	{
		name: 'overqwil'
	},
	{
		name: 'enamorus'
	},
	{
		name: 'sprigatito'
	},
	{
		name: 'floragato'
	},
	{
		name: 'meowscarada'
	},
	{
		name: 'fuecoco'
	},
	{
		name: 'crocalor'
	},
	{
		name: 'skeledirge'
	},
	{
		name: 'quaxly'
	},
	{
		name: 'quaxwell'
	},
	{
		name: 'quaquaval'
	},
	{
		name: 'lechonk'
	},
	{
		name: 'oinkologne'
	},
	{
		name: 'tarountula'
	},
	{
		name: 'spidops'
	},
	{
		name: 'nymble'
	},
	{
		name: 'lokix'
	},
	{
		name: 'pawmi'
	},
	{
		name: 'pawmo'
	},
	{
		name: 'pawmot'
	},
	{
		name: 'tandemaus'
	},
	{
		name: 'maushold'
	},
	{
		name: 'fidough'
	},
	{
		name: 'dachsbun'
	},
	{
		name: 'smoliv'
	},
	{
		name: 'dolliv'
	},
	{
		name: 'arboliva'
	},
	{
		name: 'squawkabilly'
	},
	{
		name: 'nacli'
	},
	{
		name: 'naclstack'
	},
	{
		name: 'garganacl'
	},
	{
		name: 'charcadet'
	},
	{
		name: 'armarouge'
	},
	{
		name: 'ceruledge'
	},
	{
		name: 'tadbulb'
	},
	{
		name: 'bellibolt'
	},
	{
		name: 'wattrel'
	},
	{
		name: 'kilowattrel'
	},
	{
		name: 'maschiff'
	},
	{
		name: 'mabosstiff'
	},
	{
		name: 'shroodle'
	},
	{
		name: 'grafaiai'
	},
	{
		name: 'bramblin'
	},
	{
		name: 'brambleghast'
	},
	{
		name: 'toedscool'
	},
	{
		name: 'toedscruel'
	},
	{
		name: 'klawf'
	},
	{
		name: 'capsakid'
	},
	{
		name: 'scovillain'
	},
	{
		name: 'rellor'
	},
	{
		name: 'rabsca'
	},
	{
		name: 'flittle'
	},
	{
		name: 'espathra'
	},
	{
		name: 'tinkatink'
	},
	{
		name: 'tinkatuff'
	},
	{
		name: 'tinkaton'
	},
	{
		name: 'wiglett'
	},
	{
		name: 'wugtrio'
	},
	{
		name: 'bombirdier'
	},
	{
		name: 'finizen'
	},
	{
		name: 'palafin'
	},
	{
		name: 'varoom'
	},
	{
		name: 'revavroom'
	},
	{
		name: 'cyclizar'
	},
	{
		name: 'orthworm'
	},
	{
		name: 'glimmet'
	},
	{
		name: 'glimmora'
	},
	{
		name: 'greavard'
	},
	{
		name: 'houndstone'
	},
	{
		name: 'flamigo'
	},
	{
		name: 'cetoddle'
	},
	{
		name: 'cetitan'
	},
	{
		name: 'veluza'
	},
	{
		name: 'dondozo'
	},
	{
		name: 'tatsugiri'
	},
	{
		name: 'annihilape'
	},
	{
		name: 'clodsire'
	},
	{
		name: 'farigiraf'
	},
	{
		name: 'dudunsparce'
	},
	{
		name: 'kingambit'
	},
	{
		name: 'great-tusk'
	},
	{
		name: 'scream-tail'
	},
	{
		name: 'brute-bonnet'
	},
	{
		name: 'flutter-mane'
	},
	{
		name: 'slither-wing'
	},
	{
		name: 'sandy-shocks'
	},
	{
		name: 'iron-treads'
	},
	{
		name: 'iron-bundle'
	},
	{
		name: 'iron-hands'
	},
	{
		name: 'iron-jugulis'
	},
	{
		name: 'iron-moth'
	},
	{
		name: 'iron-thorns'
	},
	{
		name: 'frigibax'
	},
	{
		name: 'arctibax'
	},
	{
		name: 'baxcalibur'
	},
	{
		name: 'gimmighoul'
	},
	{
		name: 'gholdengo'
	},
	{
		name: 'wo-chien'
	},
	{
		name: 'chien-pao'
	},
	{
		name: 'ting-lu'
	},
	{
		name: 'chi-yu'
	},
	{
		name: 'roaring-moon'
	},
	{
		name: 'iron-valiant'
	},
	{
		name: 'koraidon'
	},
	{
		name: 'miraidon'
	},
	{
		name: 'walking-wake'
	},
	{
		name: 'iron-leaves'
	},
	{
		name: 'dipplin'
	},
	{
		name: 'poltchageist'
	},
	{
		name: 'sinistcha'
	},
	{
		name: 'okidogi'
	},
	{
		name: 'munkidori'
	},
	{
		name: 'fezandipiti'
	},
	{
		name: 'ogerpon'
	},
	{
		name: 'archaludon'
	},
	{
		name: 'hydrapple'
	},
	{
		name: 'gouging-fire'
	},
	{
		name: 'raging-bolt'
	},
	{
		name: 'iron-boulder'
	},
	{
		name: 'iron-crown'
	},
	{
		name: 'terapagos'
	},
	{
		name: 'pecharunt'
	}
]
