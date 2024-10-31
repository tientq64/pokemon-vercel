import { useFavicon, useTitle } from 'ahooks'
import clsx from 'clsx'
import { ReactNode } from 'react'
import { useAppStore } from '../store/useAppStore'
import { SpeciesFormsBar } from './SpeciesFormsBar'
import { SpeciesHeader } from './SpeciesHeader'

export function Species(): ReactNode {
	const species = useAppStore((state) => state.species)!

	useTitle(species.text)
	useFavicon(species.iconUrl)

	return (
		<div className={clsx('flex-1 flex flex-col bg-gradient-to-b', species.color.gradientClass)}>
			<SpeciesHeader />
			<SpeciesFormsBar />
		</div>
	)
}
