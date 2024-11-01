import { useRequest } from 'ahooks'
import axios from 'axios'
import { find, sumBy } from 'lodash-es'
import { Color, colors } from '../models/colors'
import { SpeciesData, speciesList } from '../models/speciesList'
import { Stat, stats } from '../models/stats'
import { Type, types } from '../models/types'

export interface Species {
	name: string
	speciesData: SpeciesData
	text: string
	color: Color
	eggGroupNames: string[]
	flavorText: string
	formSwitchable: boolean
	genderRate: number
	genusText: string
	hatchCounter: number
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
	name: string
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

async function getFormImageUrl(form: Form, varietyData: any, step: number): Promise<string> {
	return new Promise((resolve) => {
		let fileName: string = ''
		if (step <= 1) {
			fileName =
				form.isDefault && form.variety.isDefault
					? form.variety.species.name
					: step === 1
					? form.variety.name
					: form.name
			const imageNames = form.variety.species.speciesData.imageNames
			if (imageNames !== undefined) {
				if (imageNames[fileName]) {
					fileName = imageNames[fileName][step] ?? fileName
				}
			}
		}
		const image = new Image()
		image.onload = (): void => {
			resolve(image.src)
		}
		image.onerror = async (): Promise<void> => {
			switch (step) {
				case 0:
					resolve(await getFormImageUrl(form, varietyData, 1))
					break
				case 1:
				case 2:
					if (varietyData.forms.length === 1) {
						resolve(await getFormImageUrl(form, varietyData, step + 1))
					} else {
						resolve('')
					}
					break
				default:
					resolve('')
					break
			}
		}
		image.src = [
			`https://www.smogon.com/dex/media/sprites/xy/${fileName}.gif`,
			`https://play.pokemonshowdown.com/sprites/ani/${fileName}.gif`,
			varietyData.sprites.other?.showdown?.front_default,
			varietyData.sprites.front_default
		][step]
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
				speciesData: find(speciesList, { name: speciesName })!,
				text: findLangEnItemFromList(speciesData.names).name,
				color: colors[speciesData.color.name],
				eggGroupNames: Array.from(speciesData.egg_groups, (eggGroup: any) => eggGroup.name),
				flavorText: findLangEnItemFromList(
					speciesData.flavor_text_entries
				).flavor_text.replace(/\f/g, '\n'),
				formSwitchable: speciesData.forms_switchable,
				genderRate: speciesData.gender_rate,
				genusText: findLangEnItemFromList(speciesData.genera).genus,
				hatchCounter: speciesData.hatch_counter,
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
			if (species.speciesData.removedVarietyNames) {
				speciesData.varieties = (speciesData.varieties as any[]).filter((v: any) => {
					return !species.speciesData.removedVarietyNames?.includes(v.pokemon.name)
				})
			}
			species.varieties = await Promise.all(
				(speciesData.varieties as any[]).map(async (varietyItem: any) => {
					const varietyData = (await axios.get(varietyItem.pokemon.url)).data
					const variety: Variety = {
						name: varietyData.name,
						isDefault: varietyData.is_default,
						abilities: Array.from(varietyData.abilities, (ability: any) => ({
							name: ability.ability.name,
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
					variety.forms = await Promise.all(
						(varietyData.forms as any[]).map(async (formItem: any) => {
							const formData = (await axios.get(formItem.url)).data
							const form: Form = {
								name: formData.name,
								text: findLangEnItemFromList(formData.names)?.name || species.text,
								formName: formData.form_name || variety.name,
								formText:
									findLangEnItemFromList(formData.form_names)?.name ||
									species.text,
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
							form.imageUrl = await getFormImageUrl(form, varietyData, 0)
							return form
						})
					)
					return variety
				})
			)
			species.forms = species.varieties.flatMap((variety) => variety.forms)
			return species
		},
		{ manual: true }
	)
	return request
}
