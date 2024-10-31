import clsx from 'clsx'
import { ReactNode } from 'react'
import { useAppStore } from '../store/useAppStore'

export function SpeciesFormsBar(): ReactNode {
	const species = useAppStore((state) => state.species)!

	return (
		<div className="flex flex-wrap gap-y-2 py-2 px-4 md:px-16 divide-x">
			{species.forms.length > 1 && (
				<>
					{species.forms.map((form) => (
						<div className="flex-1 flex justify-center items-center min-h-10 text-center">
							{form.formText}
						</div>
					))}
				</>
			)}
			{species.forms.length === 1 && <div className="h-10" />}
		</div>
	)
}
