import { ReactNode } from 'react'
import { useAppStore } from '../store/useAppStore'
import { Table } from './Table'
import { upperFirst } from 'lodash-es'
import { Heading } from './Heading'

export function SpeciesBreeding(): ReactNode {
	const species = useAppStore((state) => state.species)!

	return (
		<div className="flex-1">
			<Heading>Breeding</Heading>
			<Table>
				<tbody>
					<tr>
						<td>Egg Groups</td>
						<td>{species.eggGroupNames.map(upperFirst).join(', ')}</td>
					</tr>
					<tr>
						<td>Gender</td>
						<td>
							{species.genderRate === -1 && 'Genderless'}
							{species.genderRate >= 0 && (
								<>
									<span className="text-blue-600">
										{(1 - species.genderRate / 8) * 100}% male
									</span>
									{', '}
									<span className="text-pink-600">
										{(species.genderRate / 8) * 100}% female
									</span>
								</>
							)}
						</td>
					</tr>
					<tr>
						<td>Egg Cycles</td>
						<td>{species.hatchCounter}</td>
					</tr>
				</tbody>
			</Table>
		</div>
	)
}
