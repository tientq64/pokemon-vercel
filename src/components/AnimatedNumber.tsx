import { motion, useSpring, useTransform } from 'framer-motion'
import { ReactNode, useEffect } from 'react'

interface Props {
	value: number
	precision?: number
	fixedPrecision?: boolean
}

export function AnimatedNumber({ value, precision = 0, fixedPrecision = false }: Props): ReactNode {
	const spring = useSpring(value, {
		mass: 0.75,
		stiffness: 75,
		damping: 15
	})
	const display = useTransform(spring, (current) => {
		let formatedValue: string = current.toFixed(precision)
		if (!fixedPrecision) {
			formatedValue = String(Number(formatedValue))
		}
		return formatedValue
	})

	useEffect(() => {
		spring.set(value)
	}, [spring, value])

	return <motion.span>{display}</motion.span>
}
