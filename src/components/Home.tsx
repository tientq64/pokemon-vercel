import clsx from 'clsx'
import { ReactNode, useState } from 'react'
import { Color, colors } from '../models/colors'
import { Guide } from './Guide'

export function Home(): ReactNode {
	const [color] = useState<Color>(colors.gray)

	return (
		<div className="h-full bg-gray-100">
			<div className={clsx('h-full px-4 md:px-16 bg-gradient-to-b', color.gradientClass)}>
				<h1
					className={clsx(
						'pt-6 px-4 md:px-16 font-Skranji text-center text-5xl',
						color.nameClass
					)}
				>
					Pokémon Vercel
				</h1>
				<Guide />
			</div>
		</div>
	)
}
