import { ReactNode } from 'react'

export function Footer(): ReactNode {
	return (
		<footer className="py-8 border-t text-center bg-gray-100">
			{'Degisned by '}
			<a
				className="text-sky-600 hover:underline decoration-dotted underline-offset-2"
				href="https://github.com/tientq64"
				target="_blank"
			>
				tientq64
			</a>
		</footer>
	)
}
