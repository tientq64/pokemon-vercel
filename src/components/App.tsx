import { ReactNode, useEffect } from 'react'
import { extractSpeciesNameFromCurrentPageUrl } from '../helpers/extractSpeciesNameFromCurrentPageUrl'
import { useGetSpecies } from '../hooks/useGetSpecies'
import { useAppStore } from '../store/useAppStore'
import { Footer } from './Footer'
import { Guide } from './Guide'
import { LoadingScreen } from './LoadingScreen'
import { Species } from './Species'

const speciesName = extractSpeciesNameFromCurrentPageUrl()

export function App(): ReactNode {
	const species = useAppStore((state) => state.species)
	const setSpecies = useAppStore((state) => state.setSpecies)

	const getter = useGetSpecies()

	useEffect(() => {
		if (getter.data === undefined) return
		setSpecies(getter.data)
	}, [getter.data])

	useEffect(() => {
		getter.run(speciesName)
		return getter.cancel
	}, [])

	return (
		<div className="flex flex-col h-full text-gray-900">
			{(speciesName === '' || getter.error) && (
				<div className="h-full px-4 md:px-16 bg-gray-100">
					<Guide />
				</div>
			)}
			{getter.loading && <LoadingScreen />}
			{species && <Species />}
			<Footer />
		</div>
	)
}
