import clsx from 'clsx'
import { ReactNode } from 'react'

interface Props {
	className?: string
	children?: ReactNode
}

export function Heading({ className, children }: Props): ReactNode {
	return <div className={clsx('font-bold text-3xl pb-4 border-b', className)}>{children}</div>
}
