import { ReactNode } from 'react'
import TextLoop from 'react-text-loop'
import { rollingDomainSpeciesNames, rollingPathSpeciesNames } from '../models/rollingTexts'
import { vercelDomainNames } from '../models/vercelDomainNames'

export function Guide(): ReactNode {
	return (
		<div className="flex-1 flex flex-col justify-center items-center h-full text-center">
			<div className="my-4 font-Skranji text-3xl md:text-4xl text-gray-700">
				<TextLoop className="text-pink-600">{rollingDomainSpeciesNames}</TextLoop>
				.vercel.app
			</div>

			<div className="uppercase text-xl text-gray-500">or</div>

			<div className="my-4 font-Skranji text-3xl md:text-4xl text-gray-700">
				<TextLoop className="text-teal-600">{vercelDomainNames}</TextLoop>
				.vercel.app/
				<TextLoop className="text-pink-600">{rollingPathSpeciesNames}</TextLoop>
			</div>

			<div className="text-xl text-gray-500">to go to any Pokémon</div>
		</div>
	)
}
