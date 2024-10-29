import { useRequest } from 'ahooks'
import axios from 'axios'
import clsx from 'clsx'
import { sumBy, upperFirst } from 'lodash-es'
import { ReactNode, useMemo } from 'react'
import { colors } from '../models/colors'
import { stats } from '../models/stats'
import { Table } from './Table'

export function App(): ReactNode {
	const name = useMemo<string>(() => {
		if (location.hostname.endsWith('.vercel.app')) {
			return location.hostname.split('.')[0]
		}
		return location.pathname.substring(1)
	}, [])

	const pokemon = useRequest(async () => {
		const url: string = `https://pokeapi.co/api/v2/pokemon/${name}`
		const result = await axios.get(url)
		return result.data
	})

	const species = useRequest(async () => {
		const url: string = `https://pokeapi.co/api/v2/pokemon-species/${name}`
		const result = await axios.get(url)
		return result.data
	})

	const speciesName = useMemo<string | undefined>(() => {
		return species.data?.names.find((v: any) => v.language.name === 'en')?.name
	}, [species.data])

	const generaName = useMemo<string | undefined>(() => {
		return species.data?.genera.find((v: any) => v.language.name === 'en')?.genus
	}, [species.data])

	const imageUrl = useMemo<string>(() => {
		const filename: string = name.replace(/-/g, '')
		return `https://play.pokemonshowdown.com/sprites/ani/${filename}.gif`
	}, [name])

	return (
		<div className="flex flex-col min-h-screen mx-auto text-gray-900">
			{pokemon.data && species.data && (
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
						{speciesName}
					</h1>
					<div className="flex-1 mt-8 px-4 md:px-16">
						<div className="flex flex-col md:flex-row gap-x-16 gap-y-8 items-center w-full">
							<div className="w-full md:w-96 h-64">
								<img
									className="size-full object-contain image-pixelated"
									src={imageUrl}
									alt="Image"
								/>
							</div>
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
															className="px-2 rounded bg-gray-200"
														>
															{upperFirst(type.type.name)}
														</div>
													))}
												</div>
											</td>
										</tr>
										<tr>
											<td>Species</td>
											<td>{generaName}</td>
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
					<footer className="w-full py-8 border-t text-center mt-8">
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
