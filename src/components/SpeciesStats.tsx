import clsx from 'clsx'
import { ReactNode } from 'react'
import { useAppStore } from '../store/useAppStore'
import { AnimatedNumber } from './AnimatedNumber'
import { Heading } from './Heading'
import { Table } from './Table'

export function SpeciesStats(): ReactNode {
	const currentForm = useAppStore((state) => state.currentForm)!

	return (
		<div className="flex-1">
			<Heading>Base stats</Heading>
			<Table>
				<tbody>
					{currentForm.variety.stats.map((stat) => (
						<tr key={stat.stat.name}>
							<td>{stat.stat.text}</td>
							<td className="w-16 text-right">
								<AnimatedNumber value={stat.baseStat} />
							</td>
							<td>
								<div
									className={clsx(
										'h-4 rounded transition-[width] duration-500',
										stat.stat.bgClass
									)}
									style={{
										width: (stat.baseStat / 255) * 100 + '%'
									}}
								/>
							</td>
						</tr>
					))}
					<tr>
						<td>Total</td>
						<td className="w-0 text-right">
							<AnimatedNumber value={currentForm.variety.statsTotal} />
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
	)
}
