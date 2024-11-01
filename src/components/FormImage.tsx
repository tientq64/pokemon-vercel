import { ReactNode } from 'react'
import { Form } from '../hooks/useGetSpecies'

interface Props {
	form: Form
}

export function FormImage({ form }: Props): ReactNode {
	return (
		<>
			{form.imageUrl && (
				<img
					className="w-96 h-64 object-contain image-pixelated"
					src={form.imageUrl}
					alt="Form"
				/>
			)}
			{!form.imageUrl && (
				<div className="w-96 h-64 flex justify-center items-center text-gray-600">
					No image
				</div>
			)}
		</>
	)
}
