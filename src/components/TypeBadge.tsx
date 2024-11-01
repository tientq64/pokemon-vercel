import clsx from 'clsx'
import { CSSProperties, ReactNode } from 'react'
import { Type } from '../models/types'

interface Props {
	type: Type
	className?: string
	style?: CSSProperties
}

export function TypeBadge({ type, className, style }: Props): ReactNode {
	return (
		<div
			className={clsx('px-2 rounded text-white', className)}
			style={{
				backgroundColor: type.color,
				...style
			}}
		>
			{type.text}
		</div>
	)
}
