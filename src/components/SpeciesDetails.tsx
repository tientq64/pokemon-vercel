import { ReactNode } from 'react'
import { SpeciesBreeding } from './SpeciesBreeding'
import { SpeciesImages } from './SpeciesImages'
import { SpeciesPokedexData } from './SpeciesPokedexData'
import { SpeciesStats } from './SpeciesStats'

export function SpeciesDetails(): ReactNode {
	return (
		<div className="flex-1 px-4 md:px-16 mt-4">
			<div className="flex flex-col gap-8">
				<div className="flex flex-col md:!flex-row gap-8">
					<SpeciesImages />
					<SpeciesPokedexData />
					<SpeciesBreeding />
				</div>
				<div className="flex flex-col md:!flex-row gap-8">
					<SpeciesStats />
				</div>
			</div>
		</div>
	)
}
