import { useFavicon, useRequest, useTitle } from 'ahooks'
import axios from 'axios'
import clsx from 'clsx'
import { sumBy, upperFirst } from 'lodash-es'
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import TextLoop from 'react-text-loop'
import { getVarietyImageUrl } from '../helpers/getVarietyImageUrl'
import { colors } from '../models/colors'
import { rollingDomainSpeciesNames, rollingPathSpeciesNames } from '../models/rollingTexts'
import { speciesNames } from '../models/speciesNames'
import { stats } from '../models/stats'
import { types } from '../models/types'
import { vercelDomainNames } from '../models/vercelDomainNames'
import { Table } from './Table'

export function App(): ReactNode {
	const [imageLoadFailed, setImageLoadFailed] = useState<boolean>(false)

	const speciesName = useMemo<string>(() => {
		let name: string
		if (location.hostname.endsWith('.vercel.app')) {
			name = location.hostname.split('.')[0]
			if (speciesNames.includes(name)) {
				return name
			}
		}
		name = location.pathname.substring(1)
		if (/^\d{1,4}$/.test(name)) {
			const nationalNo: number = Number(name)
			name = speciesNames.at(nationalNo - 1) ?? ''
		}
		return name
	}, [])

	const species = useRequest(
		async () => {
			const url: string = `https://pokeapi.co/api/v2/pokemon-species/${speciesName}`
			const result = await axios.get(url)
			const variety = result.data.varieties.find((v: any) => v.is_default)
			const varietyName: string = variety.pokemon.name
			await pokemon.runAsync(varietyName)
			return result.data
		},
		{ manual: true }
	)

	const pokemon = useRequest(
		async (varietyName: string) => {
			const url: string = `https://pokeapi.co/api/v2/pokemon/${varietyName}`
			const result = await axios.get(url)
			return result.data
		},
		{ manual: true }
	)

	const speciesText = useMemo<string | undefined>(() => {
		return species.data?.names.find((v: any) => v.language.name === 'en')?.name
	}, [species.data])

	const genusName = useMemo<string | undefined>(() => {
		return species.data?.genera.find((v: any) => v.language.name === 'en')?.genus
	}, [species.data])

	const iconUrl = useMemo<string>(() => {
		if (species.data == null) {
			return ''
		}
		const filename: string = species.data.id.toString().padStart(3, '0')
		return `https://www.serebii.net/pokedex-swsh/icon/${filename}.png`
	}, [species.data])

	const handleImageError = useCallback((): void => {
		setImageLoadFailed(true)
	}, [])

	useTitle(speciesText ?? 'Pokémon')
	useFavicon(iconUrl)

	useEffect(() => {
		if (speciesName === '') return
		species.run()
		return species.cancel
	}, [speciesName])

	return (
		<div className="flex flex-col min-h-screen text-gray-900">
			{(speciesName === '' || species.error) && (
				<div className="flex-1 flex flex-col justify-center items-center px-4 md:px-16 text-center bg-gray-100">
					<div className="my-4 font-Skranji text-4xl text-gray-700">
						<TextLoop className="text-pink-600">{rollingDomainSpeciesNames}</TextLoop>
						.vercel.app
					</div>
					<div className="uppercase text-xl text-gray-500">or</div>
					<div className="my-4 font-Skranji text-4xl text-gray-700">
						<TextLoop className="text-teal-600">{vercelDomainNames}</TextLoop>
						.vercel.app/
						<TextLoop className="text-pink-600">{rollingPathSpeciesNames}</TextLoop>
					</div>
					<div className="text-xl text-gray-500">to go to any Pokémon</div>
				</div>
			)}
			{species.loading && (
				<div className="flex-1 flex flex-col justify-center items-center bg-gray-100">
					<div className="font-Skranji text-4xl text-gray-600">Loading...</div>
				</div>
			)}
			{species.data && (
				<div
					className={clsx(
						'flex-1 flex flex-col bg-gradient-to-b',
						colors[species.data.color.name].gradientClass
					)}
				>
					<h1
						className={clsx(
							'w-full p-4 font-Skranji text-center text-5xl',
							colors[species.data.color.name].nameClass
						)}
					>
						{speciesText}
					</h1>
					<div className="flex-1 mt-8 px-4 md:px-16">
						<div className="flex flex-col md:flex-row gap-x-16 gap-y-8 items-center w-full">
							{species.data.varieties.length === 1 && (
								<div className="w-full md:w-96 h-64">
									<img
										className="w-full md:w-96 h-64 object-contain image-pixelated"
										src={getVarietyImageUrl(
											speciesName,
											speciesName,
											true,
											imageLoadFailed
										)}
										alt="Image"
										onError={handleImageError}
									/>
								</div>
							)}
							{species.data.varieties.length > 1 && (
								<TextLoop
									className="w-full md:w-96 h-64"
									springConfig={{
										damping: 10,
										stiffness: 100
									}}
								>
									{species.data.varieties.map((variety: any) => (
										<img
											key={variety.pokemon.name}
											className="w-full md:w-96 h-64 object-contain image-pixelated"
											src={getVarietyImageUrl(
												speciesName,
												variety.pokemon.name,
												variety.is_default,
												imageLoadFailed
											)}
											loading="eager"
											alt="Image"
											onError={handleImageError}
										/>
									))}
								</TextLoop>
							)}
							<div className="flex-1 w-full md:w-auto">
								<Table>
									<tbody>
										<tr>
											<td>National No</td>
											<td>{species.data.id.toString().padStart(4, '0')}</td>
										</tr>
										<tr>
											<td>Types</td>
											<td>
												<div className="flex gap-2">
													{pokemon.data.types.map((type: any) => (
														<div
															key={type.slot}
															className="px-2 rounded text-white"
															style={{
																backgroundColor:
																	types[type.type.name].color
															}}
														>
															{types[type.type.name].text}
														</div>
													))}
												</div>
											</td>
										</tr>
										<tr>
											<td>Species</td>
											<td>{genusName}</td>
										</tr>
										<tr>
											<td>Height</td>
											<td>{pokemon.data.height / 10} m</td>
										</tr>
										<tr>
											<td>Weight</td>
											<td>{pokemon.data.weight / 10} kg</td>
										</tr>
										<tr>
											<td>Abilities</td>
											<td>
												{pokemon.data.abilities.map((ability: any) => (
													<div
														key={ability.slot}
														className={clsx(
															ability.is_hidden && 'text-sm'
														)}
													>
														{upperFirst(ability.ability.name)}
														{ability.is_hidden && (
															<span className="ml-1 text-gray-500">
																(hidden ability)
															</span>
														)}
													</div>
												))}
											</td>
										</tr>
										<tr>
											<td>Egg groups</td>
											<td>
												{species.data.egg_groups
													.map((eggGroup: any) =>
														upperFirst(eggGroup.name)
													)
													.join(', ')}
											</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</div>
						<div className="w-full">
							<h2 className="py-4 border-b font-bold text-4xl">Stats</h2>
							<Table>
								<tbody>
									{pokemon.data.stats.map((stat: any) => (
										<tr key={stat.stat.name}>
											<td>{stats[stat.stat.name].text}</td>
											<td className="w-0 !pr-6 text-right">
												{stat.base_stat}
											</td>
											<td>
												<div
													className={clsx(
														'h-4 rounded',
														stats[stat.stat.name].colorClass
													)}
													style={{
														width: (stat.base_stat / 255) * 100 + '%'
													}}
												/>
											</td>
										</tr>
									))}
									<tr>
										<td>Total</td>
										<td className="w-0 !pr-6 text-right">
											{sumBy(pokemon.data.stats, (v: any) => v.base_stat)}
										</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</div>
					<footer className="w-full py-8 border-t text-center mt-8 bg-gray-100">
						Degisned by{' '}
						<a
							className="text-sky-600 hover:underline decoration-dotted underline-offset-2"
							href="https://github.com/tientq64"
							target="_blank"
						>
							tientq64
						</a>
					</footer>
				</div>
			)}
		</div>
	)
}
