import { ReactNode } from 'react'

export function LoadingScreen(): ReactNode {
	return (
		<div className="flex flex-col justify-center items-center h-full bg-gray-100">
			<div className="font-Skranji text-4xl text-gray-600">Loading...</div>
		</div>
	)
}
