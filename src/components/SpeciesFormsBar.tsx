import { ReactNode, useMemo } from 'react'
import { useAppStore } from '../store/useAppStore'
import clsx from 'clsx'
import { uniq, uniqBy } from 'lodash-es'

export function SpeciesFormsBar(): ReactNode {
	const species = useAppStore((state) => state.species)!
	const currentForm = useAppStore((state) => state.currentForm)!

	const formTextProp = useMemo<'formText' | 'text'>(() => {
		if (uniqBy(species.forms, 'formText').length === species.forms.length) {
			return 'formText'
		}
		return 'text'
	}, [species.forms])

	return (
		<div className="flex flex-wrap gap-y-2 py-2 px-4 md:px-16 divide-x">
			{species.forms.length > 1 && (
				<>
					{species.forms.map((form) => (
						<div
							className={clsx(
								'md:flex-1 grow flex justify-center items-center min-h-5 md:min-h-8 px-2 leading-none text-center text-sm',
								currentForm === form && 'font-bold',
								species.forms.length <= 5 && 'md:text-base'
							)}
						>
							{form[formTextProp]}
						</div>
					))}
				</>
			)}
			{species.forms.length === 1 && <div className="h-10" />}
		</div>
	)
}
