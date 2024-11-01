import clsx from 'clsx'
import { AnimatePresence, Reorder } from 'framer-motion'
import { noop, upperFirst } from 'lodash-es'
import { ReactNode } from 'react'
import { useAppStore } from '../store/useAppStore'
import { AnimatedNumber } from './AnimatedNumber'
import { Heading } from './Heading'
import { Table } from './Table'
import { TypeBadge } from './TypeBadge'

export function SpeciesPokedexData(): ReactNode {
	const species = useAppStore((state) => state.species)!
	const currentForm = useAppStore((state) => state.currentForm)!

	return (
		<div className="flex-1">
			<Heading>Pokédex data</Heading>
			<Table>
				<tbody>
					<tr>
						<td>National No</td>
						<td>{species.nationalNo}</td>
					</tr>
					<tr>
						<td>Types</td>
						<td>
							<Reorder.Group
								className="flex items-center gap-2"
								axis="x"
								values={currentForm.types}
								onReorder={noop}
							>
								{currentForm.types.map((type) => (
									<Reorder.Item
										key={type.type.name}
										value={type}
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										exit={{ scale: 0 }}
									>
										<TypeBadge type={type.type} />
									</Reorder.Item>
								))}
							</Reorder.Group>
						</td>
					</tr>
					<tr>
						<td>Species</td>
						<td>{species.genusText}</td>
					</tr>
					<tr>
						<td>Height</td>
						<td>
							<AnimatedNumber
								value={currentForm.variety.height / 10}
								precision={1}
								fixedPrecision
							/>
							{' m'}
						</td>
					</tr>
					<tr>
						<td>Weight</td>
						<td>
							<AnimatedNumber
								value={currentForm.variety.weight / 10}
								precision={1}
								fixedPrecision
							/>
							{' kg'}
						</td>
					</tr>
					<tr>
						<td>Abilities</td>
						<td>
							{currentForm.variety.abilities.map((ability) => (
								<div className={clsx(ability.isHidden && 'text-sm')}>
									{upperFirst(ability.name)}
									{ability.isHidden && (
										<span className="text-gray-500"> (hidden ability)</span>
									)}
								</div>
							))}
						</td>
					</tr>
					<tr>
						<td>Pokédex Entry</td>
						<td>{species.flavorText}</td>
					</tr>
				</tbody>
			</Table>
		</div>
	)
}
