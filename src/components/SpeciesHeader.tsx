import clsx from 'clsx'
import { ReactNode } from 'react'
import { useAppStore } from '../store/useAppStore'

export function SpeciesHeader(): ReactNode {
	const species = useAppStore((state) => state.species)!

	return (
		<h1
			className={clsx(
				'pt-8 px-4 md:px-16 font-Skranji text-center text-5xl',
				species.color.nameClass
			)}
		>
			{species.text}
		</h1>
	)
}
