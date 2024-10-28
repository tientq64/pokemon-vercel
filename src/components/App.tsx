import { useRequest } from 'ahooks'
import axios from 'axios'
import clsx from 'clsx'
import { upperFirst } from 'lodash-es'
import { ReactNode, useMemo } from 'react'
import { stats } from '../models/stats'
import { Table } from './Table'

export function App(): ReactNode {
	const name = useMemo<string>(() => {
		if (location.hostname.endsWith('.vercel.app')) {
			return location.hostname.split('.')[0]
		}
		return 'mr-mime'
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
		<div className="w-1/2 min-h-screen mx-auto px-16 bg-white text-gray-900">
			{pokemon.data && species.data && (
				<div className="flex flex-col gap-8 items-center">
					<h1 className="w-full p-4 border-b font-Skranji text-center text-5xl">
						{speciesName}
					</h1>

					<div className="flex gap-16 w-full">
						<div className="w-64 h-64">
							<img
								className="size-full object-contain image-pixelated"
								src={imageUrl}
								alt="Image"
							/>
						</div>
						<div className="flex-1">
							<Table>
								<tbody>
									<tr>
										<td>National No:</td>
										<td>{species.data.id.toString().padStart(4, '0')}</td>
									</tr>
									<tr>
										<td>Types:</td>
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
										<td>Height:</td>
										<td>{pokemon.data.height / 10} m</td>
									</tr>
									<tr>
										<td>Species:</td>
										<td>{generaName}</td>
									</tr>
									<tr>
										<td>Weight:</td>
										<td>{pokemon.data.weight / 10} kg</td>
									</tr>
									<tr>
										<td>Abilities:</td>
										<td>
											{pokemon.data.abilities.map((ability: any) => (
												<div
													key={ability.slot}
													className={clsx(ability.is_hidden && 'text-sm')}
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
								</tbody>
							</Table>
						</div>
					</div>

					<div className="w-full">
						<h2 className="pb-4 border-b font-bold text-4xl">Stats</h2>
						<Table>
							<tbody>
								{pokemon.data.stats.map((stat: any) => (
									<tr key={stat.stat.name}>
										<td>{upperFirst(stat.stat.name)}</td>
										<td className="w-0 !pr-6">{stat.base_stat}</td>
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
							</tbody>
						</Table>
					</div>
				</div>
			)}
		</div>
	)
}
