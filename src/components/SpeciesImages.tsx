import { ReactNode, useCallback } from 'react'
import TextLoop from 'react-text-loop'
import { Form } from '../hooks/useGetSpecies'
import { useAppStore } from '../store/useAppStore'
import { FormImage } from './FormImage'

export function SpeciesImages(): ReactNode {
	const species = useAppStore((state) => state.species)!
	const currentForm = useAppStore((state) => state.currentForm)!
	const setCurrentForm = useAppStore((state) => state.setCurrentForm)!

	const handleLoopImagesChange = useCallback(
		(event: any): void => {
			const changedForm: Form = species.forms[event.currentWordIndex]
			setCurrentForm(changedForm)
		},
		[species.forms]
	)

	return (
		<div className="h-64 flex justify-center items-center">
			{species.forms.length > 1 && (
				<TextLoop
					springConfig={{
						damping: 10,
						stiffness: 100
					}}
					onChange={handleLoopImagesChange}
				>
					{species.forms.map((form) => (
						<FormImage form={form} />
					))}
				</TextLoop>
			)}
			{species.forms.length === 1 && <FormImage form={currentForm} />}
		</div>
	)
}
