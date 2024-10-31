import { useRequest } from 'ahooks'
import axios from 'axios'
import { Color, colors } from '../models/colors'
import { Stat, stats } from '../models/stats'
import { Type, types } from '../models/types'
import { find, some, sum, sumBy, upperFirst } from 'lodash-es'

export interface Species {
	name: string
	text: string
	color: Color
	eggGroupNames: string[]
	flavorText: string
	formSwitchable: boolean
	genderRate: number
	genusText: string
	iconUrl: string
	id: number
	nationalNo: string
	isBaby: boolean
	isLegendary: boolean
	isMythical: boolean
	shapeName: string
	varieties: Variety[]
	forms: Form[]
}

export interface Variety {
	name: string
	isDefault: boolean
	abilities: VarietyAbility[]
	forms: Form[]
	species: Species
	stats: VarietyStat[]
	statsTotal: number
	types: VarietyType[]
	height: number
	weight: number
}

export interface VarietyAbility {
	abilityName: string
	isHidden: boolean
	slot: number
}

export interface VarietyStat {
	stat: Stat
	baseStat: number
	effort: number
}

export interface VarietyType {
	type: Type
	slot: number
}

export interface Form {
	name: string
	text: string
	formName: string
	formText: string
	isBattleOnly: boolean
	isDefault: boolean
	isMega: boolean
	types: VarietyType[]
	imageUrl: string
	variety: Variety
}

function findLangEnItemFromList(list: any[]): any {
	return find(list, ['language.name', 'en'])
}

async function getFormImageUrl(form: Form): Promise<string> {
	return new Promise((resolve) => {
		let fileName: string = form.variety.isDefault ? form.variety.species.name : form.name
		const image = new Image()
		image.onload = (): void => {
			resolve(image.src)
		}
		image.onerror = (): void => {
			image.src = `https://www.smogon.com/dex/media/sprites/xy/${fileName}.gif`
		}
		image.src = `https://play.pokemonshowdown.com/sprites/ani/${fileName}.gif`
	})
}

function getSpeciesIconUrl(species: Species): string {
	const filename: string = String(species.id).padStart(3, '0')
	return `https://www.serebii.net/pokedex-swsh/icon/${filename}.png`
}

export function useGetSpecies() {
	const request = useRequest(
		async (speciesName: string) => {
			const url: string = `https://pokeapi.co/api/v2/pokemon-species/${speciesName}`
			const speciesData = (await axios.get(url)).data
			const species: Species = {
				name: speciesName,
				text: findLangEnItemFromList(speciesData.names).name,
				color: colors[speciesData.color.name],
				eggGroupNames: Array.from(speciesData.egg_groups, (eggGroup: any) => eggGroup.name),
				flavorText: findLangEnItemFromList(speciesData.flavor_text_entries).flavor_text,
				formSwitchable: speciesData.forms_switchable,
				genderRate: speciesData.gender_rate,
				genusText: findLangEnItemFromList(speciesData.genera).genus,
				id: speciesData.id,
				nationalNo: String(speciesData.id).padStart(4, '0'),
				isBaby: speciesData.is_baby,
				isLegendary: speciesData.is_legendary,
				isMythical: speciesData.is_mythical,
				shapeName: speciesData.shape.name,
				iconUrl: '',
				varieties: [],
				forms: []
			}
			species.iconUrl = getSpeciesIconUrl(species)
			for (const varietyItem of speciesData.varieties) {
				const varietyData = (await axios.get(varietyItem.pokemon.url)).data
				const variety: Variety = {
					name: varietyData.name,
					isDefault: varietyData.is_default,
					abilities: Array.from(varietyData.abilities, (ability: any) => ({
						abilityName: ability.ability.name,
						isHidden: ability.is_hidden,
						slot: ability.slot
					})),
					stats: Array.from(varietyData.stats, (stat: any) => ({
						stat: stats[stat.stat.name],
						baseStat: stat.base_stat,
						effort: stat.effort
					})),
					statsTotal: sumBy(varietyData.stats, (stat: any) => {
						return stat.base_stat
					}),
					types: Array.from(varietyData.types, (type: any) => ({
						type: types[type.type.name],
						slot: type.slot
					})),
					height: varietyData.height,
					weight: varietyData.weight,
					forms: [],
					species
				}
				for (const formItem of varietyData.forms) {
					const formData = (await axios.get(formItem.url)).data
					const form: Form = {
						name: formData.name,
						text: findLangEnItemFromList(formData.names)?.name || species.text,
						formName: formData.form_name || variety.name,
						formText: findLangEnItemFromList(formData.form_names)?.name || species.text,
						isBattleOnly: formData.is_battle_only,
						isDefault: formData.is_default,
						isMega: formData.is_mega,
						types: Array.from(formData.types, (type: any) => ({
							type: types[type.type.name],
							slot: type.slot
						})),
						imageUrl: '',
						variety
					}
					form.imageUrl = await getFormImageUrl(form)
					variety.forms.push(form)
					species.forms.push(form)
				}
				species.varieties.push(variety)
			}
			return species
		},
		{ manual: true }
	)
	return request
}
