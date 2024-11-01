import { ReactNode, useEffect } from 'react'
import { extractSpeciesNameFromCurrentPageUrl } from '../helpers/extractSpeciesNameFromCurrentPageUrl'
import { useGetSpecies } from '../hooks/useGetSpecies'
import { useAppStore } from '../store/useAppStore'
import { Footer } from './Footer'
import { Home } from './Home'
import { LoadingScreen } from './LoadingScreen'
import { Species } from './Species'

const speciesName = extractSpeciesNameFromCurrentPageUrl()

export function App(): ReactNode {
	const species = useAppStore((state) => state.species)
	const setSpecies = useAppStore((state) => state.setSpecies)
	const setCurrentForm = useAppStore((state) => state.setCurrentForm)

	const getter = useGetSpecies()

	useEffect(() => {
		if (getter.data === undefined) return
		setSpecies(getter.data)
		setCurrentForm(getter.data.forms[0])
	}, [getter.data])

	useEffect(() => {
		getter.run(speciesName)
		return getter.cancel
	}, [])

	return (
		<div className="flex flex-col h-full text-gray-900">
			{(speciesName === '' || getter.error) && <Home />}
			{getter.loading && <LoadingScreen />}
			{species && <Species />}
			<Footer />
		</div>
	)
}
