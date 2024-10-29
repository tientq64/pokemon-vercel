import clsx from 'clsx'
import { ReactNode } from 'react'

interface Props {
	className?: string
	children?: ReactNode
}

export function Table({ className, children }: Props): ReactNode {
	return (
		<table
			className={clsx(
				'w-full',
				'[&_tr]:border-b',
				'[&_tr:last-child]:border-0',
				'[&_td]:px-2 [&_td]:py-1',
				'[&_td:first-child]:w-0 [&_td:first-child]:pr-8 [&_td:first-child]:whitespace-nowrap [&_td:first-child]:text-right [&_td:first-child]:text-gray-600',
				className
			)}
		>
			{children}
		</table>
	)
}
